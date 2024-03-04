//Create an array of objects.
// The object should coontain name, price,
// Consider tax is of 13%, find the price after tax,
// the price calculation should be made in:
// price = price + price * tax
// Display the value after calculation 

//declare variable of calculation
let calculation = [//array
    {//object
        //key or property:value
        name:"Item one",
        price:1000
    },
    {
        name:"Item two",
        price:2000
    }
]
//declare taxAfterPrice // acces i index of array // acces price property 
// let taxAfterPrice = calculation[0].price + calculation[0].price *(13/100)
// calculation[0].taxAfterPrice = taxAfterPrice
// console.log(calculation[0].taxAfterPrice)

// i=0;
// do {
//     //body
//     let taxAfterPrice = calculation[i].price + calculation[i].price *(13/100)
//     calculation[i].taxAfterPrice = taxAfterPrice
//     console.log(calculation[i].taxAfterPrice)
//     i++
// } while (i < calculation.length);



// i = 0

// while (i < calculation.length) {
//     let taxAfterPrice = calculation[i].price + calculation[i].price *(13/100)
//     calculation[i].taxAfterPrice = taxAfterPrice
//     console.log(calculation[i].taxAfterPrice)
//     i++
// }















for (let i = 0; i < calculation.length; i++) {
    let taxAfterPrice = calculation[i].price + calculation[i].price *(13/100)
    calculation[i].taxAfterPrice = taxAfterPrice
    console.log(calculation[i].taxAfterPrice)
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}