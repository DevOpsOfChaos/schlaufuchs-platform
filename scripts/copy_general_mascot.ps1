$ErrorActionPreference = 'Stop'

$Repo = 'C:\Users\mries\Documents\LocalRepos\schlaufuchs-platform'
$Old = 'C:\HTTrack\Schlaufuchs_Relaunch\c-arts-modelle.de\schlaufuchs_web\_modern\assets\mascots'
$New = Join-Path $Repo 'public\assets\mascots'

New-Item -ItemType Directory -Force -Path $New | Out-Null
Copy-Item (Join-Path $Old 'general.png') (Join-Path $New 'general.png') -Force
