/**
 * 
 * Bill Calculation(Electricity)
 * Calculate total Amount to be paid,if unit consumption is :150units
 * The range is as follow :
 * a. Consider Npr.80 as Lumpsum amount for first 20 units
 * b. For the next 15 units,the rate is 4/units
 * c. For the next 20 units, the rate is 5/units
 * d. For the next 20 units, the rate is 7/units
 * e. For the next 25 units, the rate is 10/units
 * f. for any more the rate is 15 units
 * 
 * **/

//declare variable units
let units = 150
let total = 0;

// if else statement //nested if else
if (units <= 20 ) {
    total = 80
}else{
    if(units <= 35){
        total = 80+((units-20)*4)
    }else{
        if(units <= 55){
            total = 80+60+((units-35)*5)
        }else{
            if (units <= 75) {
                total = 80+60+100+((units-55)*7)
            }else{
                if (units <= 100) {
                    total = 80+60+100+140+((units-75)*10)
                }else{
                    total = 80+60+100+140+250+((units-100)*15)
                }
            }
        }
    }
}

//concatination
console.log("Total amount too be paid:"+ total);