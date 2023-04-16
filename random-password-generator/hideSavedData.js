const vaultInfo = document.querySelector(".vault__info");
const optionsContainer = document.querySelector(".options");
const passwordContainer = document.querySelector(".password__container");
const viewSavedItem = document.querySelector(".fa-eye");
const closeSavedItem = document.querySelector(".fa-eye-slash");
const savedDataContainer = document.querySelector(".saved-data");
const searchBtn = document.querySelector(".search");
const addBtn = document.querySelector(".add-btn");
const vault = document.querySelector(".vault");

export default function hideSavedData() {
  const closeItemBtn = document.querySelector(".fa-eye-slash");
  closeItemBtn.classList.add("hidden");
  // searchBtn.classList.remove("hidden");
  addBtn.classList.remove("hidden");
  viewSavedItem.classList.remove("hidden");
  savedDataContainer.classList.add("hidden");
  // vaultInfo.classList.remove("hidden");
  optionsContainer.classList.remove("hidden");
  passwordContainer.classList.remove("hidden");
  vault.style.flexDirection = "row";
}
