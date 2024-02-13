let products = []
let prod1 = {
    name:"Product 1",
    price:1000,
    discount: 10
}
let prod2 = {
    name:"Product 2",
    price:2000,
    discount: 10
}
let prod3 = {
    name:"Product 3",
    price:3000,
    discount: 10
}
let prod4 = {
    name:"Product 4",
    price:4000,
    discount: 10
}
let prod5 = {
    name:"Product 5",
    price:5000,
    discount: 10
}
//
products.push(prod1,prod2,prod3,prod4,prod5)

var discountAmt = products[0].price * products[0].discount/100
var afterDiscount = products[0].price - discountAmt;
products[0].afterDis = afterDiscount;
products[0].disAmt = discountAmt;

var discountAmt = products[1].price * products[1].discount/100
var afterDiscount = products[1].price - discountAmt;
products[1].afterDis = afterDiscount;
products[1].disAmt = discountAmt;

var discountAmt = products[2].price * products[2].discount/100
var afterDiscount = products[2].price - discountAmt;
products[2].afterDis = afterDiscount;
products[2].disAmt = discountAmt;

var discountAmt = products[3].price * products[3].discount/100
var afterDiscount = products[3].price - discountAmt;
products[3].afterDis = afterDiscount;
products[3].disAmt = discountAmt;

var discountAmt = products[4].price * products[4].discount/100
var afterDiscount = products[4].price - discountAmt;
products[4].afterDis = afterDiscount;
products[4].disAmt = discountAmt;


console.log(products)