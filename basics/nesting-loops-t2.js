/* 
* 1
* 1 2
* 1 2 3
* 1 2 3 4
* 1 2 3 4 5
* 1 2 3 4 5 6
* 1 2 3 4 5 6 7
*
* 1 2 3 4 5 6 7
* 1 2 3 4 5 6 
* 1 2 3 4 5 
* 1 2 3 4
* 1 2 3
* 1 2
* 1 
*

*1 2 3 4 5
*1       5
*1       5
*1       5
*1 2 3 4 5 

*1 2 3 4 5
*1       5
*1       5
*1       5
*1 2 3 4 5 
*1
*1
*1
*1

* P
* P R
* P R O
* P R O G
* P R O G R
* P R O G R A
* P R O G R A M
* P R O G R A M E
* P R O G R A M E R

 */

//pattern 1


//declare variable numberOfRow and define the number of rows you want in your patter
let numberOfRow = 7;

for (let i = 1; i <= numberOfRow; i++) {
    let row ='';  //Variable to store each row
    
    for (let j = 1; j <= i; j++) {   
        row = row + j + ''; //Concationcation Add the current number and a space to the row
    }
    console.log(row);
}
console.log("");

//pattern 2

//Outer loop to iterate over rows in reverse order
for (let i = numberOfRow ;i >= 1; i--) {
    let rowReverse =''; //Variable to store each row

    //Inner loop to generate number for each row
    for (let j = 1; j <= i; j++) {
        rowReverse += j + '';        
    }
    console.log(rowReverse)
}









//patter 3
for (let i = 1; i <= 5; i++) { 
    let toPrint = ""
    for (let j = 0; j <= 5; j++) {
        if (i === 1 || i === 5) {
            toPrint += j+"    ";//concatination
        }else{
            if (j === 1 || j === 5) {
                toPrint += j+"     ";
            } else {
                toPrint += "      "
            }
        }
    }

    console.log(toPrint) //12345
}