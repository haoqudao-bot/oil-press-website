Write-Host "=== DNS 检查脚本 ===" -ForegroundColor Cyan
Write-Host "检查 hydoilpress.com 域名解析状态..." -ForegroundColor Yellow
Write-Host ""

# 1. 检查 Nameserver 记录
Write-Host "【1】检查 Nameserver 记录" -ForegroundColor Green
try {
    $ns = Resolve-DnsName -Name "hydoilpress.com" -Type NS -ErrorAction Stop
    Write-Host "当前 Nameservers:" -ForegroundColor White
    $ns | ForEach-Object { Write-Host "  $($_.NameHost)" -ForegroundColor Gray }
    
    $nsMatch = ($ns | Where-Object { $_.NameHost -match "cloudflare" })
    if ($nsMatch) {
        Write-Host "✅ Nameserver 已正确指向 Cloudflare" -ForegroundColor Green
    } else {
        Write-Host "❌ Nameserver 未指向 Cloudflare" -ForegroundColor Red
        Write-Host "   预期: heather.ns.cloudflare.com, javier.ns.cloudflare.com" -ForegroundColor Yellow
    }
} catch {
    Write-Host "⚠️  无法查询 NS 记录: $_" -ForegroundColor Yellow
}

Write-Host ""

# 2. 检查 A 记录（根域名）
Write-Host "【2】检查根域名 A 记录" -ForegroundColor Green
try {
    $a = Resolve-DnsName -Name "hydoilpress.com" -Type A -ErrorAction Stop
    if ($a) {
        Write-Host "根域名 A 记录:" -ForegroundColor White
        $a | ForEach-Object { Write-Host "  $($_.IPAddress)" -ForegroundColor Gray }
    } else {
        Write-Host "  (无 A 记录，可能使用 CNAME)" -ForegroundColor Gray
    }
} catch {
    Write-Host "  (查询失败或无记录)" -ForegroundColor Gray
}

# 3. 检查 CNAME 记录
Write-Host ""
Write-Host "【3】检查 CNAME 记录" -ForegroundColor Green
try {
    $cname = Resolve-DnsName -Name "www.hydoilpress.com" -Type CNAME -ErrorAction Stop
    if ($cname) {
        Write-Host "www 子域名 CNAME:" -ForegroundColor White
        $cname | ForEach-Object { Write-Host "  $($_.Name) -> $($_.HostName)" -ForegroundColor Gray }
        
        $pagesMatch = ($cname | Where-Object { $_.HostName -match "pages.dev" })
        if ($pagesMatch) {
            Write-Host "✅ CNAME 已正确指向 Cloudflare Pages" -ForegroundColor Green
        } else {
            Write-Host "⚠️  CNAME 未指向 Cloudflare Pages" -ForegroundColor Yellow
        }
    }
} catch {
    Write-Host "  (查询失败或无记录)" -ForegroundColor Gray
}

# 检查根域名 CNAME
try {
    $cnameRoot = Resolve-DnsName -Name "hydoilpress.com" -Type CNAME -ErrorAction Stop
    if ($cnameRoot) {
        Write-Host "根域名 CNAME:" -ForegroundColor White
        $cnameRoot | ForEach-Object { Write-Host "  $($_.Name) -> $($_.HostName)" -ForegroundColor Gray }
        
        $pagesMatch2 = ($cnameRoot | Where-Object { $_.HostName -match "pages.dev" })
        if ($pagesMatch2) {
            Write-Host "✅ 根域名 CNAME 已正确指向 Cloudflare Pages" -ForegroundColor Green
        }
    }
} catch {
    # 可能没有根域名 CNAME
}

Write-Host ""

# 4. 测试 HTTP 访问
Write-Host "【4】测试 HTTPS 访问" -ForegroundColor Green
try {
    $response = Invoke-WebRequest -Uri "https://hydoilpress.com" -TimeoutSec 10 -ErrorAction Stop
    Write-Host "✅ 网站可访问! 状态码: $($response.StatusCode)" -ForegroundColor Green
} catch {
    if ($_.Exception.Response) {
        Write-Host "⚠️  网站返回错误: $($_.Exception.Response.StatusCode)" -ForegroundColor Yellow
    } else {
        Write-Host "❌ 网站无法访问: $_" -ForegroundColor Red
        Write-Host "   可能是 DNS 尚未传播完成，请继续等待" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "=== 检查完成 ===" -ForegroundColor Cyan
Write-Host "如果 DNS 尚未生效，请耐心等待 (通常几分钟到几小时)" -ForegroundColor Yellow
Write-Host ""