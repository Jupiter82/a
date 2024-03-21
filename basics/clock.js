//function callback

const  getClock = () => {
    
    const date = new Date()
    //Full date => 
    const hour = date.getHours()
    const minute = date.getMinutes()
    const secs = date.getSeconds()

    const clock = hour+":"+minute+":"+secs

    document.getElementById('clock').innerHTML = clock
}


let timer = setInterval(getClock,1000)

const stopTimer = () =>{
    clearInterval(timer)
}

const startTimer = () => { //arrow function
  timer = setInterval(getClock, 1000)
}