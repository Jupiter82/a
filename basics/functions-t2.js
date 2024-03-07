// Create an object data called student.
//Assign name and marks on the object
// Create a function to get Percentage based on the marks obtained
// Consider 500 as a total
// Create a function to get Division based on the percentage 
// Logic :
// if percentage >= 80 ====> Division = Distinction
// if percentage >= 60 ====> Division = First Division
// if percentage >= 45 ====> Division = Second Division
// if percentage >= 32 ====> Division = Third Division
// if percentage < 32 ====> Division = failed




let student = {
    name:"student one",
    marks:480
}

//1 step find percentage
//declare variable percentage return value in array function
const getPercent = (marks) =>{
    return marks/500 *100;
}

//2nd step else-if statement 

let getDivision = (percent) => {
    if (percent >= 80) {
       return("Distinction");
    } else if (percent >= 60) {
       return("First Division");
    } else if (percent >= 45) {
       return("Second Division");
    } else if (percent >= 35) {
       return("Third Division");
    } else {
       return("Failed");
    } 
}

const per = getPercent(student.marks) //arguments //call function

const division = getDivision(per) //arguments //call function

console.log("Name: " + student.name)
console.log("Marks: " + student.marks)
console.log("Percent: " + per + "%")
console.log("Division: " + division )

