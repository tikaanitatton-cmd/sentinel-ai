# SENTINEL AI - Landing Page

A full-screen dark hero landing page for a security company using React, Vite, TypeScript, Tailwind CSS, and an embedded Spline 3D scene.

## Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

The site will open at `http://localhost:5173`

3. **Build for production:**
```bash
npm run build
```

## Features

- ✅ Full-screen hero section with Spline 3D background
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Custom animations (fade-up, fade-in)
- ✅ Dark theme with vivid green accent color
- ✅ Fixed navbar with navigation links
- ✅ Call-to-action buttons
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling

## Tech Stack

- **React 18** - UI library
- **Vite 5** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS 3** - Styling
- **Spline** - 3D scene embed

## Project Structure

```
sentinel-ai/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Navigation bar
│   │   ├── Hero.tsx        # Hero section
│   │   └── SplineScene.tsx # 3D Spline embed
│   ├── lib/
│   │   └── cn.ts          # Utility functions
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies
```

## Customization

### Colors
Edit the CSS custom properties in `src/index.css`:
- `--primary`: Primary accent color (green by default)
- `--background`: Dark background
- `--foreground`: Text color

### Content
Edit `src/components/Hero.tsx` to change:
- Heading and subheading text
- Description text
- Button labels and links
- Trust line information

### 3D Scene
The 3D Spline scene is embedded via iframe. To change it:
1. Create or edit your scene at https://spline.design
2. Update the `src` URL in `src/components/SplineScene.tsx`

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
