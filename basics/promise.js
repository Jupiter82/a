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
        let success = true;
        if (success) {
            res()
        }else{
            rej()
        }
        //res()
        //rej()
    })
}
//handle promise
// let result =  login ("","")
// result.then().catch()

login("","").then((resData) =>{

}).catch((rejData) => {})

myPromise
    .then((resolveData) => {
        console.log(resolveData)
    })
    .catch((rejectData) => {
        console.log(rejectData)
    })


console.log(myPromise)


const loginCb = (username,password,cb) =>
{
    //login logic
    let success = true;
    if (success) {
        cb(null, "response")
    }else{
        cb("error")
    }
}

loginCb("userna",'pwd',
// callback start
(rejData,resData)=> { 
    //
    if(resData){
        //login success
    }else{
        //login failed
    }
} 
// callback end
)

//package
//password = "admin123" => encrypted => alog => bcrypt
//bcrypt
//hash() //async, 
    // hash().then().catch()
    //hash...., (enctext) => {
        //logic
    //}


// fs => 
// write => (file,data,(err,bytes) => {})
// (req,res,cb) => {
// cb(error, success)
//}

// mangodbDrive
// .connect ("url,{},cb(error,connection) => {} )
// .listen(port,host,(error) => {})

// .get((req,res,next) => {next()})
