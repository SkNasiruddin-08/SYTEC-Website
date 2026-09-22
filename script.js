const SHEET_URL = "https://script.google.com/macros/s/AKfycbxLug1KWTC2Nr8XO5UHOOE2hTNw0m8e40_0-1lu4GZUlA-4sU7kxvozbUjU-M1WyL-o3w/exec";

// Google Sheet Data Fetch Function
async function fetchSheetData() {
  try {
    const response = await fetch(SHEET_URL);
    const data = await response.json();
    console.log("Google Sheet Data Connected:", data);
  } catch (err) {
    console.warn("Sheet data background sync info:", err);
  }
}

// Main Interface Initializer
document.addEventListener("DOMContentLoaded", () => {
  fetchSheetData();
  
  // UI Interactive elements logic
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      // Smooth scroll or navigation logic
    });
  });
});
