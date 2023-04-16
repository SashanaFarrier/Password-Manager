const passwordContainer = document.querySelector(".password");
const copyIcon = document.querySelector(".fa-copy");
const regeneratePasswordIcon = document.querySelector(".fa-rotate");
const rangeInput = document.querySelector("input[type='range']");

const uppercaseChar = document.querySelector("#uppercase");
const lowercaseChar = document.querySelector("#lowercase");
const numberChar = document.querySelector("#numbers");
const specialChar = document.querySelector("#special_chars");

window.addEventListener("DOMContentLoaded", generateRandomPassword);

regeneratePasswordIcon.addEventListener("click", generateRandomPassword);

copyIcon.addEventListener("click", copyGeneratedPassword);

const randomFunc = {
  lowercase: getRandomLower,
  uppercase: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSpecialChar,
};

function generateRandomPassword() {
  const chars = [];
  const passwordChars = [];
  let password = "";
  let checked = 0;
  const length = +rangeInput.value;

  const uppercase = uppercaseChar.checked;
  const lowercase = lowercaseChar.checked;
  const number = numberChar.checked;
  const symbol = specialChar.checked;

  chars.push({ uppercase }, { lowercase }, { number }, { symbol });

  chars.filter((char) => {
    if (Object.values(char).includes(true)) {
      checked++;
      passwordChars.push(char);
    }
  });

  for (let i = 0; i < length; i += checked) {
    passwordChars.forEach((char) => {
      const funcName = Object.keys(char)[0];
      password += randomFunc[funcName]();
    });
  }

  passwordContainer.textContent = password;
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecialChar() {
  const specialChar = "!@#$%^&*(){}[]";
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}

function copyGeneratedPassword() {
  const password = passwordContainer.textContent;

  if (password) {
    navigator.clipboard.writeText(password);
    alert("copied");
  } else {
    return;
  }
}

export { generateRandomPassword };
