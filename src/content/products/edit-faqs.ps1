$base = "d:\Users\YYJ\Documents\Trae\src\content\products"

function Edit-FAQ {
    param(
        [string]$File,
        [string]$Question,
        [string]$OldAnswerEnd,
        [string]$NewAnswerEnd
    )
    
    $filePath = Join-Path $base $File
    $content = Get-Content $filePath -Raw -Encoding UTF8
    
    $faqFrIndex = $content.IndexOf("faqFr:")
    $faqIndex = $content.IndexOf("faq:")
    
    if ($faqFrIndex -lt 0 -or $faqIndex -lt 0) {
        Write-Host "  Could not find faq sections in $File"
        return
    }
    
    $faqSection = $content.Substring($faqIndex, $faqFrIndex - $faqIndex)
    $questionIndex = $faqSection.IndexOf($Question)
    
    if ($questionIndex -lt 0) {
        Write-Host "  Could not find question '$Question' in $File"
        return
    }
    
    $answerIndex = $faqSection.IndexOf("answer:", $questionIndex)
    $nextQuestionIndex = $faqSection.IndexOf("- question:", $answerIndex + 7)
    if ($nextQuestionIndex -lt 0) {
        $nextQuestionIndex = $faqSection.Length
    }
    
    $answerText = $faqSection.Substring($answerIndex, $nextQuestionIndex - $answerIndex)
    
    if ($answerText.Contains($OldAnswerEnd)) {
        $newAnswer = $answerText.Replace($OldAnswerEnd, $NewAnswerEnd)
        $newFaqSection = $faqSection.Substring(0, $answerIndex) + $newAnswer + $faqSection.Substring($nextQuestionIndex)
        $newContent = $content.Substring(0, $faqIndex) + $newFaqSection + $content.Substring($faqFrIndex)
        [System.IO.File]::WriteAllText($filePath, $newContent, [System.Text.UTF8Encoding]::new($false))
        Write-Host "  Updated '$Question' in $File"
    } else {
        if ($answerText.Contains($NewAnswerEnd)) {
            Write-Host "  Already contains model-specific text for '$Question' in $File"
        } else {
            Write-Host "  Pattern not found for '$Question' in $File"
        }
    }
}

Write-Host "Starting FAQ differentiation edits..."

# HN426 Cold Press
Write-Host "=== cold-press-hydraulic-oil-press.md (HN426) ==="
Edit-FAQ -File "cold-press-hydraulic-oil-press.md" -Question "What warranty do you provide?" -OldAnswerEnd "shipped within 48 hours worldwide." -NewAnswerEnd "shipped within 48 hours worldwide. For the HN426, this includes coverage for the cold-press hydraulic system and 426 mm cylinder assembly."
Edit-FAQ -File "cold-press-hydraulic-oil-press.md" -Question "What certifications does the machine have?" -OldAnswerEnd "full-load testing before shipment." -NewAnswerEnd "full-load testing before shipment. For the HN426, the full-load test is conducted at 70 Mpa with 500 tonnes of pressing force."
Edit-FAQ -File "cold-press-hydraulic-oil-press.md" -Question "Can the barrel size be customized?" -OldAnswerEnd "edible oil production." -NewAnswerEnd "edible oil production. For the HN426, the standard barrel has an inner diameter of 390 mm and height of 800 mm."

# HN400 Medium
Write-Host "=== medium-hydraulic-oil-press.md (HN400) ==="
Edit-FAQ -File "medium-hydraulic-oil-press.md" -Question "What warranty do you provide?" -OldAnswerEnd "shipped within 48 hours worldwide." -NewAnswerEnd "shipped within 48 hours worldwide. For the HN400, this includes coverage for the 400 mm cylinder and versatile cold-press hydraulic system."
Edit-FAQ -File "medium-hydraulic-oil-press.md" -Question "What certifications does the machine have?" -OldAnswerEnd "full-load testing before shipment." -NewAnswerEnd "full-load testing before shipment. For the HN400, the full-load test is conducted at 63 Mpa with 500 tonnes of pressing force."
Edit-FAQ -File "medium-hydraulic-oil-press.md" -Question "Can the barrel size be customized?" -OldAnswerEnd "edible oil production." -NewAnswerEnd "edible oil production. For the HN400, the standard barrel has an inner diameter of 390 mm and height of 800 mm."

# HN480 High Pressure
Write-Host "=== high-pressure-hydraulic-oil-press.md (HN480) ==="
Edit-FAQ -File "high-pressure-hydraulic-oil-press.md" -Question "What warranty do you provide?" -OldAnswerEnd "shipped within 48 hours worldwide." -NewAnswerEnd "shipped within 48 hours worldwide. For the HN480, this includes coverage for the 480 mm high-pressure cylinder and ultra-high pressure pump station."
Edit-FAQ -File "high-pressure-hydraulic-oil-press.md" -Question "What certifications does the machine have?" -OldAnswerEnd "full-load testing before shipment." -NewAnswerEnd "full-load testing before shipment. For the HN480, the full-load test is conducted at 72 Mpa with 560 tonnes of pressing force."
Edit-FAQ -File "high-pressure-hydraulic-oil-press.md" -Question "Can the barrel size be customized?" -OldAnswerEnd "edible oil production." -NewAnswerEnd "edible oil production. For the HN480, the standard barrel has an inner diameter of 390 mm and height of 800 mm."

# HN500 Ultra High Pressure
Write-Host "=== ultra-high-pressure-hydraulic-oil-press.md (HN500) ==="
Edit-FAQ -File "ultra-high-pressure-hydraulic-oil-press.md" -Question "What warranty do you provide?" -OldAnswerEnd "shipped within 48 hours worldwide." -NewAnswerEnd "shipped within 48 hours worldwide. For the HN500, this includes coverage for the 5 cm thick steel plate frame and 500 mm flagship cylinder."
Edit-FAQ -File "ultra-high-pressure-hydraulic-oil-press.md" -Question "What certifications does the machine have?" -OldAnswerEnd "full-load testing before shipment." -NewAnswerEnd "full-load testing before shipment. For the HN500, the full-load test is conducted at 75 Mpa with 620 tonnes of pressing force."
Edit-FAQ -File "ultra-high-pressure-hydraulic-oil-press.md" -Question "Can the barrel size be customized?" -OldAnswerEnd "edible oil production." -NewAnswerEnd "edible oil production. For the HN500, the standard