const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const form = document.querySelector("#form");
document.addEventListener("DOMContentLoaded", displayLocalStorage);

function getLocalStorage(item) {
  let person;

  person = localStorage.getItem("person")
    ? JSON.parse(localStorage.getItem("person"))
    : [];
  person.push(item);
  person = localStorage.setItem("person", JSON.stringify(person));
  console.log(localStorage);
  console.log(person, item);
}

function displayLocalStorage() {
  let exist = localStorage.getItem("person");
  console.log(exist);
}
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let nameInput = name.value;
  let emailInput = email.value;
  let messageInput = message.value;

  if (nameInput === "" || emailInput === "" || messageInput === "") {
    document.querySelector(
      ".validate"
    ).innerHTML = `<p class="my-2 p-2 bg-danger text-light">Please input all value</p>`;
    setTimeout(() => {
      document.querySelector(".validate").innerHTML = "";
    }, 3000);
  } else {
    let personList = {
      name: nameInput,
      email: emailInput,
      message: messageInput,
    };
    getLocalStorage(personList);

    document.querySelector(
      ".validate"
    ).innerHTML = `<p class="my-2 p-2 bg-success text-light">Message has been send</p>`;
    setTimeout(() => {
      document.querySelector(".validate").innerHTML = "";
    }, 3000);
    console.log(personList.name);
  }
});

form.addEventListener("reset", (event) => {
  event.preventDefault();

  localStorage.removeItem("person")
  name.value = "";
  email.value = "";
  message.value = "";
});
