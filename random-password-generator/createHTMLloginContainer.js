export default function createHTMLloginContainer(savedLoginData) {
  let loginsDataContainer = document.createElement("div");
  loginsDataContainer.classList.add("loginsData__Container");
  let html = ``;
  if (savedLoginData.length > 0) {
    savedLoginData.map((item) => {
      html += `
              <div class="loginData__container data"  id=${item.id}>
                <div class="col-1">
                  <h1>${item.type}</h1>
                  <p><span>Name:</span> ${item.name}</p>
                  <p><span>Username:</span> ${item.username}</p>
                  <p><span>Password:</span> ${item.password}</p>
                </div>
                <div class="col-2">
                  <i class="trash fa-solid fa-trash-can-arrow-up"></i>
                </div>
              </div>
              `;
    });
  }
  loginsDataContainer.innerHTML = html;
  return loginsDataContainer;
}
