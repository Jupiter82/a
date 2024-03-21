// const function2 = () => {

//     console.log("I am inside function2")
// }

// // function as a parameter or argument of another function is called callback function
// const function1 = (cb) => {
//     cb()
// }

// const function3 = (cb) => {
//     cb()
// }

// let response = function1(function2)


// Time releated events
//setTimeout
    //= executes only after specified 
// setInterval
    // exectues on regular interval
// clearInterval
    // stops the execution of setInterval

const callOnce = () => {
    console.log("I am only once executed")
}
console.log("First Line")
// setTimeout(callOnce, 1000)

setInterval(callOnce,1000) //repeat every second
console.log("Last Line")


