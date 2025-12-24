# Git Commands - Mobile Optimization Update

## Quick Commands (Copy & Paste)

```bash
# Step 1: Check what files have changed
git status

# Step 2: Add all changed files
git add .

# Step 3: Commit with a descriptive message
git commit -m "Mobile-first UI optimization: Reduce scrolling, add accordions, sticky WhatsApp button, improve tap targets"

# Step 4: Push to GitHub
git push origin main
```

## Complete One-Liner

```bash
git add . && git commit -m "Mobile-first UI optimization: Reduce scrolling, add accordions, sticky WhatsApp button, improve tap targets" && git push origin main
```

## Alternative Commit Messages

**Detailed version:**
```bash
git commit -m "Mobile-first optimization: Reduce vertical scrolling, shorten hero section, add collapsible accordions, sticky WhatsApp CTA, improve tap targets (48px), single-column layouts, simplified footer"
```

**Short version:**
```bash
git commit -m "Optimize website for mobile-first UI with accordions and improved UX"
```

## Step-by-Step Guide

### Step 1: Check Status
See what files have been modified:
```bash
git status
```

**Expected files:**
- `index.css`
- `components/Layout.css`
- `components/Layout.jsx`
- `components/Accordion.jsx` (new file)
- `pages/Home.jsx`
- `pages/AbortionCare.jsx`
- `pages/Products.jsx`
- `MOBILE_OPTIMIZATION_SUMMARY.md` (new file)

### Step 2: Add Files
Add all changed and new files:
```bash
git add .
```

Or add specific files:
```bash
git add index.css components/ pages/ MOBILE_OPTIMIZATION_SUMMARY.md
```

### Step 3: Commit with Message
Create a commit:
```bash
git commit -m "Mobile-first UI optimization: Reduce scrolling, add accordions, sticky WhatsApp button, improve tap targets"
```

### Step 4: Push to GitHub
Push your changes:
```bash
git push origin main
```

If it's your first push or branch name is different:
```bash
git push -u origin main
```

## If You Get Errors

### Error: "not a git repository"
```bash
git init
git remote add origin https://github.com/vaultone322-prog/SafeChoice-Medical.git
git add .
git commit -m "Mobile-first UI optimization"
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
3. Write commit message: "Mobile-first UI optimization: Reduce scrolling, add accordions, sticky WhatsApp button"
4. Click "Commit to main"
5. Click "Push origin"

---

**Quick Copy-Paste:**
```bash
git add .
git commit -m "Mobile-first UI optimization: Reduce scrolling, add accordions, sticky WhatsApp button, improve tap targets"
git push origin main
```

