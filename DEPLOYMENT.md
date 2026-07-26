# Deployment Configuration Guide

## Security Headers

To enhance website security, please configure the following security headers on your web server (Nginx, Apache, Cloudflare, etc.):

### Recommended Headers

```nginx
# Nginx Configuration Example

# Content Security Policy
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; object-src 'none'; frame-src 'none'; upgrade-insecure-requests;" always;

# X-Frame-Options
add_header X-Frame-Options "DENY" always;

# X-Content-Type-Options
add_header X-Content-Type-Options "nosniff" always;

# X-XSS-Protection
add_header X-XSS-Protection "1; mode=block" always;

# Strict-Transport-Security
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;

# Referrer-Policy
add_header Referrer-Policy "no-referrer-when-downgrade" always;

# Permissions-Policy
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
```

### Apache Configuration Example

```apache
<IfModule mod_headers.c>
    Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; object-src 'none'; frame-src 'none'; upgrade-insecure-requests;"
    Header always set X-Frame-Options "DENY"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
    Header always set Referrer-Policy "no-referrer-when-downgrade"
    Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>
```

### Cloudflare Configuration

If using Cloudflare, add these headers via **Rules > Transform Rules > Modify Response Headers**:

1. Content-Security-Policy: `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; object-src 'none'; frame-src 'none'; upgrade-insecure-requests;`
2. X-Frame-Options: `DENY`
3. X-Content-Type-Options: `nosniff`
4. X-XSS-Protection: `1; mode=block`
5. Strict-Transport-Security: `max-age=31536000; includeSubDomains; preload`
6. Referrer-Policy: `no-referrer-when-downgrade`

## Gzip/Brotli Compression

### Nginx

```nginx
gzip on;
gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_types
    text/plain
    text/css
    text/xml
    text/javascript
    application/javascript
    application/xml+rss
    application/json
    image/svg+xml;

# Brotli (requires ngx_brotli module)
brotli on;
brotli_comp_level 6;
brotli_types
    text/plain
    text/css
    text/xml
    text/javascript
    application/javascript
    application/xml+rss
    application/json
    image/svg+xml;
```

### Apache

```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain text/html text/xml text/css text/javascript application/javascript application/xml+rss application/json image/svg+xml
</IfModule>
```

## HTTPS Configuration

Ensure your website is served over HTTPS with a valid SSL certificate.

### SSL/TLS Configuration (Nginx)

```nginx
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
ssl_prefer_server_ciphers off;
ssl_session_cache shared:SSL:10m;
ssl_session_timeout 10m;
```

## Performance Optimization

### Cache Control

```nginx
# Static assets caching
location ~* \.(js|css|png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf|eot)$ {
    expires 30d;
    add_header Cache-Control "public, immutable";
}

# HTML pages (no caching for dynamic content)
location ~* \.(html|htm)$ {
    expires -1;
    add_header Cache-Control "no-cache, no-store, must-revalidate";
}
```

## Notes

1. **Security Headers**: These headers help protect against XSS, clickjacking, and other common web vulnerabilities.
2. **CSP Adjustment**: The Content-Security-Policy may need adjustment based on third-party services used (e.g., Google Analytics, social media widgets).
3. **Testing**: After configuring, test your website using security scanning tools like:
   - [Security Headers](https://securityheaders.com/)
   - [Mozilla Observatory](https://observatory.mozilla.org/)
   - [GTmetrix](https://gtmetrix.com/)

4. **HTTPS**: Always use HTTPS in production. Obtain SSL certificates from Let's Encrypt or a trusted certificate authority.