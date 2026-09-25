# 🚀 Modern Interactive Portfolio & Live Admin Studio
### قالب بورتفوليو تفاعلي احترافي مع لوحة تحكم وإدارة مباشرة (مفتوح المصدر | Open Source)

---

## 🌟 English Overview

A production-grade, highly-aesthetic developer & automation engineer portfolio featuring a **built-in Live Admin Studio (`admin.html`)** for updating your projects, skills, metrics, and personal profile in real time.

Built with **pure Vanilla HTML5, CSS3, and JavaScript** — zero heavy frameworks, zero complex build steps. Ready to deploy on any server or static hosting platform (**Vercel, Netlify, GitHub Pages, Firebase Hosting, Apache, Nginx, or cPanel**).

### ✨ Key Features
- **🎨 Glassmorphic & Modern Dark UI:** Crafted with carefully chosen color gradients, micro-animations, and smooth typography.
- **🌐 Fully Bilingual (EN / AR):** Instant language switching with complete RTL (Right-to-Left) and LTR support.
- **🛠️ Built-in Admin Studio (`admin.html`):** Edit your projects, skills, certificates, and contact links with interactive live preview.
- **🔒 Safe & Decoupled Architecture:** No sensitive server credentials or database passwords in the code.
- **⚡ Zero-Cloud Offline Mode (Default):** Works 100% out of the box using `localStorage` and `BroadcastChannel`. You can export/import JSON backups anytime.
- **☁️ Optional Real-Time Cloud Sync:** Connect your own free Google Firebase Firestore in 60 seconds to sync changes across all devices.

---

## 🛠️ Quick Start & Setup (دليل البدء السريع)

### 1. Clone or Download (تحميل المشروع)
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### 2. Local Testing (التشغيل المحلي)
You can simply double-click `index.html` to open it in your browser, or run a local server:
```bash
npx serve .
# or: python -m http.server 8000
```
- Open `index.html` to view the visitor website.
- Open `admin.html` to enter the Admin Studio.
  - **Default PIN:** `1234`

---

## ⚙️ Configuration (`config.js`)

All settings are neatly organized in `config.js`:

```javascript
const PORTFOLIO_CONFIG = {
  // 1. Change your secret PIN to access admin.html:
  adminPin: "1234",

  // 2. Optional: Connect your own free Firebase Firestore
  firebase: {
    projectId: "", // e.g. "my-portfolio-12345"
    apiKey: ""     // e.g. "AIzaSy..."
  }
};
```

> [!TIP]
> **You can also change the PIN and Firebase settings directly inside `admin.html`!**
> Just click the **⚙️ الإعدادات (Settings)** button in the top navigation bar.

---

## ☁️ Optional: How to Enable Free Cloud Sync with Firebase
If you want edits made in `admin.html` to automatically appear for any visitor around the world:
1. Go to [Firebase Console](https://console.firebase.google.com/) and create a free project.
2. In the sidebar, click **Build > Firestore Database** and click **Create Database** (Start in **Test mode**).
3. Under **Project Settings > General**, copy your **Project ID** and **Web API Key**.
4. Paste them into `config.js` or via the **Settings (⚙️ الإعدادات)** modal in `admin.html`.
5. That's it! Click **"حفظ التعديلات سحابياً"** and your site will sync seamlessly worldwide.

---

## 🚀 Deployment (طرق النشر)

This is a 100% static project, meaning it can be deployed for free on any platform:

### A. Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Click **Deploy** (No build settings or commands required).

### B. GitHub Pages
1. Push to your GitHub repository.
2. Go to **Settings > Pages**.
3. Under **Branch**, select `main` and root `/`, then save.

### C. Traditional Hosting (cPanel / Apache / Nginx)
Upload all files in this directory directly into your server's `public_html` folder.

---

## 🛡️ Security & Privacy (الأمان والخصوصية)

- **Decoupled Architecture:** No private credentials, database tokens, or server passwords are stored in this codebase.
- **Your Data Stays Yours:** When you connect Firebase, you connect your own isolated database. No third party or other users have access to your data.
- **Custom Admin PIN:** You can change your admin PIN anytime in `config.js` or through the admin interface.

---

## 📄 License
This project is licensed under the [MIT License](LICENSE) - free to use, modify, and distribute for personal and commercial use.
