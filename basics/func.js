const numbs = [1,2,3,4,5,6,7,8,9]

//function too sum all the nubers in an array

const functionAdd = (numbs) => {
    let sum = 0

    // const caculate = () => {
        // numbs.map(calculate)
    // }p
let response = numbs.map((value)=>{
    sum += value
    return sum
    //return expect
})
console.log(response)

    // for (let num of numbs) {
    //     sum += num;
    // }
    return sum;
}

let response  = functionAdd(numbs);
console.log(response);