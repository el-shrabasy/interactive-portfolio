/**
 * ====================================================================
 * PORTFOLIO CONFIGURATION & OPEN-SOURCE SETTINGS
 * ====================================================================
 * 
 * Welcome to the Open-Source Portfolio Template!
 * You can configure your admin credentials and optional cloud sync below.
 */

const PORTFOLIO_CONFIG = {
  // Secret PIN to access the admin studio (admin.html)
  // Default is "1234". Change this to your preferred PIN.
  adminPin: "1234",

  // Cloud Synchronization Settings (Firebase Firestore REST API)
  // Leave empty ("") for 100% Zero-Cloud / Offline mode (uses localStorage & JSON backup).
  // Or enter your own Firebase project credentials to enable cloud sync:
  firebase: {
    projectId: "", // e.g. "my-portfolio-project"
    apiKey: ""     // e.g. "AIzaSy..."
  }
};

/**
 * Resolves the Firestore Cloud URL dynamically from PORTFOLIO_CONFIG or LocalStorage
 */
function getPortfolioCloudUrl() {
  // 1. Check if configured in PORTFOLIO_CONFIG
  if (PORTFOLIO_CONFIG.firebase && PORTFOLIO_CONFIG.firebase.projectId && PORTFOLIO_CONFIG.firebase.apiKey) {
    return `https://firestore.googleapis.com/v1/projects/${PORTFOLIO_CONFIG.firebase.projectId}/databases/(default)/documents/portfolio_data/main?key=${PORTFOLIO_CONFIG.firebase.apiKey}`;
  }

  // 2. Check if user configured custom credentials inside Admin UI (localStorage)
  try {
    const saved = localStorage.getItem('portfolio_firebase_config');
    if (saved) {
      const cfg = JSON.parse(saved);
      if (cfg.projectId && cfg.apiKey) {
        return `https://firestore.googleapis.com/v1/projects/${cfg.projectId}/databases/(default)/documents/portfolio_data/main?key=${cfg.apiKey}`;
      }
    }
  } catch (e) {}

  return null;
}

/**
 * Returns the effective admin PIN (from custom local PIN if set, or config)
 */
function getPortfolioAdminPin() {
  try {
    const customPin = localStorage.getItem('portfolio_custom_pin');
    if (customPin && customPin.trim().length > 0) {
      return customPin.trim();
    }
  } catch (e) {}
  return PORTFOLIO_CONFIG.adminPin || "1234";
}
