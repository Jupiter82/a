//Task
//Create an array or students with name, markObt as a properties.
// Calculate percentage for all the students withput using loop. consider 500 as total
// calculate division based on the percentage.
// per >= 80 => Distinction
// per >= 60, < 80 => First division
// per >= 45, < 60 => Second division
// per >= 32, < 45 => Third division
// per < 32, => Sorry you have failed
// Asign the values(percent and the division to each students)
// print in the following format:

/*
* Name: ...................
* Marks: ....................
* Percent: .................. %
* Division: ...................

*Name: ....................
*Marks: .....................
*Percent: .................... %
*Division: ....................
*/

// declare variable Students
let students = [
  //array
  {
    //object
    // key or property:Value
    name: "Ram",
    markObt: 230,
  },
  {
    //object
    // key or property:Value
    name: "Shyam",
    markObt: 320,
  },
  {
    //object
    // key or property:Value
    name: "Hari",
    markObt: 450,
  }
];

// if(expression){
//     //body
// }else{
//     // optional
// }


//step-1. find percentage% //formula: number/total*100
//step-2. add new property division and print value


//assigning new property percent //students[0] accesses the first student object in the array.// percent then accesses the percent property of that first student object.
students[0].percent = students[0].markObt/500*100

students[1].percent = students[1].markObt/500*100

students[2].percent = students[2].markObt/500*100

console.log(students[0].percent);
console.log(students[1].percent);
console.log(students[2].percent);

console.log()
//using if else statement
// students variable index 0 // accesses percentage 
//assigning new peoperty division 
if (students[0].percent >= 80/*expression*/) {
    students[0].division = "Distinction"
}else{
    if(students[0].percent >= 60){
        students[0].division = "First Division"
    }else{
        if (students[0].percent >= 45) {
          students[0].division = "Second Division"
        }else{
          if (students[0].percent >= 32) {
              students[0].division = "Third Division"
          }else{
              students[0].division = "Sorry you have failed"
          }
        }
    }
}
//concatination
console.log("Name:" + students[0].name );
console.log( "Mark:" , students[0].markObt );
console.log("Percentage:" + students[0].percentage );
console.log("Division:" + students[0].division );
console.log(" ");

if (students[1].percent >= 80 /*expression*/) {
  students[1].division = "Distinction";
} else {
  if (students[1].percent >= 60) {
    students[1].division = "First Division";
  } else {
    if (students[1].percent >= 45) {
      students[1].division = "Second Division";
    } else {
      if (students[1].percent >= 32) {
        students[1].division = "Third Division";
      } else {
        students[1].division = "Sorry you have failed";
      }
    }
  }
}

//concatination
console.log("Name:" + students[1].name );
console.log( "Mark:" , students[1].markObt );
console.log("Percentage:" + students[1].percentage );
console.log("Division:" + students[1].division );
console.log(" ");
if (students[2].percent >= 80 /*expression*/) {
  students[2].division = "Distinction";
} else {
  if (students[2].percent >= 60) {
    students[2].division = "First Division";
  } else {
    if (students[2].percent >= 45) {
      students[2].division = "Second Division";
    } else {
      if (students[2].percent >= 32) {
        students[2].division = "Third Division";
      } else {
        students[2].division = "Sorry you have failed";
      }
    }
  }
}

//concatination
console.log("Name:" + students[2].name );
console.log( "Mark:" , students[2].markObt );
console.log("Percentage:" + students[2].percentage );
console.log("Division:" + students[2].division );