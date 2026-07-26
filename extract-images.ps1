$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem

$docxPath = 'E:\液压榨油机\最新产品介绍2025\产品大全-浩诺机械-2025.11.docx'
$tempPath = 'd:\Users\YYJ\Documents\Trae\temp-catalog.docx'
$outputDir = 'd:\Users\YYJ\Documents\Trae\public\images\products'

# Copy to temp path
Copy-Item -Path $docxPath -Destination $tempPath -Force
Write-Output "Copied docx to: $tempPath"

if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
}

$zip = [System.IO.Compression.ZipFile]::OpenRead($tempPath)
$entries = $zip.Entries | Where-Object { $_.FullName -like 'word/media/*' }
$count = 0

foreach ($entry in $entries) {
    $stream = $entry.Open()
    $bytes = New-Object byte[] $entry.Length
    $stream.Read($bytes, 0, $entry.Length) | Out-Null
    $stream.Close()
    $name = $entry.Name
    $outPath = Join-Path $outputDir $name
    [System.IO.File]::WriteAllBytes($outPath, $bytes)
    $count++
    Write-Output "Extracted: $name ($($entry.Length) bytes)"
}

$zip.Dispose()

# Clean up temp file
Remove-Item $tempPath -Force

Write-Output "TOTAL: $count images extracted"
