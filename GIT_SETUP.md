# Git Setup Guide for SafeChoice Medical

## Repository URL
```
https://github.com/vaultone322-prog/SafeChoice-Medical.git
```

## Step-by-Step Setup

### Step 1: Install Git (if not installed)
Download from: https://git-scm.com/download/win

### Step 2: Open Git Bash or Command Prompt
Navigate to your project directory:
```bash
cd C:\src
```

### Step 3: Initialize Git Repository
```bash
git init
```

### Step 4: Add All Files
```bash
git add .
```

### Step 5: Create Initial Commit
```bash
git commit -m "Initial commit - SafeChoice Medical website ready for deployment"
```

### Step 6: Set Main Branch
```bash
git branch -M main
```

### Step 7: Add Remote Repository
```bash
git remote add origin https://github.com/vaultone322-prog/SafeChoice-Medical.git
```

### Step 8: Push to GitHub
```bash
git push -u origin main
```

## Complete Command Sequence (Copy & Paste)

If you've already initialized git, use this shorter sequence:

```bash
git remote add origin https://github.com/vaultone322-prog/SafeChoice-Medical.git
git branch -M main
git push -u origin main
```

## If You Get Authentication Errors

### Option 1: Use Personal Access Token
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` permissions
3. Use token as password when pushing

### Option 2: Use GitHub Desktop
1. Download GitHub Desktop: https://desktop.github.com/
2. Sign in with your GitHub account
3. Add repository → Choose local path: `C:\src`
4. Commit and push through the GUI

## After Pushing to GitHub

1. Go to your repository: https://github.com/vaultone322-prog/SafeChoice-Medical
2. Verify all files are uploaded
3. Then proceed to Netlify deployment:
   - Go to https://app.netlify.com
   - Add new site → Import from Git
   - Connect GitHub
   - Select `SafeChoice-Medical` repository
   - Deploy!

## Files That Should Be Committed

✅ All source files (`pages/`, `components/`, `App.jsx`, etc.)
✅ Configuration files (`package.json`, `vite.config.js`, `netlify.toml`)
✅ Public assets (`public/images/`, `public/_redirects`)
✅ Documentation (`README.md`, `DEPLOYMENT.md`)

## Files That Should NOT Be Committed (Already in .gitignore)

❌ `node_modules/` (will be installed on Netlify)
❌ `dist/` (will be built on Netlify)
❌ `.DS_Store`, `.vscode/`, etc.

---

**Quick Start:**
```bash
cd C:\src
git init
git add .
git commit -m "Initial commit - SafeChoice Medical"
git branch -M main
git remote add origin https://github.com/vaultone322-prog/SafeChoice-Medical.git
git push -u origin main
```

