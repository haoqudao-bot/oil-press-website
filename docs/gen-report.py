import markdown

with open('website-building-report.md', 'r', encoding='utf-8') as f:
    md = f.read()

html = markdown.markdown(md, extensions=['tables', 'fenced_code'])

full = f'''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>B2B 外贸独立站搭建全流程报告 - Hydoilpress.com</title>
<style>
body{{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei',sans-serif;max-width:960px;margin:0 auto;padding:40px 20px;line-height:1.8;color:#1f2937;}}
h1{{font-size:28px;border-bottom:3px solid #D97706;padding-bottom:12px;color:#1C1C1C;}}
h2{{font-size:22px;margin-top:40px;color:#1C1C1C;border-left:4px solid #D97706;padding-left:12px;}}
h3{{font-size:18px;}}
h4{{font-size:16px;}}
table{{border-collapse:collapse;width:100%;margin:16px 0;font-size:14px;}}
th,td{{border:1px solid #D1D5DB;padding:10px 12px;text-align:left;}}
th{{background:#F9FAFB;font-weight:600;}}
code{{background:#F3F4F6;padding:2px 6px;border-radius:4px;font-size:13px;color:#D97706;}}
pre{{background:#1C1C1C;color:#F9FAFB;padding:16px;border-radius:8px;overflow-x:auto;}}
pre code{{background:none;color:inherit;padding:0;}}
blockquote{{border-left:4px solid #D97706;margin:16px 0;padding:8px 16px;background:#FFFBEB;}}
ul,ol{{padding-left:24px;}}
li{{margin:4px 0;}}
a{{color:#2563EB;text-decoration:none;}}
a:hover{{text-decoration:underline;}}
hr{{border:none;border-top:1px solid #E5E7EB;margin:32px 0;}}
@media print{{body{{padding:0;}}}}
</style>
</head>
<body>
{html}
</body>
</html>'''

with open('website-building-report.html', 'w', encoding='utf-8') as f:
    f.write(full)

print(f"Generated: {len(full)} chars")
