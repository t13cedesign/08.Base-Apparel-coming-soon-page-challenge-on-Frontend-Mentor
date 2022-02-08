const email = document.querySelector("#email");
const button = document.getElementById("submit");
const icon = document.querySelector(".error-icon");
const message = document.querySelector(".error-message");

const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

function validarEmail(e) {
    e.preventDefault();
    if (!regEx.test(email.value)) {
        message.textContent = "Please provide a valid email";
        icon.style.display = 'block';
        email.style.border = '1px solid var(--primary02)';
    }
    else {
        message.textContent = "";
        icon.style.display = 'none';
        email.style.border = '1px solid var(--primary01)';
    }
}

button.addEventListener("click", validarEmail);