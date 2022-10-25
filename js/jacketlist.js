const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "";

const loading = document.querySelector(".preLoading");
loading.innerHTML = `<div class="loading"></div>`;

const url =
  "https://genieprinyanut.com/Noroff/rainydays-api/wp-json/wc/store/products";

async function fetchjacket() {
  try {
    const response = await fetch(url);
    const items = await response.json();
    for (let i = 0; i < items.length; i++) {
      loading.innerHTML = `<div class=""></div>`;

      const item = items[i];
      const id = item.id;
      const name = item.name;
      const color = item.attributes[0].terms[0].name;
      const imageSrc = item.images[0].src;
      const price = `${item.prices.regular_price} ${item.prices.currency_symbol}`;

      resultsContainer.innerHTML += `  <a href="/html/women/specificproduct.html?id=${id}">
                                                  <div data-id="${id}" class="card-item">
                                                      <img
                                                          src="${imageSrc}"
                                                          alt="a woman wearing Rainydays ${name} in ${color} color"
                                                      />
                                                      <h2>${name}</h2>
                                                      <p>Color: ${color}</p>
                                                      <p>${price}</p>
                                                  </div>
                                              </a>`;
    }
  } catch (error) {
    resultsContainer.innerHTML = logError("error", error);
  }
}

fetchjacket();

function logError(messageType = "success", message = "") {
  return `<div class="alert ${messageType}">${message}</div>`;
}
