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
        price:100
    },
    {
        name:"Item two",
        price:200
    }
]
//declare taxAfterPrice // acces i index of array // acces price property 
let taxAfterPrice = calculation[0].price + calculation[0].price *(13/100)
calculation[0].taxAfterPrice = taxAfterPrice
console.log(calculation[0].taxAfterPrice)