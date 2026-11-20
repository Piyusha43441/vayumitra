# VayuMitra (वायुमित्र) — Urban Air Quality Assistant

> **"Helping families and communities navigate severe winter smog with clean, calm, and practical daily action plans."**

VayuMitra is a comprehensive, elder-friendly, bilingual web application designed to protect families, children, and vulnerable seniors from winter smog, ground-level temperature inversion, and airborne particulate toxins.

---

## 🌟 Core System Modules & Refined Capabilities

### 1. ⚡ Optimized Real-Time Asynchronous API Calls
- **Open-Meteo Air Quality Integration:** True live atmospheric telemetry (PM2.5, PM10, US AQI, CO, NO2) with zero API keys required.
- **In-Memory TTL Caching (5 Minutes):** Eliminates repetitive network calls and saves battery on mobile devices.
- **Race Condition Prevention (`AbortController`):** In-flight network requests are automatically aborted when users switch cities or stations quickly.
- **Network Timeout Protection (5000ms):** Automatically falls back to calibrated winter baseline data if cellular connections stall.

### 2. 📡 Robust Offline State Management & Auto-Sync
- **Dynamic Network Connectivity Pill:** Real-time indicator in the header showing 🟢 `Live API Connected` vs 🟠 `Offline Mode (Cached)`.
- **Offline Alert Notice Banner:** Informs users when offline that the app remains 100% operational with stored and regional data.
- **Offline Reports Queue:** Citizens can log pollution incidents without an internet connection; reports are stored in `localStorage` under `vayumitra_offline_queue` and auto-dispatched the moment connectivity resumes.
- **Resilient Map Display:** Built-in Radar SVG view automatically prevents broken tile images or network crashes.

### 3. 🎯 Streamlined Frontend DOM Updates
- **Cached DOM Reference Table (`DOM`):** Prevents expensive repetitive `getElementById` traversals during interactions.
- **Batch DOM Mutation with `DocumentFragment`:** Inserts lists (micro-stations, tips, timeline cards, checklist items, feed items) in a single browser repaint cycle.
- **RAF-Debounced Sliders:** The AQI slider updates smoothly at 60fps using `requestAnimationFrame`, eliminating UI stutter on budget hardware.

### 4. 🧠 Clean State Store & Persistence
- **Centralized Store Pattern (`Store`):** State is the single source of truth across all modules.
- **Non-Destructive Language Toggling (`en` ⇄ `hi`):** Toggling languages updates all copy without wiping active form selections, custom city text, checklist marks, or filtered reports.
- **Preferences Persistence:** Language (`vayumitra_lang`), font size (`vayumitra_fontsize`), habit streak, and checklist marks persist across page reloads.

### 5. 📱 CSS Performance Audit for Entry-Level Mobile Devices
- **CSS Layout Containment (`contain: content;`):** Prevents recalculations on one card from triggering full-page reflows.
- **Offscreen Rendering Optimization (`content-visibility: auto;`):** Below-the-fold modules are skipped during initial paint until scrolled into view, speeding up load times on low-RAM devices.
- **Zero Horizontal Overflow:** All CSS grid layouts use `minmax(min(100%, 280px), 1fr)` ensuring flawless rendering on screens down to 320px width.
- **Accessibility & Touch Targets:** All buttons, pills, checkboxes, and station cards maintain a minimum 44px hit-box.
- **GPU Compositor Animations:** Glows and transitions rely strictly on `transform` and `opacity` (`will-change: transform`).

---

## 🚀 Running VayuMitra Locally

```bash
# Navigate to the project directory
cd "C:\Users\Lenovo\.gemini\antigravity\scratch\vayumitra"

# Start the local server
agy-node server.js
```
Open your browser at:
👉 **`http://127.0.0.1:3000`**

Or open `index.html` directly in any web browser.

---

## 📁 Project Directory
```
vayumitra/
├── index.html        # Semantic accessible layout with live connectivity pill
├── style.css         # Calming, mobile-optimized CSS with containment & touch targets
├── app.js            # Modular client engine, AirQualityService, Store & TTS
├── server.js         # Lightweight zero-dependency Node HTTP server
└── README.md         # Full feature documentation & engineering audit
```
