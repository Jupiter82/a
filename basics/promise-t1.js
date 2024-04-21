//Create 3 function that returnpromise
// your dunction should contain flow like this
// the first line f the function body shuld be console for smething
// For eg . if you have a function abc

// const abc = () => {
//     console.log("I am on abc first")
// }
// And after the frst statement your shpuld return a promise
// you promise should contina a bollen variable
//If the variable is true, return the resolve message denoting the function
//else reject the promise denoting the 


const funct1 = () => {
    console.log("I am in Func1")
    return new Promise((res, rej) => {
        let x = true;
        if (x) {
            res("I am resolve of Func1")
        } else {
            rej("I am reject of Func1")
        }
    })
}
const funct2 = (params = null) => {
    console.log("I am in Func1")
    return new Promise((res, rej) => {
        let x = false;
        if (x) {
            res("I am resolve of Func2")
        } else {
            rej("I am reject of Func2")
        }
    })
}
const funct3 = (params = null) => {
    console.log("I am in Func3")
    return new Promise((res, rej) => {
        let x = true;
        if (x) {
            res("I am resolve of Func3")
        } else {
            rej("I am reject of Func3")
        }
    })
}

//  