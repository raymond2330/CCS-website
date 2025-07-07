# CCS Website Heroku Deployment Script
# Run this script in PowerShell from your project directory

Write-Host "🚀 CCS Website Heroku Deployment Script" -ForegroundColor Green
Write-Host "=======================================" -ForegroundColor Green

# Check if Heroku CLI is installed
Write-Host "`nChecking Heroku CLI..." -ForegroundColor Yellow
try {
    $herokuVersion = heroku --version
    Write-Host "✅ Heroku CLI found: $herokuVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Heroku CLI not found. Please install it first." -ForegroundColor Red
    Write-Host "Download from: https://devcenter.heroku.com/articles/heroku-cli" -ForegroundColor Blue
    exit 1
}

# Check if user is logged in to Heroku
Write-Host "`nChecking Heroku authentication..." -ForegroundColor Yellow
try {
    $herokuAuth = heroku auth:whoami
    Write-Host "✅ Logged in as: $herokuAuth" -ForegroundColor Green
} catch {
    Write-Host "❌ Not logged in to Heroku. Please run 'heroku login' first." -ForegroundColor Red
    exit 1
}

# Get app name from user
$appName = Read-Host "`nEnter your Heroku app name (or press Enter to let Heroku generate one)"

# Create Heroku app
Write-Host "`nCreating Heroku app..." -ForegroundColor Yellow
if ($appName) {
    try {
        $createResult = heroku create $appName 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ App created: $appName" -ForegroundColor Green
        } else {
            Write-Host "❌ Failed to create app. It might already exist." -ForegroundColor Red
            $continue = Read-Host "Continue with existing app '$appName'? (y/n)"
            if ($continue -ne 'y') { exit 1 }
        }
    } catch {
        Write-Host "❌ Failed to create app. Error: $_" -ForegroundColor Red
        $continue = Read-Host "Continue with existing app '$appName'? (y/n)"
        if ($continue -ne 'y') { exit 1 }
    }
} else {
    $createResult = heroku create
    # Extract app name from the output
    $appName = ($createResult | Select-String "https://(.+)\.herokuapp\.com/").Matches[0].Groups[1].Value
    Write-Host "✅ App created with name: $appName" -ForegroundColor Green
}

# Set buildpack
Write-Host "`nSetting Node.js buildpack..." -ForegroundColor Yellow
if ($appName) {
    heroku buildpacks:set heroku/nodejs --app $appName
} else {
    heroku buildpacks:set heroku/nodejs
}
Write-Host "✅ Node.js buildpack set" -ForegroundColor Green

# Set environment variables
Write-Host "`nSetting environment variables..." -ForegroundColor Yellow
if ($appName) {
    heroku config:set NODE_ENV=production --app $appName
    heroku config:set NPM_CONFIG_PRODUCTION=false --app $appName
} else {
    heroku config:set NODE_ENV=production
    heroku config:set NPM_CONFIG_PRODUCTION=false
}
Write-Host "✅ Environment variables set" -ForegroundColor Green

# Add git remote if app name is known
if ($appName) {
    Write-Host "`nSetting up git remote..." -ForegroundColor Yellow
    try {
        heroku git:remote -a $appName
        Write-Host "✅ Git remote configured" -ForegroundColor Green
    } catch {
        Write-Host "⚠️  Git remote might already exist" -ForegroundColor Yellow
    }
}

# Add and commit changes
Write-Host "`nPreparing files for deployment..." -ForegroundColor Yellow
git add .
git commit -m "Prepare for Heroku deployment"
Write-Host "✅ Files committed" -ForegroundColor Green

# Deploy to Heroku
Write-Host "`nDeploying to Heroku..." -ForegroundColor Yellow
Write-Host "This may take a few minutes..." -ForegroundColor Blue
git push heroku main

Write-Host "`n🎉 Deployment complete!" -ForegroundColor Green
Write-Host "Opening your app in browser..." -ForegroundColor Yellow
heroku open

Write-Host "`n📊 Useful commands:" -ForegroundColor Cyan
Write-Host "View logs: heroku logs --tail" -ForegroundColor White
Write-Host "Restart app: heroku restart" -ForegroundColor White
Write-Host "View app info: heroku info" -ForegroundColor White
