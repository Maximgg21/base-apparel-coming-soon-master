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
    }
})
