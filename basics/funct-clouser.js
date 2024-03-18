//clouser = define within another function
// Async

const func1 = () => {
    //delay 3 sec
    console.log("I am on function 1")
    let result = ""

    const func2 = () => {
        //2sec
        console.log("I am  on function 2");
    }
    func2(result) // async ===> BP 2


}



const func3 = () => {
    //1sec 
    console.log("I am on function 3");
}

//***------------------------------------------------------***/

let res = func1() //callfunction //if async ===> BP 1
func3() // not async ===> Outp
//Output