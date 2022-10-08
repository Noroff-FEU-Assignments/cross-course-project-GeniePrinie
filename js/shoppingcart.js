import { CartItem, CartStorage } from "/js/cartclasses.js";

const cartContainer = document.querySelector(".whole-cart-window");
const summaryContainer = document.querySelector(".cart-summary");

var totalPrice = 0;
var cart = CartStorage.getCart();
var cartEmpty = cart.size === 0;

if (cartEmpty) {
  cartContainer.innerHTML = `<div class"emptycart" style="font-size:25px;color:grey;display:flex;justify-content:center;width:100%">
                                <p>Nothing is in the cart <i class="fa-regular fa-face-frown-open"></i>
                                </p>
                            </div>`;
} else {
  cart.forEach(function (item, key) {
    var price = parseFloat(item.price) * item.quantity;
    totalPrice += price;
    cartContainer.innerHTML += `
                               <div class="cart-wrapper">
                                   <div class="cart-item">
                                       <img src="/images/women/${item.image}" />

                                       <div class="details">
                                          <h2>${item.name}</h2>
                                          <p>Color: ${item.color}</p>

                                          <div class="quantity-price" >   
                                              <p class="quantity">Quantity: ${item.quantity}</p> 
                                              <p><span class="price">Price: $${price}</p>
                                          </div>

                                       </div>

                                       <div class="cancel">
                                           <i class="fa-solid fa-trash-can delete" id="${key}"></i>
                                       </div>
                                   </div>
                               </div>`;
  });
}

const trashIcons = document.querySelectorAll(".delete");
trashIcons.forEach((item) => {
  item.addEventListener("click", (event) => {
    CartStorage.reduceCart(item.id);
    location.reload();
  });
});

var freeShipping = 200 - totalPrice <= 0 ? true : false;
var shippingMessage = freeShipping
  ? "You got free shipping!"
  : `You are $${200 - totalPrice} away from receiving free shipping!`;

summaryContainer.innerHTML = `
                                <div>
                                    <div class="subtotal">Subtotal: $${totalPrice}</div>
                                    <div class="calculated-at-check-out">
                                            <p>
                                                Shipping, taxes, and discount codes are calculated at checkout.
                                            </p>
                                    </div>
                                    <div class="checkout">
                                        <a href="/html/cart&checkout/information.html">
                                            Checkout <i class="fa-solid fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>

                                <div>
                                        <a href="/">
                                        <div class="continue-shopping">
                                            <i class="fa-solid fa-angle-left"></i> Continue Shopping
                                        </div>
                                        </a>

                                        <div class="hint-box">
                                            <i class="fa-solid fa-truck"></i>
                                            <p>Hint:</p>
                                            <p>${shippingMessage}</p>
                                        </div>
                                </div>`;

const checkoutButton = document.querySelector(".checkout");
if (cartEmpty) checkoutButton.classList.add("disable-link");
