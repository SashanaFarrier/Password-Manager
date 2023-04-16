import { generateRandomPassword } from "./password.js";
import getRandonName from "./username.js";
import {
  addNewItem,
  handleTypeChange,
  // getCurrentWindowTabs,
  getFormData,
  hideVault,
} from "./addNewItem.js";

import viewSavedData from "./viewSavedItem.js";
import hideSavedData from "./hideSavedData.js";
import savedData from "./loadSavedData.js";

savedData();

const generateUsernameBtn = document.querySelector(".username-btn");
const generatePasswordBtn = document.querySelector(".password-btn");
const rangeInput = document.querySelector("input[type='range']");
const passwordOption = document.querySelector(".password-option");
const passwordOptionSelected = document.querySelector(
  " .password-option #password"
);
const usernameOption = document.querySelector(".username-option");
const usernameOptionSelected = document.querySelector(
  " .username-option #username"
);
const passwordDiv = document.querySelector(".password__container");
const usernameDiv = document.querySelector(".username__container");

const addBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const savebtn = document.querySelector(".save-btn");
const viewSavedItemBtn = document.querySelector(".fa-eye");
const closeItemBtn = document.querySelector(".fa-eye-slash");

let rangeInputVal = document.querySelector(".range_val");
const typeInfo = document.querySelector("#type-info");

// typeInfo.addEventListener("change", getCurrentWindowTabs);

passwordOptionSelected.addEventListener("click", selectGenerator);

usernameOptionSelected.addEventListener("click", selectGenerator);

function selectGenerator() {
  if (passwordOptionSelected.checked) {
    passwordDiv.style.display = "block";
  } else if (!passwordOptionSelected.checked) {
    passwordDiv.style.display = "none";
  }

  if (usernameOptionSelected.checked) {
    usernameDiv.style.display = "block";
  } else if (!usernameOptionSelected.checked) {
    usernameDiv.style.display = "none";
  }
}

rangeInputVal.textContent = `Length: ${rangeInput.value}`;

rangeInput.addEventListener("input", function () {
  rangeInputVal.textContent = `Length: ${rangeInput.value}`;
});

generatePasswordBtn.addEventListener("click", generateRandomPassword);
generateUsernameBtn.addEventListener("click", getRandonName);

addBtn.addEventListener("click", addNewItem);

typeInfo.addEventListener("change", handleTypeChange);

savebtn.addEventListener("click", getFormData);
viewSavedItemBtn.addEventListener("click", viewSavedData);

closeItemBtn.addEventListener("click", hideSavedData);

cancelBtn.addEventListener("click", hideVault);
