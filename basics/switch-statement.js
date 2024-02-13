// nesting operation
let act = "add" //add, view, edit, delete
if(act === 'add'){
    //add operation
} else{
    if(act === 'edit'){
        //edit opertaion
    }
    else{
        if(act === 'view'){
            //view operation
        }else{
            //delete operation
        }
    }
}

// else if operation

if(act === 'add'){
    //add operation
}else if(act === 'edit'){
    //edit operation
}else if(act === 'view'){
    //edit opertaion
}else{
    //delete operation
}

//switch operation (=== use in filter/search)

switch(act){
    //case
    case "add":
        //add operation
        break; //exit
    case "edit":
        //edit operation
        break;
    case "view":
        //view operation
        break;
    default:
        //any operation
        break; //optional
}