let users = []

//object variable
let user_1 = { //curly bracket for object
  //key:value
  name: " User One",
  email: "one@user.com",
  address: "Kathmandu",
  position: "admin"
}

//data insert
//[],0
console.log(users)
users.push(user_1) //at the end of array
console.log(users )

//[object]
let user_2 = { //curly bracket for object
  //key:value
  name: " User Two",
  email: "two@user.com",
  address: "Lalitpur",
  position: "admin"
}

users.push(user_2)
console.log(users);

let user_3 = {
  name:"User Three",
  email: "three@user.com",
  address: "Lalitpur",
  position: "admin"
}

// users => [{3},{1},{2}]
users.unshift(user_3)  // at the top of an array
console.log(users);

//declare variables
let size = users.length; //length is properties

let user_4 = {
  name: "User Four",
  email: "four@user.com",
  address: "Bhaktapur",
  position: "user"
}


users.push(user_4)
// users[size] = user_4 same as users[3] = user_4
users[3] = user_4 //populate users array index 3

let user_5 = {
  name: "User Five",
  email:"five@user.com",
  address: "Thimi",
  position: "superadmin"
}

users[size] = user_5 //same as users[4] = user_5 usersle point gareko 4

console.log(size)

let user_6 = {
  name:"User Six",
  email: "six@user.com",
  address: "lagankhel",
  position: "user"
}

// users[3] = user_6 //replace index 3 if existing 
users[5] = user_6 //populate index 5 if non-existing
console.log(users);
console.log(users.length)//length properties;



// let products = [];
// let prod1 = {
//   name: "Product 1",
//   price: 1000,
//   discount: 10,
// };
// let prod2 = {
//   name: "Product 2",
//   price: 2000,
//   discount: 10,
// };
// let prod3 = {
//   name: "Product 3",
//   price: 3000,
//   discount: 10,
// };
// let prod4 = {
//   name: "Product 4",
//   price: 4000,
//   discount: 10,
// };
// let prod5 = {
//   name: "Product 5",
//   price: 5000,
//   discount: 10,
// };
// //
// products.push(prod1, prod2, prod3, prod4, prod5);

// var discountAmt = (products[0].price * products[0].discount) / 100;
// var afterDiscount = products[0].price - discountAmt;
// products[0].afterDis = afterDiscount;
// products[0].disAmt = discountAmt;

// var discountAmt = (products[1].price * products[1].discount) / 100;
// var afterDiscount = products[1].price - discountAmt;
// products[1].afterDis = afterDiscount;
// products[1].disAmt = discountAmt;

// var discountAmt = (products[2].price * products[2].discount) / 100;
// var afterDiscount = products[2].price - discountAmt;
// products[2].afterDis = afterDiscount;
// products[2].disAmt = discountAmt;

// var discountAmt = (products[3].price * products[3].discount) / 100;
// var afterDiscount = products[3].price - discountAmt;
// products[3].afterDis = afterDiscount;
// products[3].disAmt = discountAmt;

// var discountAmt = (products[4].price * products[4].discount) / 100;
// var afterDiscount = products[4].price - discountAmt;
// products[4].afterDis = afterDiscount;
// products[4].disAmt = discountAmt;

// console.log(products);
