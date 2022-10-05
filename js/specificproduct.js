import myJson from "../json/products.json" assert { type: "json" };

//const selectedId = document.querySelector(".id");
const detailContainer = document.querySelector(".product");
const pageTitle = document.querySelector("title");
const currentBreadcrumb = document.querySelector(".current-breadcrumb");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (id === null) {
  location.href = "/";
}

//selectedId.innerHTML = id;

let result = new Object();

try {
  const results = myJson.cartItems;
  for (let i = 0; i < results.length; i++) {
    if (results[i].id === id) {
      result = results[i];
      break;
    }
  }
} catch (error) {
  detailContainer.innerHTML = message("error", error);
}

pageTitle.innerHTML = `Rainydays | ${result.name}`;

currentBreadcrumb.innerHTML += `${result.name}`;

detailContainer.innerHTML += `
                            <div class="container-showcase-pictures">
                                    <img
                                        src="/images/women/${result.image}"
                                        alt="A lady wearing ${result.name} from Rainydays in ${result.color}"
                                    />
                            </div>

                            <div class="container-showcase-text">

                                <h1>${result.name}</h1>
                                <p>$${result.price} USD</p>
                                <p>Color: ${result.color}</p>
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
                                    <div>
                                        <a href="/html/cart&checkout/shoppingcart.html">
                                            Add to cart <i class="fa-solid fa-cart-shopping"></i>
                                        </a>
                                    </div>
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
