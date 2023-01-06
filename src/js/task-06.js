const formEl = document.querySelector("input");
formEl.addEventListener("blur", checkUserSumbol);
function checkUserSumbol() {
  if (Number(formEl.dataset.length) === formEl.value.length) {
    formEl.classList.add("valid");
    formEl.classList.remove("invalid");
  } else {
    formEl.classList.remove("valid");
    formEl.classList.add("invalid");
  }
}
