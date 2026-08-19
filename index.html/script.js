// Select required HTML elements
const pageContainer = document.querySelector("#pageContainer");
const mainHeading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");
const greetingButton = document.querySelector("#greetingButton");
const backgroundButton = document.querySelector("#backgroundButton");
const resetButton = document.querySelector("#resetButton");
const messageArea = document.querySelector("#messageArea");

// Handle greeting button click
function handleGreetingClick() {
    const userName = nameInput.value.trim();

    if (userName === "") {
        messageArea.textContent = "Please enter your name.";
    } else {
        mainHeading.textContent = "Hello, " + userName + "!";
        messageArea.textContent = "Greeting displayed successfully.";
    }

    console.log("Greeting button was clicked.");
}

// Handle background button click
function handleBackgroundClick() {
    pageContainer.style.backgroundColor = "lightblue";
    messageArea.textContent = "Background color changed to light blue.";

    console.log("Background color was changed.");
}

// Handle reset button click
function handleResetClick() {
    mainHeading.textContent = "Welcome to My Webpage";
    nameInput.value = "";
    pageContainer.style.backgroundColor = "#f5f5f5";
    messageArea.textContent = "";

    console.log("Page has been reset.");
}

// Handle input event
function handleInput() {
    messageArea.textContent = "You are typing: " + nameInput.value;
}

// Handle mouseover event
function handleMouseover() {
    console.log("The mouse is over the greeting button.");
}

// Add event listeners
greetingButton.addEventListener("click", handleGreetingClick);
backgroundButton.addEventListener("click", handleBackgroundClick);
resetButton.addEventListener("click", handleResetClick);
nameInput.addEventListener("input", handleInput);
greetingButton.addEventListener("mouseover", handleMouseover);