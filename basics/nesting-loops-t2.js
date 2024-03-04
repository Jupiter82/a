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

//patter 1
















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