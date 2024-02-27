/*
* Suppose a Developer earns Npr. 10000000 Annually
* Calaculate:
a. Tax paid per year
b. Tax paid per month
c. Net Salary Per month
d. Net Salary Per Month

Consider the following tax Brackets:
a.If annual Salary is <= 500000, then tax = 1% of annual salary
b. For next 1000000, the tax = 15% of next 1000000
c. For next 1000000, the tax = 20% of next 1500000
d. For next 1500000, the tax = 30% of next 1500000
e. For any earning above that, the tax = 36% of all remaining income
*/

//declare variable Developer
let salary = 10000000
let tax

if (salary <= 500000) {
    tax = salary*0.01
}else{
    if(salary <= 1500000 /*conidtion*/){
        tax = (500000*0.1)+(salary-500000)*0.15
    }else{
        if(salary <= 2500000){
            tax = (500000*0.1)+(1000000*0.15)+(salary-1500000)*0.2
        }else{
            if(salary <= 4000000){
                tax = (500000*0.1)+(1000000*0.15)+(1000000*0.2)+(salary-2500000)*0.3     
            }
            else{
                tax = (500000*0.1)+(1000000*0.15)+(1000000*0.2)+(2500000*0.3)+(salary-4000000)*0.36   
            }
        }
    }
}

console.log("Tax paid per year:"+tax)
console.log("Tax paid per month:"+(tax/12))
console.log("Tax paid per year:"+(salary-tax))
console.log("Tax paid per year:"+(salary-tax)/12)