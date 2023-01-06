const input = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

input.addEventListener("input", function (event) {
  output.style.fontSize = `${input.value}px`;
});
