const formEl = document.querySelector("input");
formEl.addEventListener("blur", checkUserSumbol);
function checkUserSumbol() {
  function addCl(cls) {
    formEl.classList.add(cls);
  }
  function removeCl(cls) {
    formEl.classList.remove(cls);
  }
  if (Number(formEl.dataset.length) === formEl.value.length) {
    addCl("valid");
    removeCl("invalid");
  } else {
    addCl("invalid");
    removeCl("valid");
  }
}
