let timer;
let minutes = 0;
let seconds = 0;
const display = document.getElementsByClassName('display');

function stopwave(){
    var allWave=document.getElementsByClassName("wave")
    for(let i=0;i<allWave.length;i++) 
        allWave[i].style.background=" #000"
}

function startwave(){
    var allWave=document.getElementsByClassName("wave")
    for(let i=0;i<allWave.length;i++) 
        allWave[i].style.background="linear-gradient(45deg, cyan, #fff)";
}
function startTimer() {
    startwave()
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

stopwave()