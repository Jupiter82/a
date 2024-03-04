//declare users
let users = [//array
    {//objects
        //key or property : value
        name: "Person Name",
        education:[//array
            {//object
                level:"SLC",
                score: 400,
                percent: 80
            },
            {
                level:"+2",
                score: 320,
                percent: 65
            },
        ]
    },
    {//objects
        //key or property : value
        name: "Person Two",
        education:[
            {
                level:"SLC",
                score: 500,
                percent: 90
            },
            {
                level:"+2",
                score: 400,
                percent: 90
            },
            {
                level:"BBS",
                score: 400,
                percent: 85
            },
        ]
    }
]

//Person Name
//SLC : Score : 400, percent: 80%
//+2 : SCore: 320, Percent: 65%
//----------------------------
//Person Two
//SLC : Score : 500, percent: 90%
//+2 : Score: 400, Percent: 90%
//BBS : Score: 400, Percent: 85%
//----------------------------

let i = 0
let j = 0

//access users array 0 index // access name property of 0 index
console.log(users[i].name);
//concationation
console.log(users[i].education[j].level+" Score :"+ users[i].education[j].score+", Percent :"+ users[i].education[j].percent+ "%");
j++
console.log(users[i].education[j].level+" Score :"+ users[i].education[j].score+", Percent :"+ users[i].education[j].percent+ "%");
j++
console.log("---------------------------------------------------------------------------------------------------------------------")
i++
console.log(users[i].name);
//redeclare j = 0
j = 0
//concationation
console.log(users[i].education[j].level+" Score :"+ users[i].education[j].score+", Percent :"+ users[i].education[j].percent+ "%");
j++
console.log(users[i].education[j].level+" Score :"+ users[i].education[j].score+", Percent :"+ users[i].education[j].percent+ "%");
j++
console.log(users[i].education[j].level+" Score :"+ users[i].education[j].score+", Percent :"+ users[i].education[j].percent+ "%");
j++
console.log("---------------------------------------------------------------------------------------------------------------------")
i++


for ( i = 0; i < users.length; i++) {//user.length
    console.log(users[i].name); 
    for ( j = 0; j < users[i].education.length; j++) {//user[i]//access user indexs // acces education of index i
        console.log(users[i].education[j].level+" Score :"+ users[i].education[j].score+", Percent :"+ users[i].education[j].percent+ "%");
    }
    console.log("---------------------------------------------------------------------------------------------------------------------")
}


for (let user of users) {//value based
    //user = user[i]
    console.log(user.name)
    for (let education of user.education) {
        console.log(education.level+" Score :"+ education.score+", Percent :"+ education.percent+ "%");
    }
    console.log("---------------------------------------------------------------------------------------------------------------------")
}

for (let i in users) {//index based
    //user = user[i]
    console.log(users[i].name)
    for (let j in users[i].education) {
        console.log(users[i].education[j].level+" Score :"+ users[i].education[j].score+", Percent :"+ users[i].education[j].percent+ "%");
    }
    console.log("---------------------------------------------------------------------------------------------------------------------")
}

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

for (const iterator of object) {
    
}