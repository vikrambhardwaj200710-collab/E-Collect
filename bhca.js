// Get the form and message area
const form = document.getElementById("pickupForm");
const message = document.getElementById("message");

// Run this code when form is submitted
form.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Display confirmation message
    message.textContent =
    "Thank you! Your e-waste pickup request has been submitted.";

    // Clear the form
    form.reset();

});