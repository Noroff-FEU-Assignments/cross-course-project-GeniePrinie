import myJson from "../json/products.json" assert { type: "json" };

//jacketlist.js
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "";

//link products.json objects here
try {
  const items = myJson.cartItems;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    resultsContainer.innerHTML += `  <a href="/html/women/specificproduct.html?id=${item.id}">
                                            <div data-id="${item.id}" class="card-item">
                                                <img
                                                    src="/images/women/${item.image}"
                                                    alt="a woman wearing Rainydays ${item.name} in ${item.color} color"
                                                />
                                                <h2>${item.name}</h2>
                                                <p>Color: ${item.color}</p>
                                                <p>$${item.price}</p>
                                            </div>
                                        </a>`;
  }
} catch (error) {
  resultsContainer.innerHTML = logError("error", error);
}

function logError(messageType = "success", message = "") {
  return `<div class="alert ${messageType}">${message}</div>`;
}
