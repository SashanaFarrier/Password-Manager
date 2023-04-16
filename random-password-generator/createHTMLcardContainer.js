export default function createHTMLcardContainer(savedCardData) {
  let cardsDataContainer = document.createElement("div");
  cardsDataContainer.classList.add("cardsData__Container");
  let html = ``;
  if (savedCardData.length > 0) {
    savedCardData.map((item) => {
      html += `
    <div class="cardData__container data" id=${item.id}>
      <div class="col-1 ">
        <h1>${item.type}</h1>
        <p><span>Name:</span> ${item.name}</p>
        <p><span>Cardholder:</span> ${item.cardholder}</p>
        <p><span>CardNumber:</span> ${item.cardnumber}</p>
        <p><span>Brand:</span> ${item.brand}</p>
        <p><span>Expiration date:</span> ${item.expirationMonth}/ ${item.expirationYear}</p>
        <p><span>Security Code:</span> ${item.securityCode}</p>
      </div>
      <div class="col-2">
        <i class="trash fa-solid fa-trash-can-arrow-up"></i>
      </div>
    </div>
`;
    });
  }
  cardsDataContainer.innerHTML = html;
  return cardsDataContainer;
}
