/*
    a. Mathematical/Arithematic operators
    +,-,*,/,%
    b. Increment or Decrement Operator
    ++, --
    c. Assignment Operators
    =, +=, -=, *= ,/=, %=
    d.Comparision Operators
    < lessthan, > greaterthan, <= lessthan equal to, >= greater than equal to, ==, != not equal to, ===, !==
    e. String / Concatination Operation
        +, comma(,)
    f. Logical Operator(boolean)
        && (and), ||(or), !(not)
    g. Ternary/conditional Operator
      (expression) ? true condition (in 1 line / single statement) : false Expression
    h. Spread or Rest Operator
    ...

*/

//declare variable a , b , c , e,f,g
let a = 10;
let b = 20;
let c = a + b;
console.log(c);
let e = 3;
let f = a / e //devision
let g = a % e //remender


console.log(f.toFixed(3)); // 3.333
console.log(g); // 1 


//a=10
//a++; // a = a+1
//a=10
console.log(a++) //print,increase post asign .first print => then increase ++,10----> a = a +1
//a ?===? 11
//console.log(a); //11
//++a; // a = a+1
// console.log(++a)

console.log(++a) //12, print,increase , pre assign, increase, print
// a =12,12

//loop
//print serial index
let i = 1;
        //table
// i++;
// console.log(i)

console.log(i++); //print=1,i = 2, print=2,i=3

// repopulate
 i = 0;
 console.log(++i) //i=1,print=1,i=2,print=2

a = 10;
a++
++a


a = a + 2

a += 2; // a = a + 2

a -= 2; //a = a - 2

a *= 2; //a = a * 2

a %= 2; //a = a % 2

//comparision Operators

let x= 10; //number value basis
let y = '11'; //string ASCII value

console.log(x < y) //true
console.log(x <= y) //true
console.log( x == y) //true (check value)
console.log( x === y) //false (check value and data)

console.log( x != y) //false (check value)
console.log( x !== y) //true (check value and data)

let z = x + y //1011 concatination
let p = x - y //-1
console.log(z);

// String / concatination operation
let name = "Jupiter"
let last = "Bade"

let xyz = 2
a= a+xyz
a += xyz

//logiic
// name = name + " " + last
name += " "+ last
// console.log(name +" "+ last)
console.log(name);

//email service
let message =  'Hellow there,'
message += 'You have a message' //message = message + 'You have a message' (concatination operation)

//reassigns value of x=10 and y =15
x = 10
y = 15;
//< lessthan // && both expression should be true // || only one expression need to be true 
((x === y) && (x < y) && (x > y))
//x === y false && x < y true && x > y false => false



console.log(((x === y) || (x < y) || (x > y)),'test');
// false || true || false => true


// !(false || true || false) => !(true) => false
console.log(!((x === y) || (x < y) || (x > y)),"test")

//Ternary / Conditional Operator

// declare variable student_1
let student_1 = { //object
    //key or property : value
    name:"Std One",
    marksObt: 120,
    // email: "test@test.com"
}

// email ===> email , null

//declare email variable
// let email = (student_1.hasOwnProperty('email') === true) ? student_1.email : null; // object.email(acess object email key or property)
// let email = (student_1.hasOwnProperty('email')) ? student_1.email : null
// let email = student_1.email ? student_1.email : null;
//Assign
// let email = student_1.email ?? null
let email = student_1.email || null


console.log(email); //undefined

//declare variable user_1
let user_1 ={ //object
    //key or property : value
    name:"User One",
    email:"one@user.com",
    address:"Kathmandu"
}

let admin_1 = {
    // name: user_1.name,
    // email: user_1.email,
    // address:user_1.address,
    ... user_1, //spread Operation
    role:"admin",
    organization: "Broadway Infosys "
}

console.log(admin_1)

//object destructuring
let adminaccess = {name: fullname/*aliasing destructured variables = renaming or creating alternative names for variables */, email: emailAdress, role, ...other/*...rest operators*/} = admin_1
console.log(fullname)
console.log(emailAdress)
console.log(role)
console.log(other)
// let fullname = admin_1.name
// let emailAdress = admin_1.email
// let role = admin_1.role

// let other ={
//     organization:admin_1.organization,
//     address:admin_1.address
// }









let user_2 = {...user_1}//deep cloning spread operator

user_2.name = "User Two";
console.log(user_2); // name :"User two" after deep cloning using spread operators ==>  name :"User Two"
console.log(user_1); // name :"User two" after deep cloning using spread operators ==>  name :"User One"


//declare variable arr_1 and arr_3
let arr_1 = [1,2,3]
let arr_2 = [4,5,6]

let arr_3 = [...arr_1, ...arr_2] // [1,2,3,4,5,6]
console.log(arr_3)

