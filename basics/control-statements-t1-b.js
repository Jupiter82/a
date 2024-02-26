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
//strp-2. 
students[0].percent = students[0].markObt/500*100

students[1].percent = students[1].markObt/500*100

students[2].percent = students[2].markObt/500*100

console.log(students[0].percent);
console.log(students[1].percent);
console.log(students[2].percent);

console.log()
//using if else statement
// students variable index 0 
if (students[0].percent >= 80/*expression*/) {
    students[0].division = "Distinction"
}else{
    if(students[0].percent >= 60){
        students[0].division = "First Division"
    }else{
        if (students[0].percent >= 60) {
            
        }
    }

}