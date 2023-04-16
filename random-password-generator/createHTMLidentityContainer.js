export default function createHTMLidentityContainer(savedIdentityData) {
  let identitiesDataContainer = document.createElement("div");
  identitiesDataContainer.classList.add("identitiesData__Container");
  let html = ``;
  if (savedIdentityData.length > 0) {
    savedIdentityData.map((item) => {
      html += `
      <div class="identityData__container data" id=${item.id}>
        <div class="col-1">
          <h1>${item.type}</h1>
          <p><span>Name:</span> ${item.name}</p>
          <p><span>Title:</span> ${item.title}</p>
          <p><span>First name:</span> ${item.firstname}</p>
          <p><span>Middle name:</span> ${item.middlename}</p>
          <p><span>Last name:</span> ${item.lastname}</p>
          <p><span>Username:</span> ${item.username}</p>
          <p><span>Email:</span> ${item.email}</p>
          <p><span>Address:</span> ${item.validAddress}</p>
          <p><span>City:</span> ${item.city}</p>
          <p><span>State:</span> ${item.state}</p>
          <p><span>Zip Code:</span> ${item.zipCode}</p>
          <p><span>Country:</span> ${item.country}</p>
        </div>
        <div class="col-2">
          <i class="trash fa-solid fa-trash-can-arrow-up"></i>
      </div>
      </div>
  `;
    });
  }
  identitiesDataContainer.innerHTML = html;
  return identitiesDataContainer;
}
