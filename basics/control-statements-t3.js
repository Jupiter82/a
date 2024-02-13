//done by alok

let electricityBill;
let totalUnitsConsumed = 100;
let remaningUnit = totalUnitsConsumed;
let first = 20;
let firstRate = 80;
let nextSecond = 10;
let nextSecondRate = 5;//per unit
let nextThird = 20;
let nextThirdRate = 7;//per unit
let nextFourth = 30;
let nextFourthRate = 10;//per unit
let extrarate = 15;//per unit
// first bill less and more 20 bill static
electricityBill = firstRate;
let calUnit = 1;

if (remaningUnit >= first) {
  //remaningUnit -= first;
  remaningUnit = remaningUnit - first;
  //calUnit = nextSecond >= remaningUnit ? remaningUnit : nextSecond;
  if (nextSecond >= remaningUnit) {
    calUnit = remaningUnit;
  } else {
    calUnit = nextSecond;
  }
  //electricityBill += calUnit * nextSecondRate;
  electricityBill = electricityBill + (calUnit * nextSecondRate)
}

if (remaningUnit >= nextSecond) {
    remaningUnit -= nextSecond;
    calUnit = nextThird >= remaningUnit ? remaningUnit : nextThird;
    electricityBill += calUnit * nextThirdRate;
}

if (remaningUnit >= nextThird) {
    remaningUnit -= nextThird;
    calUnit = nextFourth >= remaningUnit ? remaningUnit : nextFourth;
    electricityBill += calUnit * nextFourthRate;
}

if (remaningUnit >= nextFourth) {
    remaningUnit -= nextFourth;
    calUnit = remaningUnit;
    electricityBill += calUnit * extrarate;
}

console.log(electricityBill);














// if(totalUnitsConsumed<=20){
//     electricityBill = 80;
//     console.log(electricityBill)
// }
// else if(totalUnitsConsumed<=30){
//     electricityBill =80+

// }