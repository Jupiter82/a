let i =1;

//loop
//do-while
//while
//for
//for-in
//for-of
//Array 
    // .map (functional loop)
    // .filter (functional loop)
    // .forEach (functional loop)
    // .some (functional loop)
    // .reduce (functional loop)

//do-while
do{
    //loop body
    console.log(i)
    i++
}while(i <= 10); //defines how many times loop runs// true loop runs// false loop stops
// advantage of do while loop =>loop runs at least one time even when expression does not meet




// console.log(i)
// i++

// console.log(i)
// i++

// console.log(i)
// i++

// console.log(i)
// i++

// console.log(i)
// i++

// console.log(i)
// i++


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

 
{/* <ul>
//Be API Call ===> Data ===> Array of objects
//loop js

  <li>
    <a href="">

    </a>
  </li>
</ul> */}

//CSV(comma seperated value) Import
//read
//declare variable students
let students = [//array
    {//objects
        //key or property : value
        name: "Student",
        markObt: 345
    },
    {
        name: "Student 1",
        markObt:420
    }
]

// do while
 i = 0 // 0 because need too access 0 index //reassign i =0
 let size = students.length; //total size of array
do{
//
students[i].percent = students[i].markObt/500*100
// if (students[i].percent >= 80/*expression*/) {
//     students[i].division = "Distinction"
// }else{
//     if(students[i].percent >= 60){
//         students[i].division = "First Division"
//     }else{
//         if (students[i].percent >= 45) {
//           students[i].division = "Second Division"
//         }else{
//           if (students[i].percent >= 32) {
//               students[i].division = "Third Division"
//           }else{
//               students[i].division = "Sorry you have failed"
//           }
//         }
//     }
// }
//access index i of students array//access percentage property of object of i index
if (students[i].percent >= 80/*expression*/) {
    //body // assigning new property division and populate value in division 
    students[i].division = "Distinction"
}else if(students[i].percent >= 60){
    students[i].division = "First Division"
}else if (students[i].percent >= 45) {
        students[i].division = "Second Division"
}else if (students[i].percent >= 32) {
    students[i].division = "Third Division"
} else{
    students[i].division = "Sorry you have failed"
}
//concatination
console.log("Name:" + students[i].name );
console.log( "Mark:" , students[i].markObt );
console.log("Percentage:" + students[i].percent );
console.log("Division:" + students[i].division );
console.log(" ");

i++
}while(i < size)  //if <=less than equal too 0,1,2 run loop //< less than 0,1 run loop

