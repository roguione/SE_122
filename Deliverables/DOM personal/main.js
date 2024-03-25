console.log('js loaded');

// Create a button wrapper div element
const buttonWrapper = document.createElement("div");
buttonWrapper.id = "button-wrapper";

// Use document.querySelector() to select the <p> elements with the classes "cool," "cooler," and "coolest"
const pEl = document.querySelector(".cool");
const pE2 = document.querySelector(".cooler");
const pE3 = document.querySelector(".coolest");

// Create a function to change text color
function changeTextColor(element, color) {
    element.style.color = color;
}

// Initialize text colors
changeTextColor(pEl, "blue");
changeTextColor(pE2, "red");
changeTextColor(pE3, "purple");

// Get references to the buttons
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

// Add event listeners to each button
button1.addEventListener("click", function() {
    alert("oooo they gave in!");
    changeTextColor(pEl, "purple"); // Change the color of "I promise" to purple
});

button2.addEventListener("click", function() {
    alert("oooo they did it!");
    changeTextColor(pE2, "purple"); // Change the color of "It is safe" to purple
});

button3.addEventListener("click", function() {
    alert("Thank you for your cooperation!");
    changeTextColor(pE3, "red"); // Change the color of "Do as it says" to red

    // Create an <img> element
    const imageElement = document.createElement("img");

    // Set the source (src) of the image to "hdetect.jpg"
    imageElement.src = "hdetect.jpg";

    // Append the image to the output <div>
    outputDiv.appendChild(imageElement);
});

// Create an output <div> element
const outputDiv = document.createElement("div");
outputDiv.id = "output"; // Set the ID for the output div

// Append the output div to the document's body
document.body.appendChild(outputDiv);

