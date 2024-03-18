//clouser
// Async

const func1 = () => {
    //delay 3 sec
    console.log("I am on function 1");
}

const func2 = () => {
    //2sec
    console.log("I am  on function 2");
}

const func3 = () => {
    //1sec 
    console.log("I am on function 3");
}

//***------------------------------------------------------***/

func1() //callfunction //if async ===> BP 1
func2() // async ===> BP 2
func3() // not async ===> Outp
//Output