//data-types
//a.Primitive
//-string
//-number
//-boolean
//-null
//-set
//-undefined
//b.Derived
//-array
//-object/JSON



//-NaN



let a = '123'
console.log(typeof a);

let b = "xyz"
console.log(typeof b);

let c = `true`
console.log(typeof c);

let d = 'null'
console.log(typeof d);

let e = 123
console.log(typeof e);

let f = 1.3
console.log(typeof f);

let g = 12e3
console.log(typeof g);

let i = true;
console.log(typeof i);

let j = false;
console.log(typeof j);

let k = null
console.log(typeof k);

let l = ""
console.log(typeof l);

let m;
console.log(typeof m)

// array
// comma seperated
// index => value pair
// index default defined
// index always start from 0
// 0-9
// size = no of elements
// last index = size -1

let employee_1 = ["Employee Name","Kathmandu", 1231231231, "Client"];
console.log(employee_1[0])
//size = employee_1 =>4
// last index = 4-1 =3
let employee_2 = new Array("Employee Name2","Lalitpur",12312312,"Admin");
console.log(employee_2[1])

// product ===> name, brand, catagory, price, discount, after_discount
// values print

// object data (prototype based object oriented)

let employee_obj_1 = {
    name: "Employee Name",
    address: "Kathmandu",
    phone : 1212312312,
    position : "client"
};
console.log(employee_obj_1.name)
let employee_obj_2 = {
    name: "Employee Name",
    address: "Kathmandu",
    phone : 1212312312,
    position : "client"
};
console.log(employee_obj_2["address"])