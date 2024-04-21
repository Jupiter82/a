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

funct1()
.then((res1)=> {
    console.log(res1)
    return funct2
})
.then((res2) => {
    console.log(res2)
    return funct3
})
.then((res3) => {
    console.log(res3)
})
.catch((rej) => {
    console.log(rej)
})

// funct1()
//   .then((resData) => {
//     console.log(resData);
//     funct2(resData)
    
//       .then((resData2) => {
//         console.log(resData2);

//         funct3(resData2)
//           .then((resData3) => {
//             console.log(resData3);
//           })
//           .catch((rejData) => {
//             console.log(rejData);
//           });
//       })
//       .catch((rejData) => {
//         console.log(rejData);
//       });
//   })
//   .catch((rejData) => {
//     console.log(rejData);
//   });

//fun1, fun2, fun3 => Promise
// res,rej,res
// Dependency

// independent Promise ===> handle at once
// Import operation
// CSV (Excel) => 100 row
// DB => 100 Insert query
// 100 Promise


// 100 => res => only handle

// let all = Promise.all([funct1(),funct2(),funct3()])
let all = Promise.allSettled([funct1(),funct2(),funct3()])
all.then((res)=>{
    console.log(res)
})
// .catch((rej) => {
//     console.log(rej)
// })

let promRes = Promise.resolve("")
promRes.then()

let promRej = Promise.reject("")
promRej.catch()



//func1,func2,func3

//Admin Panel
// You need to be a logged in admin user

// a logged in user
// Your role should be admin

// Admin Access


let userPromise = login();
userPromise
  .then((user) => {
    //role Check
    return roleCheck()
  })
  .then((userAuth) => {
    //
    adminPanel()
    return adminPanel()
  })
  .then((access) => {
    // access code
  })

  .catch();


