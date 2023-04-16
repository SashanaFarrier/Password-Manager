import createHTMLloginContainer from "./createHTMLloginContainer.js";

import createHTMLcardContainer from "./createHTMLcardContainer.js";

import createHTMLidentityContainer from "./createHTMLidentityContainer.js";

const savedDataContainer = document.querySelector(".saved-data");
const noDataText = document.querySelector(".no-data-text");
let savedLoginData = JSON.parse(localStorage.getItem("loginData")) || [];
let savedCardData = JSON.parse(localStorage.getItem("cardData")) || [];
let savedIdentityData = JSON.parse(localStorage.getItem("identityData")) || [];

export default function savedData() {
  const container = document.createElement("div");
  container.classList.add("container");
  const card = document.createElement("div");
  card.classList.add("card", "saved--items-list");
  const cardContent = document.createElement("div");
  cardContent.classList.add("card__content");
  cardContent.style.backgroundColor = "white";

  if (
    savedLoginData.length > 0 ||
    savedCardData.length > 0 ||
    savedIdentityData.length > 0
  ) {
    noDataText.classList.add("hidden");
    cardContent.append(
      createHTMLloginContainer(savedLoginData),
      createHTMLcardContainer(savedCardData),
      createHTMLidentityContainer(savedIdentityData)
    );
    card.append(cardContent);
    container.append(card);
    savedDataContainer.append(container);

    const loginsDataContainer = cardContent.querySelector(
      ".loginsData__container"
    );

    const cardContentEl = Array.from(cardContent.children);

    cardContentEl.map((el) => {
      if (el.children.length > 0) {
        el.classList.add("bottom");
      } else {
        el.classList.remove("bottom");
      }
    });

    const allSavedData = card.querySelectorAll(".data");

    allSavedData.forEach((data) => {
      data.addEventListener("click", (e) => {
        if (e.target.classList.contains("trash")) {
          const clicked = e.target;
          const id = clicked.parentElement.closest(".data").getAttribute("id");
          console.log(id);
          if (clicked.parentElement.closest(".loginData__container")) {
            clicked.parentElement.closest(".loginData__container").remove();
            const loginData = savedLoginData.filter((item) => item.id !== id);
            localStorage.setItem("loginData", JSON.stringify(loginData));

            savedLoginData =
              JSON.parse(localStorage.getItem("loginData")) || [];
          } else if (clicked.parentElement.closest(".cardData__container")) {
            clicked.parentElement.closest(".cardData__container").remove();
            const cardData = savedCardData.filter((item) => item.id !== id);
            localStorage.setItem("cardData", JSON.stringify(cardData));

            savedCardData = JSON.parse(localStorage.getItem("cardData")) || [];
          } else if (
            clicked.parentElement.closest(".identityData__container")
          ) {
            clicked.parentElement.closest(".identityData__container").remove();
            const identityData = savedIdentityData.filter(
              (item) => item.id !== id
            );
            localStorage.setItem("identityData", JSON.stringify(identityData));

            savedIdentityData =
              JSON.parse(localStorage.getItem("identityData")) || [];
          }
          if (
            savedLoginData.length === 0 &&
            savedCardData.length === 0 &&
            savedIdentityData.length === 0
          ) {
            const savedItemsList = document.querySelector(".saved--items-list");
            savedItemsList.classList.add("hidden");
            noDataText.classList.remove("hidden");
          }
        }
      });
    });
  }
}
