const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
inputEl.addEventListener("input", (evt) => {
  let { value } = evt.currentTarget;
  value = value.trim();
  if ((spanEl.textContent = value)) {
  } else {
    spanEl.textContent = "Anonymous";
  }
});
