# SafeChoice Medical

A React single-page application for confidential medical support services.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment to Netlify

### Option 1: Automatic Deployment (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Netlify will automatically detect the settings from `netlify.toml`
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

### Option 2: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `dist` folder to Netlify's deploy interface

### Important Notes for Deployment

- The `netlify.toml` file is already configured
- The `public/_redirects` file ensures SPA routing works correctly
- Update placeholder contact information before deployment:
  - WhatsApp number in `pages/ContactUs.jsx` and `pages/ConsultationForm.jsx`
  - Email address in `pages/ContactUs.jsx`

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.jsx
│   └── Layout.css
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── AbortionCare.jsx
│   ├── AboutUs.jsx
│   ├── ContactUs.jsx
│   └── ConsultationForm.jsx
├── App.jsx
├── main.jsx
├── index.css
└── index.html
```

## 🛠️ Tech Stack

- React 18
- React Router 6
- Vite
- CSS (Custom design system)

## 📝 License

Private project - All rights reserved

