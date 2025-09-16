param(
  [string]$m = "chore: update"
)

# Ensure we're in repo root
Set-Location -Path (Split-Path -Parent $MyInvocation.MyCommand.Path) | Out-Null
Set-Location ..

# Git add/commit/push
& git add .
& git commit -m $m
& git push

Write-Host "Deploy done: pushed to origin/main with message:`n $m" -ForegroundColor Green
