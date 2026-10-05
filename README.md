# Weekly Focus 🎯

> **"Consistent effort → real progress → better me."**  
> *"Don't optimize the timetable. Follow the timetable. Missed a block? Don't punish the next block. Resume from where you are."*

A personal productivity operating system and installable Progressive Web App (PWA) tailored for disciplined daily execution across **DSA, Academics, Projects, Career, and Recovery**.

---

## ⚡ Core Pillars & Priorities

1. **DSA** — Daily problem solving + revision
2. **Academics** — Classes, revision and exam preparation
3. **Projects** — Build real, explainable software
4. **Career** — Applications, GitHub and portfolio
5. **Sleep** — Protect recovery and consistency
6. **Discipline** — Do the planned block, not the perfect block

---

## 🚀 Flagship Projects

- **CampusUnstop** (`FULL STACK` · Primary Focus) — Full-stack campus event management platform with authentication, event management, registrations, calendar and notifications. *(Mon & Tue 6:00–7:30 PM)*
- **Bhoomitra-AI** (`AI + IoT` · 🏆 1st Prize — GenAI Forge 2026) — AI-powered precision farming system using crop disease detection, ESP32 monitoring, irrigation automation and web dashboard. *(Wed 6:00–7:30 PM)*
- **ShilpAI** (`AI · SIH 2026` · PS SIH26090) — AI-powered digital marketplace and smart cataloging platform for marginalized artisans. *(Thu 6:00–7:30 PM)*
- **TBP-SIH26092** (`SIH 2026` · Design / Architecture Stage) — Current SIH 2026 problem-solving project. *(Sat & Sun Build)*

---

## 📅 Daily Context & Schedule

- **College**: 9:40 AM – 4:20 PM
- **Hostel Return**: 5:00 – 5:30 PM
- **Decompression**: 5:30 – 6:00 PM (Dedicated break after returning)
- **Weekend Mode**:
  - **Saturday Flow**: Deep project work → TBP-SIH26092 → DSA → Academics
  - **Sunday Flow**: TBP-SIH26092 design/research → Academic revision → Applications → Weekly planning → Rest

---

## 🎯 Weekly Targets

- **Academics**: 10–12 hours
- **DSA**: 8–9 hours
- **Projects**: 6–8 hours
- **Applications**: 2–3 hours
- **GitHub / Portfolio**: 1–2 hours

Includes an interactive hour tracker with localStorage persistence (no fake percentages).

---

## 📱 PWA & Android Installation

1. Deploy to Vercel or open on your Android phone using Chrome.
2. An **Install App** button will automatically appear in the top bar. Alternatively, tap:
   `Chrome Menu (⋮) → Add to Home screen / Install App`.
3. Weekly Focus will install with a native standalone display mode, dedicated dark icon, offline caching, and instant launch.

---

## 💻 Local Development

### Option 1: Any static server or Python
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000`.

### Option 2: Node.js
```bash
npx serve .
```

---

## 🌐 Vercel Deployment

This project is pre-configured with `vercel.json` for optimal static caching and PWA headers:
- `sw.js` is served with `Cache-Control: public, max-age=0, must-revalidate` so updates are delivered immediately.
- `manifest.webmanifest` is served with proper MIME type `application/manifest+json`.

To deploy:
```bash
vercel
```
or connect the GitHub repository directly to Vercel dashboard.
