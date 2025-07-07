# CCS Website Deployment Guide - Heroku

This guide will walk you through deploying your CCS (College of Computer Studies) website to Heroku.

## Prerequisites

Before starting, ensure you have:
- [Node.js](https://nodejs.org/) (v18 or later) installed locally
- [Git](https://git-scm.com/) installed
- A [Heroku account](https://signup.heroku.com/)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed

## Step 1: Prepare Your Project for Deployment

### 1.1 Create a Procfile

The Procfile tells Heroku how to run your application.

Create a file named `Procfile` (no extension) in your project root:

```
web: npm start
```

### 1.2 Update package.json

Ensure your `package.json` has the correct scripts and engines specified:

```json
{
  "name": "ccs-website",
  "version": "0.1.0",
  "private": true,
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=8.0.0"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "heroku-postbuild": "npm run build"
  }
}
```

### 1.3 Environment Variables

If your project uses environment variables, create a `.env.example` file with placeholder values:

```
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://your-app-name.herokuapp.com
```

## Step 2: Initialize Git Repository (if not already done)

```bash
cd ccs-website
git init
git add .
git commit -m "Initial commit"
```

## Step 3: Install and Login to Heroku CLI

### Install Heroku CLI:
- **Windows**: Download from [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
- **macOS**: `brew tap heroku/brew && brew install heroku`
- **Linux**: Use the installer script from Heroku's website

### Login to Heroku:
```bash
heroku login
```

## Step 4: Create a Heroku Application

```bash
# Create a new Heroku app (replace 'your-app-name' with your desired name)
heroku create your-ccs-website

# Or let Heroku generate a random name
heroku create
```

## Step 5: Configure Heroku Settings

**Important**: Make sure you're in your project directory and have created your Heroku app first!

### 5.1 Set Node.js Buildpack
```bash
# Option 1: If you're in the project directory with git remote already set
heroku buildpacks:set heroku/nodejs

# Option 2: Specify the app name explicitly
heroku buildpacks:set heroku/nodejs --app your-app-name

# Option 3: Check your current app context
heroku apps:info
```

### 5.2 Set Environment Variables (if needed)
```bash
# Example: Set the site URL (replace 'your-app-name' with your actual app name)
heroku config:set NEXT_PUBLIC_SITE_URL=https://your-app-name.herokuapp.com --app your-app-name

# Set Node environment to production
heroku config:set NODE_ENV=production --app your-app-name

# Or if you're in the project directory with git remote set:
heroku config:set NODE_ENV=production
```

### 5.3 Configure Heroku for Next.js Static Files
Add these configurations to optimize static file serving:

```bash
# Disable Node.js metrics (optional, reduces memory usage)
heroku config:set NPM_CONFIG_PRODUCTION=false
heroku config:set NODE_MODULES_CACHE=false
```

## Step 6: Deploy to Heroku

### 6.1 Add Heroku Remote (if not automatically added)
```bash
heroku git:remote -a your-app-name
```

### 6.2 Deploy Your Application
```bash
git add .
git commit -m "Prepare for Heroku deployment"
git push heroku main
```

If your default branch is `master` instead of `main`:
```bash
git push heroku master
```

## Step 7: Open Your Deployed Application

```bash
heroku open
```

## Step 8: Monitor Your Application

### View Logs
```bash
heroku logs --tail
```

### Check Application Status
```bash
heroku ps
```

## Troubleshooting

### Common Issues and Solutions

#### 0. Missing Required Flag App Error
If you get the error "Missing required flag app" when running Heroku commands:

```bash
# This error occurs when Heroku doesn't know which app to target
# Solutions:

# Option 1: Add --app flag with your app name
heroku buildpacks:set heroku/nodejs --app your-app-name

# Option 2: Make sure you're in the project directory and have the git remote set
heroku git:remote -a your-app-name
# Then run commands without --app flag
heroku buildpacks:set heroku/nodejs

# Option 3: Check what apps you have
heroku apps

# Option 4: Check current git remotes
git remote -v
```

#### 1. Build Failures
If the build fails, check the logs:
```bash
heroku logs --tail
```

Common solutions:
- Ensure all dependencies are in `dependencies`, not `devDependencies`
- Check for TypeScript errors
- Verify Node.js version compatibility

#### 2. Static Files Not Loading
If images or other static files aren't loading:
- Ensure files are in the `public` directory
- Check file paths (case-sensitive on Heroku)
- Verify files are committed to git

#### 3. Memory Issues
If you encounter memory issues:
```bash
# Upgrade to a paid dyno for more memory
heroku ps:scale web=1 --size=standard-1x
```

#### 4. Custom Domain Setup
To use a custom domain:
```bash
heroku domains:add www.yourcustomdomain.com
heroku domains:add yourcustomdomain.com
```

Then configure your DNS to point to the Heroku app.

## Environment-Specific Configurations

### Production Optimizations

1. **Enable compression** in your `next.config.ts`:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  devIndicators: false,
  // Add other optimizations
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
```

2. **Add security headers**:
```typescript
const nextConfig: NextConfig = {
  // ... other config
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

## Continuous Deployment

### GitHub Integration
1. Connect your Heroku app to GitHub:
   - Go to your Heroku dashboard
   - Select your app
   - Go to the "Deploy" tab
   - Connect to GitHub and select your repository
   - Enable automatic deploys from your main branch

### Manual Deployment Commands
For future deployments:
```bash
git add .
git commit -m "Your commit message"
git push heroku main
```

## Cost Considerations

- **Free Tier**: Heroku offers limited free hours (apps sleep after 30 minutes of inactivity)
- **Hobby Dyno**: $7/month, doesn't sleep, includes SSL
- **Standard Dynos**: Starting at $25/month, more resources and features

## Useful Heroku Commands

```bash
# View app information
heroku info

# Scale dynos
heroku ps:scale web=1

# Restart the application
heroku restart

# Access app shell
heroku run bash

# View configuration variables
heroku config

# Set configuration variable
heroku config:set KEY=value

# Unset configuration variable
heroku config:unset KEY
```

## Additional Resources

- [Heroku Node.js Documentation](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Heroku CLI Reference](https://devcenter.heroku.com/articles/heroku-cli-commands)

---

## Quick Deployment Checklist

- [ ] Create `Procfile`
- [ ] Update `package.json` with engines and heroku-postbuild script
- [ ] Commit all changes to git
- [ ] Install and login to Heroku CLI
- [ ] Create Heroku app
- [ ] Set buildpack to Node.js
- [ ] Configure environment variables
- [ ] Deploy with `git push heroku main`
- [ ] Open app with `heroku open`
- [ ] Monitor with `heroku logs --tail`

Your CCS website should now be live on Heroku! 🚀
