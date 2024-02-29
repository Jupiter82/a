// Product
// Create an array in js to store Product detail
// A Products should contain name,price,discount in %
// Calculate discount amount and after discount and assign to the product itself
// Print the product detail in the following Format:
// Name : ........
// Price: Npr .....
// Discount: ...... %
// Discount Amt : Npr .......
// After DIscount : Npr ....

// Viber sir number(Sandesh bhattarai): 9802111635


let products = [];
let prod1 = {
  name: "Product 1",
  price: 1000,
  discount: 10,
};
let prod2 = {
  name: "Product 2",
  price: 2000,
  discount: 10,
};
let prod3 = {
  name: "Product 3",
  price: 3000,
  discount: 10,
};
let prod4 = {
  name: "Product 4",
  price: 4000,
  discount: 10,
};
let prod5 = {
  name: "Product 5",
  price: 5000,
  discount: 10,
};
//
products.push(prod1, prod2, prod3, prod4, prod5);

//declare variables
let i = 0//acces 0 index of array
let size = products.length //length of array
do {
    
} while (i < size);

var discountAmt = (products[0].price * products[0].discount) / 100;
var afterDiscount = products[0].price - discountAmt;
products[0].afterDis = afterDiscount;
products[0].disAmt = discountAmt;

console.log(products);