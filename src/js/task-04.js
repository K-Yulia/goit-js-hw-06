const resultValue = document.querySelector("#value");
const btnDec = document.querySelector("button[data-action='decrement']");
const btnInc = document.querySelector("button[data-action='increment']");

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  resultValue.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  resultValue.textContent = counterValue;
};
btnDec.addEventListener("click", decrement);
btnInc.addEventListener("click", increment);
