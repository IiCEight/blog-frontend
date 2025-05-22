# NanShan's Blog (React + Vite)

A modern blog web application built with React, Vite, GSAP, and Framer Motion. This project demonstrates advanced animation techniques, a catalogue-driven article system, and a clean, responsive UI.

## Features

- **React 18 + Vite**: Fast development and build tooling.
- **GSAP Animations**: Advanced animation demos (basic, timeline, scroll-triggered) on the `/gsap` route.
- **Framer Motion**: Interactive and declarative animations on the `/framer` route.
- **Article Catalogue**: Browse articles with categories, tags, and view counts.
- **Markdown Rendering**: Articles support markdown, code highlighting, and math (KaTeX) rendering.
- **Responsive Design**: Modern CSS modules and layout.
- **Animated Transitions**: Page transitions using GSAP and Framer Motion.

## Project Structure

```
public/
  imgSaber.jpg, logo_transparent.png, vite.svg
src/
  App.jsx                # Main app router
  main.jsx               # Entry point
  global.css             # Global styles
  components/            # Reusable UI components
  pages/                 # Main pages (Home, Catalogue, Article, GSAP, FramerMotion)
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Installation

```pwsh
npm install
```

### Development

```pwsh
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```pwsh
npm run build
```

### Preview Production Build

```pwsh
npm run preview
```

## Key Pages & Routes

- `/`           — Home page with animated hero section
- `/catalogue`  — Article catalogue (fetches from backend API)
- `/article/:id`— Article detail page (markdown, code, math rendering)
- `/gsap`       — GSAP animation tutorial and demos. (**To be implemented**)
- `/Category`     — Article catalogue (**To be implemented**)

## Animation Demos

### GSAP (`/gsap`)

**To be implemented.**


## Customization
- Update `src/components/Header.jsx` and `Menu.jsx` for navigation
- Add new articles via backend API (see `ArticleCatalog.jsx`)
- Style with CSS modules in each component/page

## Dependencies
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [GSAP](https://greensock.com/gsap/)
- [Framer Motion](https://www.framer.com/motion/)
- [react-router-dom](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Marked](https://marked.js.org/), [highlight.js](https://highlightjs.org/), [KaTeX](https://katex.org/)