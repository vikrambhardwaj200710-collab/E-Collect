const form = document.getElementById("pickupForm");
const message = document.getElementById("message");

// Keep submission blocked until an actual delivery endpoint is configured.
form.addEventListener("submit", function(event) {
    event.preventDefault();
    message.textContent =
        "Online pickup requests are temporarily unavailable. Your details have not been sent.";
});
