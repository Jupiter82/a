const functionName = (params) => {
    //SetTimeout()
    // logic
    // DB opertaion
        // connect ====> select =====> Query =====> Data fetch
        // return promise
}

// A promise is an object of js which contains 3 stages
//Pending (Operation)
// Fullfilled/Reject
// Settlement

//login implement 
// username, password
const myPromise = new Promise((resolve,reject) => {
    // pending logic
    // DB query
    // successfull,unsuuccessfull
    let success = true ; //false
    if(success){
        //
        resolve("I am fulfilled")
    }else{
        //fail
        reject("I am reject")
    }
})

const login = (username,password) => {
    return new Promise((res,rej) => {
        //handle
        //res()
        //rej()
    })
}
//handle promise
// let result =  login ("","")
// result.then().catch()

login("","").then().catch()

myPromise
    .then((resolveData) => {
        console.log(resolveData)
    })
    .catch((rejectData) => {
        console.log(rejectData)
    })


console.log(myPromise)