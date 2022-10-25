import { CartItem, CartStorage } from "/js/cartclasses.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "http://rainydays.local/wp-json/wc/store/products/" + id;
const detailContainer = document.querySelector(".product");
const pageTitle = document.querySelector("title");
const currentBreadcrumb = document.querySelector(".current-breadcrumb");

const loading = document.querySelector(".preLoading");
loading.innerHTML = `<div class="loading"></div>`;

const response = await fetch(url);
const item = await response.json();
makeLoadingScreen();

function makeLoadingScreen() {
  loading.innerHTML = `<div class=""></div>`;
}

const name = item.name;
const color = item.attributes[0].terms[0].name;
const imageSrc = item.images[0].src;
const price = item.prices.regular_price;
const currency = item.prices.currency_symbol;

pageTitle.innerHTML = `Rainydays | ${name}`;
currentBreadcrumb.innerHTML += `${name}`;

detailContainer.innerHTML += `
                            <div class="container-showcase-pictures">
                                    <img
                                        src="${imageSrc}"
                                        alt="A lady wearing ${name} from Rainydays in ${color}"
                                    />
                            </div>

                            <div class="container-showcase-text">

                                <h1>${name}</h1>
                                <p>${price} ${currency}</p>
                                <p>Color: ${color}</p>
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
  const cartItem = new CartItem(name, color, imageSrc, price, currency);
  CartStorage.setCart(id, cartItem);
});
