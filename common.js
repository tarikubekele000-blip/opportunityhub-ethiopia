// Shared helpers used by every page

// Apply the saved theme immediately (prevents a flash of the wrong theme)
(function () {
  let theme = null;
  try { theme = localStorage.getItem("oh_theme"); } catch (e) {}
  if (!theme) {
    theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.documentElement.setAttribute("data-theme", theme);
})();

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function sync() {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    btn.textContent = dark ? "☀" : "☾";
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }
  sync();

  btn.addEventListener("click", function () {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    const next = dark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("oh_theme", next); } catch (e) {}
    sync();
  });
});

// Protect against broken HTML from data
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Only allow real web links
function safeUrl(url) {
  return /^https?:\/\//i.test(url || "") ? url : "";
}

// Browser storage (saved items, tracker)
function loadJSON(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch (e) { return fallback; }
}
function saveJSON(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
}

function getSaved() { return loadJSON("oh_saved", []); }
function toggleSaved(id) {
  const list = getSaved();
  const i = list.indexOf(id);
  if (i >= 0) list.splice(i, 1); else list.push(id);
  saveJSON("oh_saved", list);
  return i < 0; // true if now saved
}
function saveLabel(isSaved) { return isSaved ? "★ Saved" : "☆ Save"; }

function getStatuses() { return loadJSON("oh_status", {}); }
function setStatus(id, status) {
  const all = getStatuses();
  if (status) all[id] = status; else delete all[id];
  saveJSON("oh_status", all);
}

// Dates
function formatDate(dateString) {
  const d = new Date(dateString + "T00:00:00");
  if (isNaN(d)) return "Not set";
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function deadlineInfo(deadline) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const end = new Date(deadline + "T00:00:00");
  if (isNaN(end)) return { expired: false, days: null, label: "Deadline not set", level: "none" };

  const days = Math.round((end - today) / 86400000);
  if (days < 0) return { expired: true, days: days, label: "Expired", level: "expired" };
  if (days === 0) return { expired: false, days: 0, label: "Closes today", level: "soon" };
  if (days <= 14) return { expired: false, days: days, label: days + (days === 1 ? " day left" : " days left"), level: "soon" };
  return { expired: false, days: days, label: days + " days left", level: "open" };
}

function formatGrades(grades) {
  const g = grades.slice().sort(function (a, b) { return a - b; });
  if (g.length === 1) return "Grade " + g[0];
  const contiguous = g.every(function (n, i) { return i === 0 || n === g[i - 1] + 1; });
  return contiguous ? "Grades " + g[0] + "–" + g[g.length - 1] : "Grades " + g.join(", ");
}
