# Netlify Deployment Guide

## Pre-Deployment Checklist

### ✅ Configuration Files
- [x] `netlify.toml` - Configured with build command and publish directory
- [x] `package.json` - Build scripts ready
- [x] `vite.config.js` - Build configuration set
- [x] `public/_redirects` - SPA routing configured
- [x] `.gitignore` - Proper exclusions set

### ✅ Assets & Images
- [x] All product images in `/public/images/` folder
- [x] Logo image (`logo.png`) in `/public/images/` folder
- [x] Banner images referenced correctly

### ✅ Contact Information
- [x] WhatsApp number: `+97474419065` (stored as `97474419065` in code)
- [x] Email: `safechoicemedical@gmail.com`

## Deployment Steps

### Option 1: Git-Based Deployment (Recommended)

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Ready for Netlify deployment"
   ```

2. **Push to GitHub/GitLab/Bitbucket**:
   ```bash
   git remote add origin <your-repository-url>
   git branch -M main
   git push -u origin main
   ```

3. **Connect to Netlify**:
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider
   - Select your repository
   - Netlify will auto-detect settings from `netlify.toml`:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click "Deploy site"

4. **Verify Deployment**:
   - Wait for build to complete
   - Check that all routes work (SPA routing)
   - Test images load correctly
   - Verify WhatsApp and email links work

### Option 2: Manual Deployment (Drag & Drop)

1. **Build Locally**:
   ```bash
   npm install
   npm run build
   ```

2. **Deploy**:
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder
   - Your site will be live immediately

## Post-Deployment Checklist

### ✅ Functionality Tests
- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] Mobile menu functions properly
- [ ] Product images display correctly
- [ ] All pages load (Products, Abortion Care, About Us, Contact, Consultation)
- [ ] Consultation form redirects to WhatsApp correctly
- [ ] Contact page WhatsApp and email links work
- [ ] Logo displays in header
- [ ] Banners display on all pages

### ✅ Responsive Design
- [ ] Mobile menu works on small screens
- [ ] Product grid displays correctly (4 on desktop, 2 on mobile)
- [ ] All pages are mobile-friendly
- [ ] Images scale properly

### ✅ SEO & Performance
- [ ] Page titles are correct
- [ ] Meta descriptions are present
- [ ] Images have alt text
- [ ] Site loads quickly

## Netlify Configuration

### Build Settings (Auto-detected from netlify.toml)
```
Build command: npm run build
Publish directory: dist
```

### Environment Variables (if needed)
If you need to add environment variables later:
- Go to Site settings → Environment variables
- Add variables like:
  - `VITE_WHATSAPP_NUMBER` (if you want to make it configurable)
  - `VITE_EMAIL` (if you want to make it configurable)

### Custom Domain (Optional)
1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow Netlify's DNS instructions

## Troubleshooting

### Images Not Loading
- Verify images are in `/public/images/` folder
- Check image paths use `/images/` (not `/public/images/`)
- Ensure images are committed to git

### Routes Not Working
- Verify `public/_redirects` file exists
- Check `netlify.toml` has redirects configured
- Ensure React Router is using BrowserRouter

### Build Fails
- Check Node.js version (Netlify uses Node 18 by default)
- Verify all dependencies are in `package.json`
- Check build logs in Netlify dashboard

### WhatsApp Links Not Working
- Verify number format: `97474419065` (without +)
- Test the link format: `https://wa.me/97474419065`

## Important Notes

1. **Image Paths**: All images should be in `/public/images/` and referenced as `/images/filename.jpg`
2. **SPA Routing**: The `_redirects` file ensures all routes work correctly
3. **Build Output**: Vite builds to `dist` folder, which Netlify publishes
4. **Contact Info**: Currently hardcoded in components - can be moved to env variables if needed

## Support

If you encounter issues:
1. Check Netlify build logs
2. Verify all files are committed to git
3. Test build locally: `npm run build && npm run preview`
4. Check browser console for errors

---

**Ready to Deploy!** 🚀

Your site is configured and ready for Netlify deployment. Follow the steps above to go live.

