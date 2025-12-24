# Git Commands - Push Updates to GitHub

## Quick Commands (Copy & Paste)

Open Git Bash, Command Prompt, or PowerShell in `C:\src` and run:

```bash
# Check what files have changed
git status

# Add all changed files
git add .

# Commit with a message
git commit -m "Update SEO configuration with Netlify domain and UAE/Qatar keywords"

# Push to GitHub
git push origin main
```

## Step-by-Step Guide

### Step 1: Check Status
See what files have been modified:
```bash
git status
```

### Step 2: Add Files
Add all changed files to staging:
```bash
git add .
```

Or add specific files:
```bash
git add index.html App.jsx public/sitemap.xml public/robots.txt
```

### Step 3: Commit with Message
Create a commit with a descriptive message:
```bash
git commit -m "Update SEO configuration with Netlify domain and UAE/Qatar keywords"
```

**Good commit message examples:**
- `"Update SEO: Add Netlify domain, UAE/Qatar keywords, and meta tags"`
- `"SEO optimization: Configure domain URLs and geo-targeting for UAE/Qatar"`
- `"Add comprehensive SEO setup with sitemap, robots.txt, and structured data"`

### Step 4: Push to GitHub
Push your changes:
```bash
git push origin main
```

If it's your first push or branch name is different:
```bash
git push -u origin main
```

## Complete Sequence (One Go)

```bash
cd C:\src
git add .
git commit -m "Update SEO configuration with Netlify domain and UAE/Qatar keywords"
git push origin main
```

## If You Get Errors

### Error: "not a git repository"
```bash
git init
git remote add origin https://github.com/vaultone322-prog/SafeChoice-Medical.git
git add .
git commit -m "Initial commit with SEO configuration"
git branch -M main
git push -u origin main
```

### Error: "Authentication failed"
- Use GitHub Desktop (easier)
- Or set up Personal Access Token:
  1. GitHub → Settings → Developer settings → Personal access tokens
  2. Generate token with `repo` permissions
  3. Use token as password when pushing

### Error: "Updates were rejected"
```bash
git pull origin main
# Resolve any conflicts, then:
git push origin main
```

## Using GitHub Desktop (Easiest)

1. Open GitHub Desktop
2. You'll see all changed files listed
3. Write commit message: "Update SEO configuration with Netlify domain"
4. Click "Commit to main"
5. Click "Push origin"

---

**Quick Copy-Paste:**
```bash
git add .
git commit -m "Update SEO configuration with Netlify domain and UAE/Qatar keywords"
git push origin main
```

