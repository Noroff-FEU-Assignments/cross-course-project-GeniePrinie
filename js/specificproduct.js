import myJson from "../json/products.json" assert { type: "json" };
import { CartItem, CartStorage } from "/js/cartclasses.js";

const detailContainer = document.querySelector(".product");
const pageTitle = document.querySelector("title");
const currentBreadcrumb = document.querySelector(".current-breadcrumb");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
let item = new Object();

try {
  const items = myJson.cartItems;
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      item = items[i];
      break;
    }
  }
} catch (error) {
  detailContainer.innerHTML = logError("error", error);
}

function logError(messageType = "success", message = "") {
  return `<div class="alert ${messageType}">${message}</div>`;
}

pageTitle.innerHTML = `Rainydays | ${item.name}`;

currentBreadcrumb.innerHTML += `${item.name}`;

detailContainer.innerHTML += `
                            <div class="container-showcase-pictures">
                                    <img
                                        src="/images/women/${item.image}"
                                        alt="A lady wearing ${item.name} from Rainydays in ${item.color}"
                                    />
                            </div>

                            <div class="container-showcase-text">

                                <h1>${item.name}</h1>
                                <p>$${item.price} USD</p>
                                <p>Color: ${item.color}</p>
                                <h2>Size</h2>
                                <label for="sizes">
                                    <select name="sizes" id="sizes" class="select-size">
                                        <option value="">Select Size</option>
                                        <option value="xs">XS</option>
                                        <option value="s">S</option>
                                        <option value="m">M</option>
                                        <option value="l">L</option>
                                        <option value="xl">XL</option>
                                        <option value="xxl">XXL</option>
                                    </select>
                                </label>

                                <div class="sizechart"><p>Size Chart</p></div>
                                

                                <!-- add to cart button -->
                                <div class="button button-design button-add-to-cart-position addToCartBtn">
                                    <i class="fa-solid fa-cart-shopping"></i> Add to cart  
                                </div>
                                <!-- Description -->
                                <div>
                                    <div class="container-description-with-arrow product-details-top-border">
                                        <div><p>Product Details</p></div>
                                        <div><i class="fa-solid fa-angle-down"></i></div>
                                    </div>

                                    <div class="container-description-with-arrow">
                                        <div><p>Fit</p></div>
                                        <div><i class="fa-solid fa-angle-down"></i></div>
                                    </div>

                                    <div class="container-description-with-arrow">
                                        <div><p>Composition</p></div>
                                        <div><i class="fa-solid fa-angle-down"></i></div>
                                    </div>

                                    <div class="container-description-with-arrow">
                                        <div><p>Product care</p></div>
                                        <div><i class="fa-solid fa-angle-down"></i></div>
                                    </div>

                                    <div class="container-description-with-arrow">
                                        <div><p>Shipping estimates & return</p></div>
                                        <div><i class="fa-solid fa-angle-down"></i></div>
                                    </div>
                                </div>

                            </div>`;

const addToCartBtn = document.querySelector(".addToCartBtn");

addToCartBtn.addEventListener("click", function () {
  const cartItem = new CartItem(item.name, item.color, item.image, item.price);
  CartStorage.setCart(item.id, cartItem);
});
