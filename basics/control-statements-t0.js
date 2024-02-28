//consider a variable called day
//Print using if-else switch case and else-if 
// day ===> Friday ===> Weekend
// day ===> Saturday or Sunday ===> Holiday
// day ===> Other ===> Weekday

let day ="Wednesday"


//else-if
if(day === "Sunday" || day === 'Saturday'){
    console.log("Holiday");
}else if (day ==='Friday') {
    console.log("Weekend");
}else{
    console.log("Weekday");
}

//if-else(nested)
if(day === "Sunday" || day === 'Saturday' ){
    console.log("Holiday")
}
else{
    if(day === 'Friday'){
        console.log("Weekend")
    }
    else{
        console.log("Weekday")
    }
}


//switch
switch (day) {
    case "Sunday":
    case "Saturday":
        console.log("Holiday")
        break;
    case "Friday":
        console.log("Weekend")
        break;
    default:
        console.log("Weekday")
        break;
}