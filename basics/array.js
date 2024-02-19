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

users[4] = user_4
console.log(users);

//declare variable user_7
let user_7 = {
  name: "User Seven",
  email: "seven@user.com",
  address: "Bhaktapur",
  position:  "user"
}


//inser object in middle of array
//declare variable indx_2
let indx_2 = users.splice(0,3) //gives top index 0 1 2 
indx_2.push(user_7)  //0 1 2 user_7 at end of index
// users.unshift(user_7) // user_7 3 4 5 6 at the start of index

//repopulate users
users = indx_2.concat(users)
console.log(users)



//fetch
// variable declaration first
// let first = users.shift();   // 0 index return
// console.log(first)

//variable declaration last
// let last = users.pop() // last index value
// console.log(last)

// let index_1 = users.splice(1,2)
// console.log(index_1)
// console.log(users)

//declare variable
// let index_1 = [users[1],users[2]]
// console.log(index_1)

// let index_1 = users.slice(1,3)
// console.log(index_1);

// let index_1 = users.slice(1,2)
// let index_2 = users.slice(2,3)

// console.log(index_1,index_2);

// index_1.push(index_2) //error 
// let arr = index_1.concat(index_2)
// console.log(arr);


//file upload
//declare varaible allowed
let allowed = ['jpg','png','jpeg','webp'] //array single dimentinal
let ext = "png";

allowed.includes(ext) //boolean
console.log(allowed.includes(ext));

allowed.indexOf(ext) //-1, or index
console.log(allowed.indexOf(ext))

allowed.sort()
console.log(allowed.sort());

console.log(allowed.reverse());

// .map()