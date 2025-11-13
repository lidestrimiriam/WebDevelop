let startBtn = document.getElementById("startBtn")
let pauseBtn = document.getElementById("pauseBtn")
let resetBtn = document.getElementById("resetBtn")
let timerElem = document.getElementById("timer")

let tomato = {
    //25 min * 60 = 1500 secondi
    seconds: 1500,
    running: false 
}

function showTimer(){
    //converto da secondi in minuti 
    let mins = Math.floor(tomato.seconds / 60) 
    let sec = tomato.seconds % 60

    timerElem.textContent = mins + ":" + sec
}

function tick(){
    tomato.seconds--
    showTimer()
}

function start(){
    if (!tomato.running){
        setInterval(tick, 1000);
        tomato.running = true
    }
}

function reset(){
    tomato.seconds = 1500
    tomato.running = false
    showTimer();
}


resetBtn.addEventListener("click", reset)
startBtn.addEventListener("click", start)