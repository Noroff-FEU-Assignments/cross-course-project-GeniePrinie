class CartItem {
  constructor(name, color, image, price) {
    this.name = name;
    this.color = color;
    this.image = image;
    this.price = price;
    this.quantity = 1;
  }
}

class CartStorage {
  static key = "testItems";

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

  static clearCart() {
    localStorage.clear();
  }
}

var jsonItems = {
  CartItems: [
    {
      id: "1",
      image: "item1.jpg",
      name: "Pull-over Jacket",
      color: "White",
      price: 90,
      quantity: 1,
    },
    {
      id: 2,
      image: "classic-rain-jacket.jpg",
      name: "Rain Jacket",
      color: "Red",
      price: 90,
      quantity: 1,
    },
    {
      id: 3,
      image: "item3.jpg",
      name: "Down Jacket",
      color: "Yellow",
      price: 90,
      quantity: 1,
    },
    {
      id: 4,
      image: "item4.jpg",
      name: "Weather Jacket",
      color: "Teal",
      price: 90,
      quantity: 1,
    },
  ],
};

function mySetFunction1() {
  const jsonItem = jsonItems.CartItems.find((obj) => obj.id == 1);
  const item = new CartItem(
    jsonItem.name,
    jsonItem.color,
    jsonItem.image,
    jsonItem.price
  );
  CartStorage.setCart(jsonItem.id, item);
}

function mySetFunction2() {
  const jsonItem = jsonItems.CartItems.find((obj) => obj.id == 2);
  const item = new CartItem(
    jsonItem.name,
    jsonItem.color,
    jsonItem.image,
    jsonItem.price
  );
  CartStorage.setCart("2", item);
}

function mySetFunction3() {
  const jsonItem = jsonItems.CartItems.find((obj) => obj.id == 3);
  const item = new CartItem(
    jsonItem.name,
    jsonItem.color,
    jsonItem.image,
    jsonItem.price
  );
  CartStorage.setCart("3", item);
}

function myGetFunction() {
  var cart = CartStorage.getCart();
  if (cart.size === 0) {
    console.log("No items in local storage");
  } else {
    cart.forEach((item, key) => {
      console.log(item.name);
    });
  }
}

function myClearFunction() {
  CartStorage.clearCart();
}
