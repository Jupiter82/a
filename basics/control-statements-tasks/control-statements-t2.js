//Calculate tax to be paid and salary
//suppose a software developer earns NPR. 50,00,000 per year
//the tax bracket is as follow:
//for the first 5,00,000 => 1%
// for the next 2,00,000 => 15%
// for the next 3,00,000 => 20%
//for the next 10,00,000 => 30%
//for the next 30,00,000 => 36%
// for above all         => 39%

// a. Calculate annual tax paid
// b. Print Monthly tax paid
// c. Print Annual net salary
// d. Print Monthly net salary

let salary = 5000000;
let totalTaxAmt = 0 ;

if (salary<=500000) {
    totalTaxAmt = salary * 0.01;
}else if(salary<=700000){
    totalTaxAmt =5000+ (salary-500000) * 0.15;
}else if (salary<=1000000) {
    totalTaxAmt =30750+ (salary-700000) * 0.2;
}else if (salary<=2000000) {
    totalTaxAmt = 99225+(salary-1000000) * 0.3;
}else if(salary<=5000000){
    totalTaxAmt = 329767.5+(salary-2000000) *0.36;
}else{
    totalTaxAmt =1198716.3+ (salary-5000000) *0.39;
}

console.log(totalTaxAmt);
let netSalary = salary - totalTaxAmt
console.log("Net Salary : ", netSalary)
console.log("Annual Tax Paid : ", totalTaxAmt)
console.log("Monthly Tax Paid : ", (totalTaxAmt/12))
console.log("Monthly Net Salary:", (netSalary/12))