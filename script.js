const SHEET_URL = "https://script.google.com/macros/s/AKfycbxLug1KWTC2Nr8XO5UHOOE2hTNw0m8e40_0-1lu4GZUlA-4sU7kxvozbUjU-M1WyL-o3w/exec";

async function loadSheetData() {
  try {
    const response = await fetch(SHEET_URL);
    const data = await response.json();
    console.log("Sheet Data Loaded:", data);
    
    // Website-e data dekhate erpor dynamic UI element add kora jabe
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadSheetData);
