# Quick Start - SENTINEL AI

## 🚀 Fastest Path (No Build Required)

Open `standalone.html` in your browser — fully functional with animations.

---

## 📦 Full React Build (with Node.js)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (opens http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📋 What You Get

✅ Full-screen dark hero landing page  
✅ Spline 3D background (lazy-loaded)  
✅ Responsive fluid typography  
✅ Staggered fade-up animations  
✅ Fixed navbar with nav links + CTA  
✅ HSL-based color system  
✅ TypeScript + React 18  
✅ Production-ready (~100KB gzipped)  

---

## 🎨 Key Files to Edit

| File | Purpose |
|------|---------|
| `src/index.css` | Change colors (HSL variables) |
| `src/components/Hero.tsx` | Replace Spline URL, adjust animations |
| `src/components/Navbar.tsx` | Customize nav links |
| `tailwind.config.ts` | Tailwind theme overrides |

---

## 🔧 Common Customizations

**Change Spline Scene:**
```tsx
// src/components/Hero.tsx line 17
<Spline scene="YOUR_URL_HERE" className="w-full h-full" />
```

**Change Primary Color (green → blue):**
```css
/* src/index.css */
--primary: 210 100% 50%;  /* Blue instead of green */
```

**Adjust Animation Speed:**
```tsx
// src/components/Hero.tsx
style={{ animationDelay: '0.1s' }}  // Faster (was 0.2s)
```

---

## ✨ Files Created

```
sentinel-ai/
├── src/
│   ├── components/Navbar.tsx
│   ├── components/Hero.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
├── package.json
├── standalone.html          ← Open this immediately
├── README.md
├── BUILD_GUIDE.md           ← Full instructions
└── QUICK_START.md           ← This file
```

---

## 📱 Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🎯 Next Steps

1. **Preview now**: Open `standalone.html`
2. **Install Node.js** if needed: [nodejs.org](https://nodejs.org/)
3. **Run full build**: `npm install && npm run dev`
4. **Customize**: Edit files in `src/`
5. **Deploy**: `npm run build` then upload `/dist`

---

Enjoy! 🎉
