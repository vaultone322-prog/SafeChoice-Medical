# 🚀 Netlify Deployment Checklist

## ✅ Pre-Deployment Verification

### Configuration Files
- ✅ `netlify.toml` - Configured correctly
- ✅ `package.json` - Build scripts ready
- ✅ `vite.config.js` - Build output set to `dist`
- ✅ `public/_redirects` - SPA routing configured
- ✅ `.gitignore` - Excludes node_modules and dist

### Assets Ready
- ✅ All product images in `/public/images/` folder (18 images)
- ✅ Logo (`logo.png`) in `/public/images/` folder
- ✅ Banner images configured

### Contact Information Updated
- ✅ WhatsApp: `+97474419065` (coded as `97474419065`)
- ✅ Email: `safechoicemedical@gmail.com`

## 📋 Deployment Steps

### Method 1: Git-Based Deployment (Recommended)

1. **Initialize Git** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Ready for Netlify deployment"
   ```

2. **Push to GitHub/GitLab/Bitbucket**:
   ```bash
   git remote add origin <your-repo-url>
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Netlify**:
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider
   - Select repository
   - Netlify auto-detects:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

### Method 2: Manual Deployment

1. **Build locally** (requires Node.js):
   ```bash
   npm install
   npm run build
   ```

2. **Deploy**:
   - Go to https://app.netlify.com/drop
   - Drag and drop the `dist` folder

## 🔍 Post-Deployment Testing

### Critical Tests
- [ ] Home page loads
- [ ] All navigation links work
- [ ] Mobile hamburger menu functions
- [ ] Product images display
- [ ] Logo displays in header
- [ ] All pages accessible:
  - [ ] `/products`
  - [ ] `/abortion-care`
  - [ ] `/about-us`
  - [ ] `/contact-us`
  - [ ] `/consultation`
- [ ] Consultation form redirects to WhatsApp
- [ ] Contact page WhatsApp link works
- [ ] Contact page email link works

### Responsive Tests
- [ ] Mobile menu works
- [ ] Product grid: 4 columns desktop, 2 columns mobile
- [ ] All pages mobile-friendly
- [ ] Images scale properly

## ⚙️ Netlify Settings

### Build Settings (Auto-detected)
```
Build command: npm run build
Publish directory: dist
Node version: 18 (default)
```

### Environment Variables (Optional)
If you want to make contact info configurable:
- `VITE_WHATSAPP_NUMBER=97474419065`
- `VITE_EMAIL=safechoicemedical@gmail.com`

## 🐛 Troubleshooting

### Build Fails
- Check Netlify build logs
- Verify Node.js version (Netlify uses 18 by default)
- Ensure all dependencies in `package.json`

### Images Not Loading
- Verify images in `/public/images/` folder
- Check paths use `/images/` (not `/public/images/`)
- Ensure images committed to git

### Routes Return 404
- Verify `public/_redirects` file exists
- Check `netlify.toml` redirects
- Ensure React Router uses BrowserRouter

### WhatsApp Links Don't Work
- Verify number: `97474419065` (no +)
- Test format: `https://wa.me/97474419065`

## 📝 Important Notes

1. **Image Paths**: All images must be in `/public/images/` folder
2. **SPA Routing**: `_redirects` file handles React Router routes
3. **Build Output**: Vite builds to `dist` folder
4. **Contact Info**: Currently hardcoded (can be moved to env vars)

## ✨ Your Site is Ready!

All configuration files are in place. Follow the deployment steps above to go live on Netlify.

---

**Quick Deploy Command** (if using Netlify CLI):
```bash
npm install -g netlify-cli
netlify deploy --prod
```

