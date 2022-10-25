class CartItem {
  constructor(name, color, image, price, currency) {
    this.name = name;
    this.color = color;
    this.image = image;
    this.price = price;
    this.currency = currency;
    this.quantity = 1;
  }
}

class CartStorage {
  static key = "cartItems";

  static getCart() {
    const cart = localStorage.getItem(CartStorage.key);
    if (cart === null) return new Map();
    return new Map(Object.entries(JSON.parse(cart)));
  }

  static setCart(id, item) {
    let cart = this.getCart();
    if (cart.has(id)) {
      let cartItem = cart.get(id);
      cartItem.quantity += 1;
      cart.set(id, cartItem);
    } else {
      cart.set(id, item);
    }
    localStorage.setItem(
      CartStorage.key,
      JSON.stringify(Object.fromEntries(cart))
    );
  }

  static reduceCart(id) {
    let cart = this.getCart();
    if (cart.has(id)) {
      let cartItem = cart.get(id);
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        cart.set(id, cartItem);
      } else {
        cart.delete(id);
      }
      if (cart.length === 0) {
        this.clearCart();
      } else {
        localStorage.setItem(
          this.key,
          JSON.stringify(Object.fromEntries(cart))
        );
      }
    }
  }

  static clearCart() {
    localStorage.clear();
  }
}

export { CartItem, CartStorage };
