param(
    [string]$Root = "src/content"
)

$keys = @(
    "learningGoals",
    "practiceIdeas",
    "commonMistakes",
    "keyTakeaways",
    "recognizeSignals",
    "selfCheckPoints",
    "hintPoints",
    "transferIdeas",
    "tags"
)

$files = Get-ChildItem $Root -Recurse -File -Include *.md,*.mdx
$changedFiles = @()

foreach ($file in $files) {
    $lines = Get-Content $file.FullName -Encoding UTF8
    if ($lines.Count -lt 2) { continue }

    $inFrontmatter = $false
    $currentKey = $null
    $changed = $false

    for ($i = 0; $i -lt $lines.Count; $i++) {
        $line = $lines[$i]

        if ($i -eq 0 -and $line -eq "---") {
            $inFrontmatter = $true
            continue
        }

        if ($inFrontmatter -and $line -eq "---") {
            break
        }

        if (-not $inFrontmatter) { continue }

        if ($line -match '^([A-Za-z0-9_]+):\s*$') {
            $candidate = $matches[1]
            if ($keys -contains $candidate) {
                $currentKey = $candidate
            } else {
                $currentKey = $null
            }
            continue
        }

        if ($currentKey -and $line -match '^(\s*-\s+)([^"].*:\s+.*)$') {
            $value = $matches[2].Trim()
            $value = $value -replace '"','\"'
            $lines[$i] = $matches[1] + '"' + $value + '"'
            $changed = $true
        }
    }

    if ($changed) {
        Set-Content $file.FullName $lines -Encoding UTF8
        $changedFiles += $file.FullName
    }
}

Write-Host ""
Write-Host "Geänderte Dateien:" -ForegroundColor Cyan
$changedFiles | ForEach-Object { Write-Host $_ }
Write-Host ""
Write-Host ("Anzahl geänderter Dateien: " + $changedFiles.Count) -ForegroundColor Green
