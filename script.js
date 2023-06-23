let timer;
let minutes = 0;
let seconds = 0;
const display = document.getElementsByClassName('display');
let allWave=document.getElementsByClassName("wave")
var started=false;

function stopwave(){
    started=false;
    const box=document.getElementsByClassName("timer")[0];
    for(let i=0;i<allWave.length;i++) 
    {
        allWave[i].style.background=" #000";
    }
    box.style.border="2px dashed black";
}

function startwave(){
    const box=document.getElementsByClassName("timer")[0];
    for(let i=0;i<allWave.length;i++) {
        allWave[i].style.background="linear-gradient(45deg,  rgb(231, 193, 0), cyan)";
    }
    box.style.border="2px dashed yellowgreen";
}

function startTimer() {
    if(started){
        return;
    }
    started=true;
    console.log("p")

    startwave();
    timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    display[0].innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);
}

function stopTimer() {
    stopwave();
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    display[0].innerText = `00:00`;
}

function pauseTimer() {
    stopwave();
    clearInterval(timer);
}

// stopwave()