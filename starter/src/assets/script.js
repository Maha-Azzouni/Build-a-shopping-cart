/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
  /* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
  {
    name: 'Cherries',
    price: 6,
    quantity: 0,
    productId: 1,
    image: 'https://static.libertyprim.com/files/varietes/cerise-burlat-large.jpg?1569344439'
  },
  {
    name: 'Orange',
    price: 20,
    quantity: 0,
    productId: 2,
    image: 'https://healthjade.com/wp-content/uploads/2017/10/orange-fruit.jpg'
  },
  {
    name: 'Strawberries',
    price: 3.50,
    quantity: 0,
    productId: 3,
    image: 'https://drannwellness.com/wp-content/uploads/2014/03/strawberries1.jpg'
  },
  {
    name: 'Blueberry',
    price: 2,
    quantity: 0,
    productId: 4,
    image: 'https://www.organicfacts.net/wp-content/uploads/Blueberry.jpg'
  },
  {
    name: 'Peach',
    price: 7,
    quantity: 0,
    productId: 5,
    image: 'https://www.cosmacon.de/wp-content/uploads/2021/02/Pfirsichkernoel-1404x1186.jpg'
  },
  {
    name: 'Ly chees',
    price: 8.50,
    quantity: 0,
    productId: 6,
    image: 'https://tse4.mm.bing.net/th?id=OIP.QavWeg-vNll36rRzCl-4fwHaFB&pid=Api&P=0&h=220'
  }

];

/* Declare an empty array named cart to hold the items in the cart */

const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {
  let product = products.find(product => product.productId === productId);
  product.quantity += 1;
  
  if (!cart.find(item => item.productId === productId)) {
    cart.push(product);
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  const product = products.find((product) => product.productId === productId);
  ++product.quantity;
  if (!cart.find(item => item.productId === productId)) {
    cart.push(product);
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  const product = products.find((product) => product.productId === productId);
  --product.quantity;
  
  if (product.quantity === 0) {
    removeProductFromCart(productId);
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  const index = cart.findIndex((product) => product.productId === productId);
  
  if (index !== -1) {
    cart[index].quantity = 0;
    cart.splice(index, 1);
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

function cartTotal() {
  return cart.reduce((totalPrice, product) => totalPrice + (product.quantity * product.price), 0);
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart.length = 0; 
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

let totalPaid = 0;

function pay(amount) {
  totalPaid += amount;
  let remainingBalance = totalPaid - cartTotal();
  if(remainingBalance>=0){
    emptyCart();
    totalPaid=0;
  }
  return remainingBalance;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
}