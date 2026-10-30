// 1. Declares a const for guide's name and current year
const guideName = "Find Your Calm Places in Manila";
const currentYear = 2026;

// 2. Declares a let for a running count starting at 0
let runningCount = 0;
runningCount = 3; // Bilang ng mga na-review mong places sa guide mo

// 3. Uses document.getElementById(...).textContent to write guide name
// Tandaan: Kailangan nating lagyan ng id ang HTML element mo mamaya
const titleElement = document.getElementById("guide-title");
if (titleElement) {
    titleElement.textContent = guideName;
}

// 4. Writes a dynamic copyright line into your footer
const footerElement = document.getElementById("dynamic-footer");
if (footerElement) {
    footerElement.textContent = `© ${currentYear} ${guideName} by Akisha Belamide`;
}

// 5. Logs at least three labelled values to the console using console.log()
console.log("Guide Name:", guideName);
console.log("Current Year:", currentYear);
console.log("Total Places Reviewed:", runningCount);