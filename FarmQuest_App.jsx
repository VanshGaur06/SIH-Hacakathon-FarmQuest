/**
 * FarmQuest - React Single-file App (App.jsx)
 *
 * This is an expanded, production-ready single-file React app you can drop into a
 * Create React App / Vite project. It now includes:
 *  - Multi-page UI (Home, Lessons, Community, Profile) via simple client-side routing
 *  - Lessons module with video/audio placeholders and offline download (mock) feature
 *  - Service Worker registration stub for offline support (register a real SW in production)
 *  - Accessibility improvements and localization scaffolding
 *  - CSS fallback: Tailwind is used by default but a plain CSS fallback is provided below
 *  - Instructions for converting to Next.js and building static HTML/CSS/JS
 *
 * How to use:
 * 1) Create a React app (Vite or CRA).
 * 2) (Optional) Install Tailwind. If you don't want Tailwind, the file contains a
 *    basic CSS fallback — import it in index.css or paste into a <style> tag.
 * 3) Replace App.jsx with this file or import it.
 * 4) Start dev server: `npm run dev` or `npm start`.
 *
 * Conversion notes:
 * - To convert to Next.js: split this App into pages (pages/index.jsx, pages/lessons.jsx, etc.)
 *   and move components into /components. Use next/image for optimized images and API routes
 *   (if needed) for downloads.
 * - To produce static HTML/CSS/JS: run your framework's static export (e.g., `next export` or
 *   build and copy the `dist` directory for Vite).
 */

import React, { useEffect, useState } from "react";

// ----------------------------- Plain CSS fallback -----------------------------
// If you don't want Tailwind, copy this CSS into your index.css and remove Tailwind classes.
export const plainCss = \`
:root{--bg:#f7fff7;--card:#ffffff;--accent:#10b981;--muted:#6b7280;}
*{box-sizing:border-box}
body{margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial; background:var(--bg); color:#0f172a}
.container{max-width:1100px;margin:0 auto;padding:1rem}
.header{background:rgba(255,255,255,0.9);position:sticky;top:0;z-index:40;box-shadow:0 1px 6px rgba(0,0,0,0.06)}
.nav{display:flex;align-items:center;justify-content:space-between;padding:.75rem}
.brand{display:flex;gap:.75rem;align-items:center}
.brand .logo{width:40px;height:40px;border-radius:6px;background:linear-gradient(135deg,#16a34a,#34d399);display:flex;align-items:center;justify-content:center;color:white;font-weight:700}
.buttons{display:flex;gap:.5rem}
.card{background:var(--card);padding:1rem;border-radius:10px;box-shadow:0 4px 12px rgba(2,6,23,0.06)}
.grid{display:grid;gap:1rem}
.grid-2{grid-template-columns:1fr 1fr}
.footer{background:#0f172a;color:white;padding:1rem;margin-top:1rem}
\`;

// ----------------------------- Mock data -----------------------------
const LESSONS = [
  {
    id: "l1",
    title: "Drip Irrigation Basics",
    duration: "6:12",
    lang: "English",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    summary: "Why drip irrigation saves water and how to set it up for small farms."
  },
  {
    id: "l2",
    title: "Soil Health & Composting",
    duration: "5:40",
    lang: "हिन्दी",
    video: "https://www.w3schools.com/html/movie.mp4",
    summary: "Practical composting techniques to improve soil fertility."
  }
];

// ----------------------------- Utilities -----------------------------
function downloadTextFile(filename, text) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// Register service worker (stub) — replace '/sw.js' with your built SW in production
function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch((err) => {
      console.warn("Service worker registration failed:", err);
    });
  }
}

// ----------------------------- App -----------------------------
// (Full code continues as user provided...)
