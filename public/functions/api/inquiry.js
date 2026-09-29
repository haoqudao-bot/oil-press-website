// Cloudflare Pages Function - inquiry form receiver
// Path: /api/inquiry
// Protection: honeypot + Cloudflare Turnstile + input sanitizing
// Delivery: Resend API (RESEND_API_KEY stored in Pages env vars)

const JSON_HEADERS = { 'Content-Type': 'application/json' };

function ok() {
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: JSON_HEADERS });
}
function err(status, msg) {
  return new Response(JSON.stringify({ ok: false, error: msg }), { status, headers: JSON_HEADERS });
}

// Remove line breaks and control chars (prevent email header injection), limit length
function strip(s, max) {
  if (!s) return '';
  let t = String(s).replace(/[\r\n]+/g, ' ').replace(/[\x00-\x1f\x7f]/g, '').trim().slice(0, max);
  return t;
}
function stripBlock(s, max) {
  if (!s) return '';
  let t = String(s).replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, '').trim().slice(0, max);
  return t;
}

export async function onRequestPost(context) {
  const { request, env } = context;

  let data;
  try { data = await request.formData(); } catch { return err(400, 'bad request'); }

  // 1) Honeypot: bot filled hidden field -> pretend success, drop silently
  if (data.get('_gotcha')) return ok();

  // 2) Turnstile verification (enabled when TURNSTILE_SECRET is set)
  if (env.TURNSTILE_SECRET) {
    const token = data.get('cf-turnstile-response');
    if (!token) return err(403, 'verification missing');
    const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET,
        response: String(token),
        remoteip: request.headers.get('CF-Connecting-IP') || '',
      }),
    });
    const result = await verify.json().catch(() => ({}));
    if (!result.success) return err(403, 'verification failed');
  }

  // 3) Extract and validate fields
  const name = strip(data.get('name'), 100);
  const email = strip(data.get('email'), 200);
  const message = stripBlock(data.get('message'), 5000);
  if (!name || !email || !message) return err(400, 'missing fields');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return err(400, 'invalid email');

  // 4) Build email content
  const source = strip(data.get('source'), 100) || strip(data.get('_subject'), 100) || 'Website';
  const rows = [
    ['Source / Page', source],
    ['Name', name],
    ['Email', email],
    ['WhatsApp / Phone', strip(data.get('whatsapp'), 60) || strip(data.get('phone'), 60)],
    ['Company', strip(data.get('company'), 150)],
    ['Country', strip(data.get('country'), 100)],
    ['Product Interest', strip(data.get('product'), 150)],
    ['Message', message],
    ['Submitted At (UTC)', new Date().toISOString()],
  ];
  const text = rows.filter(([, v]) => v).map(([k, v]) => k + ': ' + v).join('\n');
  const subject = '[Inquiry] ' + source + ' - ' + name;

  // 5) Send via Resend
  const resend = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + env.RESEND_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Website Inquiry <inquiry@hydoilpress.com>',
      to: [env.TO_EMAIL || 'export@hydoilpress.com'],
      reply_to: email,
      subject,
      text,
    }),
  });
  if (!resend.ok) return err(502, 'send failed');
  return ok();
}

export function onRequestGet() {
  return err(405, 'method not allowed');
}
