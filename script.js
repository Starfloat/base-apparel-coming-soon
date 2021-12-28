const emailForm = document.querySelector("#form");
const emailInput = document.querySelector("#email");
const errorText = document.querySelector(".error-text");

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
emailForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  const validate = validateEmail(emailInput.value);

  if (!validate) {
    errorText.innerHTML = "Please provide a valid e-mail";
  } else {
    errorText.innerHTML = "Email successfully sent.";
  }
  e.preventDefault();
}
