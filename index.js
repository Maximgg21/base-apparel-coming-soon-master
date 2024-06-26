let submitBtn = document.getElementById("submit-btn");
let emailAdress = document.getElementById("email-address-input");
let inputSection = document.getElementById("input-section");
let iconError = document.getElementById("icon-error");
let errorBox = document.getElementById("error-box");

submitBtn.addEventListener("click", function() {
    if (!(emailAdress.value.includes("@"))) {
        inputSection.style.border = "0.3rem solid hsl(0, 93%, 68%)";
        iconError.style.display = "block";
        errorBox.innerHTML = "<p id='error-text' class='pink-color'>Please provide a valid email</p>";
    } else {
        iconError.style.display = "none";
        inputSection.style.border = "1px solid hsla(0, 6%, 24%, 0.5)";
        errorBox.innerHTML = "<p id='error-text' class='pink-color'>Your email was submitted</p>";
    }
})

inputSection.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        submitBtn.click();
    }
})