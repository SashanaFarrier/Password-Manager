const vaultInfo = document.querySelector(".vault__info");
const optionsContainer = document.querySelector(".options");
const passwordContainer = document.querySelector(".password__container");
const usernameContainer = document.querySelector(".username__container");
const loginInfo = document.querySelector(".login-info");
const cardInfo = document.querySelector(".card-info");
const identityInfo = document.querySelector(".identity-info");
const typeInfo = document.querySelector("#type-info");

const vaultCardContainer = vaultInfo.querySelector(".card");
const vaultCancelBtn = vaultInfo.querySelector(".cancel-btn");
const vaultSaveBtn = vaultInfo.querySelector(".save-btn");

function hideVault() {
  vaultInfo.classList.add("hidden");
  vaultCardContainer.classList.add("hidden");
  vaultCancelBtn.classList.add("hidden");
  vaultSaveBtn.classList.add("hidden");
  optionsContainer.style.display = "block";
  passwordContainer.style.display = "block";
}

const savedLoginData = JSON.parse(localStorage.getItem("loginData")) || [];

const savedCardData = JSON.parse(localStorage.getItem("cardData")) || [];

const savedIdentityData =
  JSON.parse(localStorage.getItem("identityData")) || [];

function addNewItem() {
  vaultInfo.classList.remove("hidden");
  // vaultInfo.style.display = "block";
  optionsContainer.style.display = "none";
  passwordContainer.style.display = "none";
  usernameContainer.style.display = "none";
  vaultCardContainer.classList.remove("hidden");
  vaultCancelBtn.classList.remove("hidden");
  vaultSaveBtn.classList.remove("hidden");
}

function handleTypeChange(e) {
  const type = e.target.value;
  if (type === "login") {
    loginInfo.classList.remove("hidden");
  } else {
    loginInfo.classList.add("hidden");
  }

  if (type === "card") {
    cardInfo.classList.remove("hidden");
  } else {
    cardInfo.classList.add("hidden");
  }

  if (type === "identity") {
    identityInfo.classList.remove("hidden");
  } else {
    identityInfo.classList.add("hidden");
  }
}

function getFormData() {
  if (typeInfo.value === "login") {
    const data = loginInfo;
    const name = data.querySelector("#name").value;
    const username = data.querySelector("#username").value;
    const password = data.querySelector("#password").value;

    if (name === "" && username === "" && password === "") {
      return;
    } else {
      savedLoginData.push({
        type: "login",
        name,
        username,
        password,
        id: crypto.randomUUID(),
      });

      localStorage.setItem("loginData", JSON.stringify(savedLoginData));
    }
  } else if (typeInfo.value === "card") {
    const data = cardInfo;

    const name = data.querySelector("#name").value;
    const cardholder = data.querySelector("#cardholder").value;
    const cardnumber = data.querySelector("#cardnumber").value;
    const brand = data.querySelector("#brand").value;
    const expirationMonth = data.querySelector("#month").value;
    const expirationYear = data.querySelector("#year").value;
    const securityCode = data.querySelector("#security").value;

    if (
      name === "" &&
      cardholder === "" &&
      cardnumber === "" &&
      brand === "select" &&
      expirationMonth === "" &&
      expirationYear === "" &&
      securityCode === ""
    ) {
      return;
    } else {
      savedCardData.push({
        type: "card",
        name,
        cardholder,
        cardnumber,
        brand,
        expirationMonth,
        expirationYear,
        securityCode,
        id: crypto.randomUUID(),
      });
      localStorage.setItem("cardData", JSON.stringify(savedCardData));
    }
  } else {
    const data = identityInfo;
    const name = data.querySelector("#name").value;
    const title = data.querySelector("#title").value;
    const firstname = data.querySelector("#firstname").value;
    const middlename = data.querySelector("#middlename").value;
    const lastname = data.querySelector("#lastname").value;
    const username = data.querySelector("#username").value;
    const email = data.querySelector("#email").value;
    const address1 = data.querySelector("#address1").value;
    const address2 = data.querySelector("#address2").value;
    const address3 = data.querySelector("#address3").value;
    const city = data.querySelector("#city").value;
    const state = data.querySelector("#state").value;
    const zipCode = data.querySelector("#zip").value;
    const country = data.querySelector("#country").value;

    const address = [];
    address.push(address1, address2, address3);
    const validAddress = address.filter((val) => val !== "");
    if (
      name === "" &&
      title === "select" &&
      firstname === "" &&
      middlename === "" &&
      lastname === "" &&
      username === "" &&
      email === "" &&
      city === "" &&
      state === "" &&
      zipCode === "" &&
      country === "" &&
      validAddress.length === 0
    ) {
      return;
    } else {
      savedIdentityData.push({
        type: "identity",
        name,
        title,
        firstname,
        middlename,
        lastname,
        username,
        email,
        validAddress,
        city,
        state,
        zipCode,
        country,
        id: crypto.randomUUID(),
      });

      localStorage.setItem("identityData", JSON.stringify(savedIdentityData));
    }
  }
  window.location.reload();
}

function getTargetTypeData(type) {
  let name = type.querySelector("input[type='text']");
  name.value = window.name;

  // const urlDiv = type.querySelector(".url") || "";
  // if (urlDiv) {
  //   const currUrl = urlDiv.querySelector("input[type='text']");
  //   currUrl.value = window.location.href;
  // }
}
// getTargetTypeData(typeInfo.parentElement.nextElementSibling);

// function getCurrentWindowTabs() {
//   if (typeInfo.value === "login") {
//     getTargetTypeData(typeInfo.parentElement.nextElementSibling);
//   } else if (typeInfo.value === "card") {
//     const type = loginInfo.nextElementSibling;
//     getTargetTypeData(type);
//   } else {
//     const type = cardInfo.nextElementSibling;
//     getTargetTypeData(type);
//   }
// }

export {
  addNewItem,
  handleTypeChange,
  // getCurrentWindowTabs,
  getFormData,
  hideVault,
};
