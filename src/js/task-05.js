const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
inputEl.addEventListener("input", (evt) => {
  const { value } = evt.currentTarget;
  if ((spanEl.textContent = value)) {
    return value;
  } else {
    spanEl.textContent = "Anonymous";
  }
});
