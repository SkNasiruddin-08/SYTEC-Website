const SHEET_URL = "https://script.google.com/macros/s/AKfycbxLug1KWTC2Nr8XO5UHOOE2hTNw0m8e40_0-1lu4GZUlA-4sU7kxvozbUjU-M1WyL-o3w/exec";

async function loadSheetData() {
  try {
    const response = await fetch(SHEET_URL);
    const data = await response.json();
    console.log("Sheet Data Loaded Successfully:", data);
  } catch (error) {
    console.warn("Sheet data load link offline or blocked, running default site styles.", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadSheetData();
});
