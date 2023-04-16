const usernameContainer = document.querySelector(".username");
const numberInput = document.querySelector("#username-numbers");
const capitalizeInput = document.querySelector("#uppercase-username");
// const generateUsernameBtn = document.querySelector()
const copyUsernameIcon = document.querySelector(".generated-username .fa-copy");
const regenerateUsernameIcon = document.querySelector(
  ".generated-username .fa-rotate"
);

const url = "https://random-word-api.herokuapp.com/word?number=10";

window.addEventListener("DOMContentLoaded", getRandonName);

copyUsernameIcon.addEventListener("click", copyGeneratedUsername);

regenerateUsernameIcon.addEventListener("click", getRandonName);

export default function getRandonName() {
  async function getData() {
    // console.log("data");
    const response = await fetch(url);
    const data = await response.json();

    const randomNum = Math.floor(Math.random() * data.length);
    let username = data[randomNum];

    if (capitalizeInput.checked) {
      username = username.toUpperCase();
    }

    if (numberInput.checked) {
      for (let i = 0; i < 4; i++) {
        const randomNum = Math.floor(Math.random() * data.length);
        username += randomNum;
      }
    }

    usernameContainer.textContent = username;
  }
  getData();
  //   button.addEventListener("click", getData);
}

function copyGeneratedUsername() {
  const username = usernameContainer.textContent;

  if (username) {
    navigator.clipboard.writeText(username);
    alert("copied");
  } else {
    return;
  }
}
