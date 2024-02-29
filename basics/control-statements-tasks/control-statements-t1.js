let marksObt = 31;
let per = marksObt/5;

if(per >= 80){
    console.log("Distinction")
}
else{
    if(per >= 60){
        console.log("First Division")
    }
    else{
        if(per >= 45){
            console.log("Second Division")
        }
        else{
            if(per >= 32){
                console.log("Third Division")
            }
            else{
                console.log("Sorry you have failed")
            }
             
        }

    }

}

if(per >= 80){
    console.log("Distinction")
}else if(per >= 60){
    console.log("First division")
}else if(per >= 45){
    console.log("Second division")
}else if(per >= 32){
    console.log("Third division")
}else{
    console.log("Sorry you hvae failed")
}