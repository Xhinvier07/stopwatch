
//timer variables
const min = document.getElementById('minutes');
const sec = document.getElementById('seconds');
const milS = document.getElementById('milliseconds');

//buttons
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

//lap
const lap = document.getElementById('lap-list');

//stopwatch variables

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
pause.addEventListener('click', pauseTimer);
reset.addEventListener('click', resetTimer);

function startTimer() {
    interval = setInterval(updateTimer, 10);
    start.disabled = true;
}

function stopTimer() {
    clearInterval(interval);
    addToLap();
    resetTimerData();
    start.disabled = false;


}

function pauseTimer() {
    clearInterval(interval);
    start.disabled = false;

}

function resetTimer() {
    clearInterval(interval);
    resetTimerData();
    start.disabled = false;
    lap.innerHTML = '';
}


function updateTimer() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }
   
    displayTimer();
}   

function displayTimer() {
    milS.textContent = padTime(milliseconds);
    sec.textContent = padTime(seconds);
    min.textContent = padTime(minutes);

}

function padTime(time){
    return time.toString().padStart(2, '0');
}


function resetTimerData() {
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    displayTimer();
}

function addToLap() {
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
    const li = document.createElement('li');
    li.innerHTML=`<span>Lap ${lap.childElementCount + 1}: ${lapTime} </span>` ;
    lap.appendChild(li);


}




