/*
 if-else
 else-if
 switch-case
 loop
*/

if(expression){
//body
}
else{
    //optional
}

//declare variable products
let products = [ // array
    { //object
        //key or property : value
        name: "Product One",
        price: 100,
        discount: 10 // in percentage
    },
    {
        name: "Product Two",
        price: 200,
        discount:0
    }
]

// product one => afterDiscount :90
// product Two => afterDiscount :200

//making else optional (we can make else optional if we can declare code we wifte in else before if)
products[0].afterDiscount = products[0].price

//products variable point first index //access object poperty discount is greater thab zero
if(products[0].discount > 0){
    //body
    products[0].afterDiscount = products[0].price-products[0].price * products[0].discount / 100
}
// else{
//     //optional
//     products[0].afterDiscount = products[0].price
// }


//making else optional
products[1].afterDiscount = products[1].price
if(products[1].discount > 0){
    //body
    products[1].afterDiscount = products[1].price-products[1].price * products[1].discount / 100
}
// else{
//     //optional
//     products[1].afterDiscount = products[1].price
// }




// Nesting of if else statement
// if(){

//     if(){

//     } else{

//     }
// }
// else{
//     if(){

//     }else{
//         if(){

//         }else{}
//     }
// }