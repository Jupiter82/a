// let fullName = "string"
// console.log(fullName)
// fullName = 123
// console.log(fullName)

// var x = 10;
// console.log(x)
// {
//     var x = 20;
//     console.log(x)
// }
// console.log(x)

// let y = 10;
// console.log(y)
// {
//     let y = 20;
//     console.log(y)
// }
// console.log(y)




// scopes
//1.globel
//2.block
//3.local/functional


let a = 10;
var b = 20;
console.log(a);
console.log(b);
{
    //block
    let a = 5;
    var b = 2;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);
