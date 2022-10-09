import { CartItem, CartStorage } from "/js/cartclasses.js";

const itemContainer = document.querySelector(".whole-cart-window");

var totalPrice = 0;
var cart = CartStorage.getCart();

cart.forEach(function (item, key) {
  var price = parseFloat(item.price) * item.quantity;
  totalPrice += price;
  itemContainer.innerHTML += `
      <div class="cart-wrapper sub-cart-wrapper">
          <div class="cart-item sub-cart-item">
              <img src="/images/women/${item.image}" />

              <div class="details">
                 <h2>${item.name}</h2>
                 <p>Color: ${item.color}</p>
                 <p class="quantity">Quantity: ${item.quantity}</p>
                 <p class="price">Price: $${price}</p>
              </div>

          </div>
      </div>`;
});

const summaryContainer = document.querySelector(".cart-summary");
var shippingCost = 200 - totalPrice <= 0 ? 0 : 20;
summaryContainer.innerHTML = `
                                <div>
                                    <div class="shipping">Shipping: $${shippingCost}</div>
                                    <div class="subtotal">Subtotal: $${totalPrice}</div>
                                </div>

                             `;
