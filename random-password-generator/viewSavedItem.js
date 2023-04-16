const vaultInfo = document.querySelector(".vault__info");
const optionsContainer = document.querySelector(".options");
const passwordContainer = document.querySelector(".password__container");
const viewSavedItem = document.querySelector(".fa-eye");
const closeSavedItem = document.querySelector(".fa-eye-slash");
const savedDataContainer = document.querySelector(".saved-data");
const searchBtn = document.querySelector(".search");
const addBtn = document.querySelector(".add-btn");

export default function viewSavedData() {
  // searchBtn.classList.add("hidden");
  addBtn.classList.add("hidden");
  const vault = document.querySelector(".vault");
  vault.style.flexDirection = "column";

  vaultInfo.classList.add("hidden");
  optionsContainer.classList.add("hidden");
  passwordContainer.classList.add("hidden");
  closeSavedItem.classList.remove("hidden");

  viewSavedItem.classList.add("hidden");
  savedDataContainer.classList.remove("hidden");
}
