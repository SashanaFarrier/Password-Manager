// import loadSavedData from "./loadSavedData.js";
// console.log(loadSavedData());
// loadSavedData();

// document.addEventListener("DOMContentLoaded", deleteData);
// const savedLoginData = JSON.parse(localStorage.getItem("loginData")) || [];
// const savedCardData = JSON.parse(localStorage.getItem("cardData")) || [];
// const savedIdentityData =
//   JSON.parse(localStorage.getItem("identityData")) || [];

// const allData = [];

export default function deleteData(target) {
  const savedData = document.querySelector(".saved-data");
  const data = savedData.querySelectorAll(".data");
  const noDataText = document.querySelector(".no-data-text");
  // console.log(savedData);
  // let trash;
  console.log(data);
  data.forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target.classList.contains("trash")) {
        const clicked = e.target;
        const id = clicked.parentElement.closest(".data").getAttribute("id");

        if (clicked.parentElement.closest(".loginData__container")) {
          e.target.parentElement.closest(".loginData__container").remove();

          const loginData = target.filter((item) => item.id !== id);

          console.log(loginData);
          localStorage.setItem("loginData", JSON.stringify(loginData));

          target = JSON.parse(localStorage.getItem("loginData")) || [];
        } else if (clicked.parentElement.closest(".cardData__container")) {
          e.target.parentElement.closest(".cardData__container").remove();

          const cardData = target.filter((item) => item.id !== id);
          localStorage.setItem("cardData", JSON.stringify(cardData));

          target = JSON.parse(localStorage.getItem("cardData")) || [];
        }
      }
    });
    //
    // const trash = item.querySelector(".trash");
    // console.log(trash);
    // console.log(item);
    // trash.addEventListener("click", (e) => {
    //   if (item.classList.contains("loginData__container")) {
    //     const id = item.getAttribute("id");
    //     console.log(id);
    //     const loginData = savedLoginData
    //       .map((data) => data)
    //       .filter((data) => data.id !== id);
    //     console.log(loginData);
    //     localStorage.setItem("loginData", JSON.stringify(loginData));

    // e.target.parentElement.parentElement.remove();

    // if (Data.length === 0) {
    //   // console.log("test");
    //   noDataText.classList.remove("hidden");
    // }
    // }

    // else if (item.classList.contains("cardData__container")) {
    //   const cardData = savedCardData.filter((data) => data.id !== id);

    //   localStorage.setItem("cardData", JSON.stringify(cardData));

    //   e.target.parentElement.parentElement.remove();
    // }

    // else {
    //   const identityData = savedIdentityData.filter((data) => data.id !== id);

    //   localStorage.setItem("identityData", JSON.stringify(identityData));

    //   e.target.parentElement.parentElement.remove();
    // }
    // });
  });

  // const trash = cards.querySelector(".trash");
  // console.log(cards);
  //   data.forEach((div) => {
  //     // console.log(div);
  //   });

  // trash.addEventListener("click", (e) => {
  //   console.log(e.target);
  //   //     if (item.classList.contains("loginData__container")) {
  //   //       const id = item.getAttribute("id");
  //   //       console.log(id);
  //   //       const loginData = savedLoginData
  //   //         .map((data) => data)
  //   //         .filter((data) => data.id !== id);
  //   //       console.log(loginData);
  //   //       localStorage.setItem("loginData", JSON.stringify(loginData));

  //   // }
  // });
}

// deleteData();
