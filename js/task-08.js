const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value.trim() === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
