const numbs = [1,2,3,4,5,6,7,8,9]

const getEven = (numbs) => {
    //code
    const evnArra = numbs.filter((value) => (value%2 === 0))
    // numbs.map((value)=>{
    //     if(value % 2 === 0){
    //         evnArra.push(value)
    //     }
    // })
    return evnArra
}

console.log(getEven(numbs))