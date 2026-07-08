# SENTINEL AI - Build Guide

## Quick Start (Standalone Version)

For immediate preview, open `standalone.html` in your browser — it's a fully functional static HTML version with all animations and styling.

---

## Full Build (React + Vite)

### Step 1: Install Node.js

If not already installed:
- **Windows**: Download from [nodejs.org](https://nodejs.org/) (LTS recommended)
- **Mac**: `brew install node`
- **Linux**: Follow distribution-specific instructions

Verify installation:
```bash
node --version
npm --version
```

### Step 2: Install Dependencies

```bash
cd C:\Users\tikaa\sentinel-ai
npm install
```

This installs:
- React 18
- Vite
- Tailwind CSS
- Spline React integration
- Other utilities

### Step 3: Development Server

```bash
npm run dev
```

Output:
```
  VITE v4.5.0  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

Browser opens automatically to `http://localhost:5173`

### Step 4: Build for Production

```bash
npm run build
```

Creates optimized `/dist` folder with:
- Minified JavaScript
- Optimized CSS
- Asset-optimized build (~100KB gzipped)

### Step 5: Preview Production Build

```bash
npm run preview
```

Runs production build locally for testing before deployment.

---

## File Structure

```
sentinel-ai/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation bar component
│   │   └── Hero.tsx         # Hero section with Spline
│   ├── App.tsx              # Root app component
│   ├── main.tsx             # React entry point
│   └── index.css            # Tailwind + CSS variables
├── index.html               # HTML template
├── vite.config.ts           # Vite config
├── tailwind.config.ts       # Tailwind theme config
├── tsconfig.json            # TypeScript config
├── postcss.config.js        # PostCSS config
├── package.json             # Dependencies
├── standalone.html          # Static version (no build needed)
└── README.md                # Documentation
```

---

## Customization

### Update Spline Scene

Replace the scene URL in `src/components/Hero.tsx` (line 17):

```tsx
<Spline scene="https://YOUR-SPLINE-URL/scene.splinecode" className="w-full h-full" />
```

Get your Spline URL from [spline.design](https://spline.design)

### Change Colors

Edit `src/index.css` at the root level:

```css
:root {
  --primary: 119 99% 46%;        /* Green (hue saturation lightness) */
  --background: 0 0% 10%;        /* Dark charcoal */
  --foreground: 0 0% 96%;        /* Near-white */
  /* ... other colors */
}
```

Use HSL format: `hue saturation% lightness%`

### Adjust Typography

Modify `clamp()` values in component files:

**Heading** (Hero.tsx):
```tsx
className="text-[clamp(3rem,8vw,6rem)]"
/* Responsive: min 3rem, 8vw, max 6rem */
```

**Subheading**:
```tsx
className="text-[clamp(1.125rem,2.5vw,1.875rem)]"
```

**Description**:
```tsx
className="text-[clamp(0.875rem,1.5vw,1.25rem)]"
```

### Animation Delays

Adjust stagger timing in `src/components/Hero.tsx`:

```tsx
style={{ animationDelay: '0.2s' }}  /* Heading */
style={{ animationDelay: '0.4s' }}  /* Subheading */
style={{ animationDelay: '0.55s' }} /* Description */
style={{ animationDelay: '0.7s' }}  /* Buttons */
style={{ animationDelay: '0.85s' }} /* Trust line */
```

---

## Environment Requirements

- **Node.js**: v16 or higher
- **npm**: v7 or higher
- **Browser**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+

---

## Troubleshooting

### Port 5173 Already in Use

```bash
npm run dev -- --port 3000
```

### Clear Cache

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Fails

Ensure TypeScript has no errors:
```bash
npx tsc --noEmit
```

### Spline Scene Not Loading

- Verify scene URL is correct
- Check browser console for CORS errors
- Ensure Spline scene is published (not draft)

---

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag /dist folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Push /dist to gh-pages branch
```

### Traditional Server

```bash
npm run build
# Upload /dist contents to your server
```

---

## Performance Tips

- Spline scene loads lazily with Suspense fallback
- CSS animations use GPU-accelerated transforms
- Static assets are cached by Vite
- Production build is tree-shaken and minified

**Lighthouse Score Target**: 90+ Performance, 100 Accessibility

---

## Support

For issues:
1. Check `standalone.html` works (baseline)
2. Verify Node.js/npm versions
3. Review browser console for errors
4. Check Spline scene URL and permissions

---

**Happy building! 🚀**
