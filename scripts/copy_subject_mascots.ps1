$ErrorActionPreference = 'Stop'

$Repo = 'C:\Users\mries\Documents\LocalRepos\schlaufuchs-platform'
$Old = 'C:\HTTrack\Schlaufuchs_Relaunch\c-arts-modelle.de\schlaufuchs_web\_modern\assets\mascots'
$New = Join-Path $Repo 'public\assets\mascots'

New-Item -ItemType Directory -Force -Path $New | Out-Null

Copy-Item (Join-Path $Old 'math.png') (Join-Path $New 'math.png') -Force
Copy-Item (Join-Path $Old 'html_css.png') (Join-Path $New 'html_css.png') -Force
Copy-Item (Join-Path $Old 'hacker.png') (Join-Path $New 'hacker.png') -Force
Copy-Item (Join-Path $Old 'linux.png') (Join-Path $New 'linux.png') -Force
Copy-Item (Join-Path $Old 'electro.png') (Join-Path $New 'electro.png') -Force
