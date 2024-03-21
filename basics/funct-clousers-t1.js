// Create a function called calculate volume which accepts 3 args leng,width, height
// create another function with in the same to calcuate area
// Return volume after calculating area and print both
// Formula : v = l * w * h
// Area = l * w * h
//defining a function with params
//declare variable = params //arrow function
const calculateVolume = (l,w,h) => {
    //volume, area
    // l,w,h
    //clouser function inside function using its varable and params(parameters)
    const calculateArea = () =>{
            return (l * w)
    }
        const area = calculateArea() //function call
        const vol = area * h

        return [area,vol]
    }


   let result = calculateVolume(2,3,4) // Calling the calculateVolume function
   console.log("Area : ",result[0])
   console.log("Volume: ", result[1])



