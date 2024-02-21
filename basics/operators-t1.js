// array
// student
//{name,email,marksobt,}
//[student,student]

//percentage,500

//declare variable students
let students =[//array
    {//object
        //key or property:value
        name:"Students One",
        email:"one@student",
        markObt:123
    },
    {
        name:"Students Two",
        email:"two@student",
        markObt:234
    }
]

//declare variable first_per for percentage of student
                //student point first index // .0 index .markObt key
let first_per = students[0].markObt/500*100
let second_per = students[1].markObt/500*100


students[0].percent = first_per.toFixed(3) //new key percent
students[1].percent = second_per.toFixed(3)

console.log(students) // [{name:"",email:"",markObt:123,percent:}]


// for print
// print like Name: Student One , Email:one@student,Marks:100,Percentage:20%
// using concatination// students[0](student point index zero).name(object key or property)(. = dot notation is used too access object properties)
console.log("Name: "+students[0].name+", Email: "+ students[0].email+",Marks:"+ students[0].markObt+ ", Percentage: "+ students[0].percent+"%")
console.log("Name: "+students[1].name+", Email: "+ students[1].email+",Marks:"+ students[1].markObt+ ", Percentage: "+ students[1].percent+"%")