import myJson from "../json/products.json" assert { type: "json" };

//jacketlist.js
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "";

//link products.json objects here
try {
  const results = myJson.cartItems;
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    resultsContainer.innerHTML += `  <a href="/html/women/specificproduct.html?id=${result.id}">
                                            <div data-id="${result.id}" class="card-item">
                                                <img
                                                    src="/images/women/${result.image}"
                                                    alt="a woman wearing Rainydays ${result.name} in ${result.color} color"
                                                />
                                                <h2>${result.name}</h2>
                                                <p>Color: ${result.color}</p>
                                                <p>$${result.price}</p>
                                            </div>
                                        </a>`;
  }
} catch (error) {
  resultsContainer.innerHTML = message("error", error);
}

//sharedFunction between jacketlist.js and specificproduct.js

function message(messageType = "success", message = "") {
  return `<div class="alert ${messageType}">${message}</div>`;
}

// //shoppingcart.js page

// //inside a <main class="main-shopping-cart"></main>
// cartContainer.innerHTML += `    <div class="cart-item">
//                                     <img src="/images/women/${result.image}" />
//                                     <div class="">
//                                         <h3>${result.name}</h3>
//                                         <p>
//                                         <span>Color: ${result.color}</span>
//                                         <span class="quantity">Quantity: 1</span>
//                                         <span class="price">Price: $${result.price}</span>
//                                         </p>
//                                     </div>
//                                     <div class="cancel">
//                                     <i class="fa-solid fa-trash-can"></i>
//                                     </div>
//                                 </div>

//                                 <div class="cart-summary">
//                                     <div>
//                                         <div class="subtotal">Subtotal: ${subtotal}</div>
//                                         <div class="checkout">
//                                             <a href="/html/cart&checkout/information.html">
//                                                 Checkout<i class="fa-solid fa-angle-right"></i>
//                                             </a>
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <a href="/">
//                                             <div class="continue-shopping">
//                                                 <i class="fa-solid fa-angle-left"></i>Continue Shopping
//                                             </div>
//                                         </a>
//                                     </div>

//                                 </div>`;

// `

// <!-- BLOCK 2  continue shopping button, summary, until checkout button-->

// <section class="container-summary-block">
//   <!-- THIS SECTION NEEDS TO FLEX row at 800px -->

//   <!-- div 1 container-->
//   <div class="container-button-hint">
//     <!-- <continue shopping button, HINT with truck icon -->
//     <div class="button button-design button-continue-shopping">
//       <a href="/index.html"
//         ><i class="fa-solid fa-angle-left"></i> Continue Shopping</a
//       >
//     </div>

//     <div class="hint-box">
//       <div><i class="fa-solid fa-truck"></i></div>
//       <div><p>Hint:</p></div>
//       <div><p>You are $60.00 away from receiving free shipping!</p></div>
//     </div>
//   </div>

//   <!-- div 2 container-->
//   <div class="container-summary-price">
//     <!-- SUMMARY, SUBTOTAL, Checkout button -->
//     <div><h2>Summary</h2></div>

//     <div class="subtotal-price-flex">
//       <div><h3>Subtotal</h3></div>
//       <div><p>$${subtotal} USD</p></div>
//     </div>
//     <div class="calculated-at-check-out">
//       <p>
//         Shipping, taxes, and discount codes are calculated at checkout.
//       </p>
//     </div>

//     <div class="button button-design button-checkout">
//       <a href="/html/cart&checkout/information.html"
//         >Check Out <i class="fa-solid fa-angle-right"></i
//       ></a>
//     </div>
//   </div>
// </section>

// `;
