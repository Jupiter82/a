//OOP
//object oriented programing
//functional / OOP
//class,object
//class = data-structure
//object = representation
    //user
        //Ram
    //car
        // Alto

// 4 pillars of OOP
//Encapsulation
    //security
//Abstraction
    // Structure/access
//Inheritance
    //Reusability
//Polymorphism
    //Multiple forms


// class User { 
//     //public,private,protected

//     // #=private
//     #name = "Test User";
// }

// class Admin extends User{
   
// }

// class Group {
//     name;
// }

// class Bachelors extends Group {}
// class Masters extends Group {}
// class Departments extends Group {}

//id  entitiy        polyid
//1   Bahceloe          1
//2   Master            1

// 2 ways of oop in js

// a. Prototype

function User(_name,_email,_address){
    //body
    this.name = _name
    this.email = _email
    this.address = _address
}

User.prototype.getName = function () {
    // this is not accissible for arrow function
    return this.name
}

//object
const userObj = new User("Jupiter","Jupiterbade@gmail.com","Thimi")

console.log(userObj)

console.log(userObj.getName())