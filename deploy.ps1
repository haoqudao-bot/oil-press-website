param(
    [string]$Message = "update website"
)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   Oil Press Website - 一键部署脚本" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检查是否有修改
$status = git status --porcelain
if (-not $status) {
    Write-Host "没有检测到任何修改，无需部署。" -ForegroundColor Yellow
    pause
    exit 0
}

Write-Host "检测到以下修改：" -ForegroundColor Green
git status --short
Write-Host ""

# 确认
$confirm = Read-Host "是否继续部署？(Y/n)"
if ($confirm -eq "n" -or $confirm -eq "N") {
    Write-Host "已取消。" -ForegroundColor Yellow
    pause
    exit 0
}

# 执行部署
Write-Host ""
Write-Host "[1/3] 添加所有文件..." -ForegroundColor Gray
git add -A

Write-Host "[2/3] 提交更改..." -ForegroundColor Gray
git commit -m $Message

Write-Host "[3/3] 推送到 GitHub..." -ForegroundColor Gray
git push origin master

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "   部署成功！Cloudflare Pages 将自动更新" -ForegroundColor Green
    Write-Host "   等待 2-5 分钟后刷新网站即可看到最新内容" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "部署失败，请检查网络连接后重试。" -ForegroundColor Red
}

Write-Host ""
pause
