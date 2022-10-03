class CartItem {
  constructor(name, color, image, price) {
    this.name = name;
    this.color = color;
    this.image = image;
    this.price = price;
    this.quatity = 1;
  }
}

class LocalCart {
  static key = "cartItems";

  static getLocalCartItems() {
    let cartMap = new Map();
    const cart = localStorage.getItem(LocalCart.key);
    if (cart === null || cart.length === 0) return cartMap;
    return new Map(Object.entries(JSON.parse(cart)));
  }

  static addItemToLocalCart(id, item) {
    let cart = LocalCart.getLocalCartItems();
    if (cart.has(id)) {
      let mapItem = cart.get(id);
      mapItem.quatity += 1;
      cart.set(id, mapItem);
    } else cart.set(id, item);
    localStorage.setItem(
      LocalCart.key,
      JSON.stringify(Object.fromEntries(cart))
    );
    updateCartUI();
  }

  static removeItemFromCart(id) {
    let cart = LocalCart.getLocalCartItems();
    if (cart.has(id)) {
      let mapItem = cart.get(id);
      if (mapItem.quantity > 1) {
        mapItem.quantity -= 1;
        cart.set(id, mapItem);
      } else {
        cart.delete(id);
      }
      if (cart.length === 0) {
        localStorage.clear();
      } else {
        localStorage.setItem(
          LocalCart.key,
          JSON.stringify(Object.fromEntries(cart))
        );
        updateCartUI();
      }
    }
  }
}

const cartIcon = document.querySelector(".fa-cart-shopping");
const wholeCartWindown = document.querySelector(".whole-cart-window");
wholeCartWindown.inWindow = 0;

const addToCartBtns = document.querySelectorAll(".addToCartBtn");
addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", addItemFuntion);
});

function addItemFuntion(e) {
  const id =
    e.target.parentElement.parentElement.parentElement.getAttribute("data-id");
  const image = e.target.parentElement.parentElement.previousElementSibling.src;
  const name = e.target.parentElement.previousElementSibling.textContent;
  const color = e.target.parentElement.children[0].textContent;
  let price = e.target.parentElement.children[1].textContent;
  price = price.replace("Price: $", "");
  const item = new CartItem(name, color, image, price);
  LocalCart.addItemToLocalCart(id, item);
  //console.log(price);
}

cartIcon.addEventListener("mouseover", () => {
  if (wholeCartWindown.classList.contains("hide"))
    wholeCartWindown.classList.remove("hide");
});

cartIcon.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (wholeCartWindown.inWindow === 0) {
      wholeCartWindown.classList.add("hide");
    }
  }, 500);
});

wholeCartWindown.addEventListener("mouseover", () => {
  wholeCartWindown.inWindow = 1;
});

wholeCartWindown.addEventListener("mouseleave", () => {
  wholeCartWindown.inWindow = 0;
  wholeCartWindown.classList.add("hide");
});

function updateCartUI() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  cartWrapper.innerHTML = "";
  const items = LocalCart.getLocalCartItems();
  if (items === null) return;
  let count = 0;
  let total = 0;
  for (const [key, value] of items.entries()) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    let price = value.price * value.quantity;
    price = Math.round(price * 100) / 100;
    cartItem.innerHTML = `  <img src="${value.image}" />
                            <div class="details">
                                <h2>${value.name}</h2>
                                <p>
                                    <span>${value.color}</span>
                                    <span class="quantity">Quantity: ${value.quantity}</span>
                                    <span class="price">Price: $${price} USD</span>
                                </p>
                            </div>
                            <div class="cancel">
                                <i class="fas fa-window-close"></i>
                            </div>
    `;

    cartItem.lastElementChild.addEventListener("click", () => {
      LocalCart.removeItemFromCart(key);
    });
    cartWrapper.append(cartItem);
  }

  if (count > 0) {
    cartIcon.classList.add("non-empty");
    let root = document.querySelector(":root");
    root.style.setProperty("--after-content", `"${count}"`);
    const subtotal = document.querySelector(".subtotal");
    subtotal.innerHTML = `Subtotal: $${total}`;
  } else {
    cartIcon.classList.remove("non-empty");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartUI();
});
