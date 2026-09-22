// SYTEC Website Dynamic Rendering & Sheet Integration

const SHEET_URL = "https://script.google.com/macros/s/AKfycbxLug1KWTC2Nr8XO5UHOOE2hTNw0m8e40_0-1lu4GZUlA-4sU7kxvozbUjU-M1WyL-o3w/exec";

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Navigation & Interactive UI Setup
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // 2. Fetch Google Sheet Data without Breaking Layout
  async function loadSheetData() {
    try {
      const res = await fetch(SHEET_URL);
      const data = await res.json();
      console.log("Google Sheet Connected Successfully:", data);
    } catch (err) {
      console.warn("Running in local mode:", err);
    }
  }

  loadSheetData();
});
