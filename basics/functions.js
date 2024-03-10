//built in
//custom

// ANything ad an input
// Anything as an output

//Function Definition
function addNumber(a,b){//parameter
    //function body //scope
    let c = a + b
    return c //optional
    // node execute
}

//

const result = addNumber(10,20) //arguments //Function call
console.log(result) //30


function name(params) {
    
}

const resulst = addNumber 


// another //assigning general function in variable

const addNumber1 = function(a,b){
        //function body //scope
        let c = a + b
        return c //optional
        // node execute

}

//Arrow denotion

const addNumber2 = (a,b) =>{
    let c = a + b;
    return c
}

function name(params) {
    
}

/**
 * function <name>(<params>,........){
 * //body
 * <return> //optional
 * }
 * 
 * [let, var, const] <name> = function(<params,................){
 * //body
 * <return>
 * }
 * 
 * [let, var, const] <name> = (<params,............>) =>{
 * //body
 * <return>
 * }
 */

//object 
//attaching function with object
//prototype based object
const user ={//object
    //key or property : value
    name: "",
    // function declaration getName
    getName: function (){
        console.log("I am inside getName");
    },
    addNumber: function (a,b) {
        let c = a + b
        return c;
    }

}

user.getName()

