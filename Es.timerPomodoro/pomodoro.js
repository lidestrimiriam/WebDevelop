let startBtn = document.getElementById("startBtn")
let pauseBtn = document.getElementById("pauseBtn")
let resetBtn = document.getElementById("resetBtn")
let timerElem = document.getElementById("timer")

let tomato = {
    //25 min * 60 = 1500 secondi
    seconds: 1500,
    running: false,
    timer: null 
}

function showTimer(){
    //converto da secondi in minuti 
    let min = Math.floor(tomato.seconds / 60) 
    let sec = tomato.seconds % 60

    if(sec < 10){
        sec = "0" + sec
    }

    if(min < 10){
        min = "0" + min
    }
    timerElem.textContent = min + ":" + sec
}

function tick(){
    tomato.seconds--
    showTimer()
}

function start(){
    if (!tomato.running){
        //setTimeout(p1.p2) --> esegue p1 tra p2 ONESHOT
        //setInterval --> esegui parametro 1 ogni 2 millisecondi
        tomato.timer = setInterval(tick, 1000);
        tomato.running = true
    }
}

function reset(){
    tomato.seconds = 1500
    tomato.running = false
    clearInterval(tomato.timer)
    showTimer();
}

function pause(){
    tomato.seconds = 5 * 60
    clearInterval(tomato.timer)
    showTimer()
}


pauseBtn.addEventListener("click", pause)
resetBtn.addEventListener("click", reset)
startBtn.addEventListener("click", start)
