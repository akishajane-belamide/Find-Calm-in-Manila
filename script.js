// 1. Declares a const for guide's name and current year
const guideName = "Find Your Calm Places in Manila";
const currentYear = 2026;

// 2. Declares a let for a running count starting at 0
let runningCount = 0;
runningCount = 3;

// 3. Uses document.getElementById(...).textContent to write guide name
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

// 6. RATING LABEL

const placeRating = 4.5;

let ratingMessage = "";

if (placeRating >= 4) {
ratingMessage = "Highly recommended";
} else if (placeRating >= 2.5) {
ratingMessage = "Worth a visit";
 } else {
ratingMessage = "Only if you're nearby";
}

const ratingElement = document.getElementById("rating-label");

if (ratingElement) {
    ratingElement.textContent = ratingMessage;
}

// 7. BUDGET CHECK

const priceLevel = 2;
const isCurrentlyOpen = true;

const isGoodOption = (priceLevel <= 2 && isCurrentlyOpen === true);

const budgetMessage = isGoodOption ? "Good option right now" : "Maybe another time";

const budgetElement = document.getElementById("budget-result");

if (budgetElement) {
  budgetElement.textContent = budgetMessage;
}

// 8. DISTANCE NOTE

const isWalkingDistance = true;

const distanceMessage = isWalkingDistance ? "Walking distance" : "Better to commute";

const distanceElement = document.getElementById("distance-note");

if (distanceElement) {
    distanceElement.textContent = distanceMessage;
}
