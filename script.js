// SYTEC Website Master Script - Restoring Complete Interactive Design & Sheet Sync

const SHEET_URL = "https://script.google.com/macros/s/AKfycbxLug1KWTC2Nr8XO5UHOOE2hTNw0m8e40_0-1lu4GZUlA-4sU7kxvozbUjU-M1WyL-o3w/exec";

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle Setup
  const menuBtn = document.querySelector('.mobile-menu-btn') || document.querySelector('.menu-icon');
  const navMenu = document.querySelector('nav ul') || document.querySelector('.nav-links');
  
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // 2. Smooth Scrolling for Navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // 3. Google Sheet Background Sync
  async function syncSheetData() {
    try {
      const res = await fetch(SHEET_URL);
      const data = await res.json();
      console.log("Sheet Data Successfully Loaded:", data);
    } catch (err) {
      console.log("Running in standard mode without active sheet data override.");
    }
  }

  syncSheetData();
});
