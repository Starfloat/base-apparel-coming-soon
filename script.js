const emailForm = document.querySelector("#form");
const emailInput = document.querySelector("#email");
const errorText = document.querySelector(".error-text");
const iconError = document.querySelector(".icon-error");

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
emailForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  const validate = validateEmail(emailInput.value);

  if (!validate) {
    errorText.innerHTML = "Please provide a valid e-mail";
    emailInput.style.borderColor = "var(--soft-red)";
    iconError.style.visibility = "visible";
  } else {
    errorText.innerHTML = "Email successfully sent.";
    emailInput.style.borderColor = "var(--desaturated-red)";
    iconError.style.visibility = "hidden";
  }
  e.preventDefault();
}
