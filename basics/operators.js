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