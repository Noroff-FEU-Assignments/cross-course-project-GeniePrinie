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

// const infoFormContainer = document.querySelector(".information-form");
// infoFormContainer.innerHTML = `<!-- Quick checkout -->
// <div class="container-quick-ckeckout-section">
//   <h1>Quick Checkout</h1>

//   <a href="#">
//     <div class="div-paypal">
//       <svg
//         id="Layer_1"
//         data-name="Layer 1"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 566.93 137.35"
//       >
//         <defs>
//           <style>
//             .cls-1 {
//               fill: #009ee3;
//             }
//             .cls-1,
//             .cls-2,
//             .cls-3 {
//               fill-rule: evenodd;
//             }
//             .cls-2 {
//               fill: #113984;
//             }
//             .cls-3 {
//               fill: #172c70;
//             }
//           </style>
//         </defs>
//         <title>paypal-seeklogo.com</title>
//         <path
//           class="cls-1"
//           d="M192.95,386.87h38.74c20.8,0,28.63,10.53,27.42,26-2,25.54-17.44,39.67-37.92,39.67H210.85c-2.81,0-4.7,1.86-5.46,6.9L201,488.74c-0.29,1.9-1.29,3-2.79,3.15H173.87c-2.29,0-3.1-1.75-2.5-5.54l14.84-93.93C186.79,388.66,188.85,386.87,192.95,386.87Z"
//           transform="translate(-143.48 -354.54)"
//         />
//         <path
//           class="cls-2"
//           d="M361.14,385.13c13.07,0,25.13,7.09,23.48,24.76-2,21-13.25,32.62-31,32.67H338.11c-2.23,0-3.31,1.82-3.89,5.55l-3,19.07c-0.45,2.88-1.93,4.3-4.11,4.3H312.68c-2.3,0-3.1-1.47-2.59-4.76L322,390.29c0.59-3.76,2-5.16,4.57-5.16h34.54Zm-23.5,40.92h11.75c7.35-.28,12.23-5.37,12.72-14.55,0.3-5.67-3.53-9.73-9.62-9.7l-11.06.05-3.79,24.2h0Zm86.21,39.58c1.32-1.2,2.66-1.82,2.47-.34l-0.47,3.54c-0.24,1.85.49,2.83,2.21,2.83h12.82c2.16,0,3.21-.87,3.74-4.21l7.9-49.58c0.4-2.49-.21-3.71-2.1-3.71H436.32c-1.27,0-1.89.71-2.22,2.65l-0.52,3.05c-0.27,1.59-1,1.87-1.68.27-2.39-5.66-8.49-8.2-17-8-19.77.41-33.1,15.42-34.53,34.66-1.1,14.88,9.56,26.57,23.62,26.57,10.2,0,14.76-3,19.9-7.7h0ZM413.11,458c-8.51,0-14.44-6.79-13.21-15.11s9.19-15.11,17.7-15.11,14.44,6.79,13.21,15.11S421.63,458,413.11,458h0Zm64.5-44h-13c-2.68,0-3.77,2-2.92,4.46l16.14,47.26L462,488.21c-1.33,1.88-.3,3.59,1.57,3.59h14.61a4.47,4.47,0,0,0,4.34-2.13l49.64-71.2c1.53-2.19.81-4.49-1.7-4.49H516.63c-2.37,0-3.32.94-4.68,2.91l-20.7,30L482,416.82C481.46,415,480.11,414,477.62,414Z"
//           transform="translate(-143.48 -354.54)"
//         />
//         <path
//           class="cls-1"
//           d="M583.8,385.13c13.07,0,25.13,7.09,23.48,24.76-2,21-13.25,32.62-31,32.67H560.78c-2.23,0-3.31,1.82-3.89,5.55l-3,19.07c-0.45,2.88-1.93,4.3-4.11,4.3H535.35c-2.3,0-3.1-1.47-2.59-4.76l11.93-76.45c0.59-3.76,2-5.16,4.57-5.16H583.8Zm-23.5,40.92h11.75c7.35-.28,12.23-5.37,12.72-14.55,0.3-5.67-3.53-9.73-9.62-9.7l-11.06.05-3.79,24.2h0Zm86.21,39.58c1.32-1.2,2.66-1.82,2.47-.34l-0.47,3.54c-0.24,1.85.49,2.83,2.21,2.83h12.82c2.16,0,3.21-.87,3.74-4.21l7.9-49.58c0.4-2.49-.21-3.71-2.1-3.71H659c-1.27,0-1.89.71-2.22,2.65l-0.52,3.05c-0.27,1.59-1,1.87-1.68.27-2.39-5.66-8.49-8.2-17-8-19.77.41-33.1,15.42-34.53,34.66-1.1,14.88,9.56,26.57,23.62,26.57,10.2,0,14.76-3,19.9-7.7h0ZM635.78,458c-8.51,0-14.44-6.79-13.21-15.11s9.19-15.11,17.7-15.11,14.44,6.79,13.21,15.11S644.29,458,635.78,458h0Zm59.13,13.74h-14.8a1.75,1.75,0,0,1-1.81-2l13-82.36a2.55,2.55,0,0,1,2.46-2h14.8a1.75,1.75,0,0,1,1.81,2l-13,82.36A2.55,2.55,0,0,1,694.91,471.76Z"
//           transform="translate(-143.48 -354.54)"
//         />
//         <path
//           class="cls-2"
//           d="M168.72,354.54h38.78c10.92,0,23.88.35,32.54,8,5.79,5.11,8.83,13.24,8.13,22-2.38,29.61-20.09,46.2-43.85,46.2H185.2c-3.26,0-5.41,2.16-6.33,8l-5.34,34c-0.35,2.2-1.3,3.5-3,3.66H146.6c-2.65,0-3.59-2-2.9-6.42L160.9,361C161.59,356.62,164,354.54,168.72,354.54Z"
//           transform="translate(-143.48 -354.54)"
//         />
//         <path
//           class="cls-3"
//           d="M179.43,435.29l6.77-42.87c0.59-3.76,2.65-5.56,6.75-5.56h38.74c6.41,0,11.6,1,15.66,2.85-3.89,26.36-20.94,41-43.26,41H185C182.44,430.72,180.56,432,179.43,435.29Z"
//           transform="translate(-143.48 -354.54)"
//         />
//       </svg>
//     </div>
//   </a>
// </div>

// <!-- or -->
// <div class="or"><p>or</p></div>

// <!-- contact info -->
// <div class="container-form-section">
//   <div class="container-text">
//     <h1>Contact Information</h1>
//     <div class="container-text-small">
//       <p>Already have an account?</p>
//       <p>Log in</p>
//     </div>
//   </div>
//   <!-- form -->

//   <div class="container-form-block">
//     <form action="">
//       <div>
//         <input
//           type="email"
//           placeholder=""
//           id="email"
//           name="email"
//           class="floatinput"
//         />
//         <label for="email" class="floatlabel">Email*</label>
//       </div>

//       <div class="container-checkbox">
//         <input type="checkbox" name="sendNews" id="sendnews" />
//         <label for="sendnews">Email me news and offers.</label>
//       </div>

//       <div>
//         <input
//           type="tel"
//           placeholder=""
//           id="phonenumber"
//           class="floatinput"
//         />
//         <label for="phonenumber" class="floatlabel">Phone</label>
//       </div>

//       <div class="container-checkbox">
//         <input type="checkbox" name="getText" id="gettext" />
//         <label for="gettext"
//           >Opt for text regarding of the order.</label
//         >
//       </div>
//     </form>
//   </div>
// </div>

// <!-- shipping address -->
// <div>
//   <div class="container-text">
//     <h1>Shipping Address</h1>
//   </div>

//   <div class="container-form-block">
//     <form action="">
//       <div>
//         <input
//           type="text"
//           placeholder=""
//           id="country"
//           name="country"
//           class="floatinput"
//         />
//         <label for="country" class="floatlabel">Country*</label>
//       </div>

//       <div class="container-form-inputs">
//         <div>
//           <input
//             type="text"
//             placeholder=""
//             id="firstname"
//             name="firstName"
//             class="floatinput"
//           />
//           <label for="firstname" class="floatlabel"
//             >First Name*</label
//           >
//         </div>

//         <div>
//           <input
//             type="text"
//             placeholder=""
//             id="lastname"
//             name="lastName"
//             class="floatinput"
//           />
//           <label for="lastname" class="floatlabel">Last Name*</label>
//         </div>
//       </div>

//       <div>
//         <input
//           type="text"
//           placeholder=""
//           id="address"
//           name="address"
//           class="floatinput"
//         />
//         <label for="address" class="floatlabel"
//           >Street Name & Number*</label
//         >
//       </div>

//       <div>
//         <input
//           type="text"
//           placeholder=""
//           id="addressoptional"
//           name="addressOptional"
//           class="floatinput"
//         />
//         <label for="addressoptional" class="floatlabel"
//           >Apartment, Suite Number (Optional)</label
//         >
//       </div>

//       <div class="container-form-inputs">
//         <div>
//           <input
//             type="number"
//             placeholder=""
//             id="postal"
//             name="postal"
//             class="floatinput"
//           />
//           <label for="postal" class="floatlabel">Postal Code*</label>
//         </div>

//         <div>
//           <input
//             type="text"
//             placeholder=""
//             id="city"
//             name="city"
//             class="floatinput"
//           />
//           <label for="city" class="floatlabel">State/City*</label>
//         </div>
//       </div>

//       <div class="container-checkbox">
//         <input type="checkbox" name="saveInfo" id="saveinfo" />
//         <label for="saveinfo"
//           >Save this information for next time.</label
//         >
//       </div>
//     </form>
//   </div>
// </div>

// <!-- button return and continue -->
// <div class="container-button-return-continue">
//   <div>
//     <a href="/html/cart&checkout/shoppingcart.html"
//       ><i class="fa-solid fa-angle-left"></i> Return to Cart</a
//     >
//   </div>

//   <div class="button button-design continue-buttons">
//     <a href="/html/cart&checkout/payment.html"
//       >Continue to Payment <i class="fa-solid fa-angle-right"></i
//     ></a>
//   </div>
// </div>`
// ;
