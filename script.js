const display = document.querySelector('.display');
const StartBtn = document.querySelector('.Start');
const StopBtn = document.querySelector('.Stop');
const ResetBtn = document.querySelector('.Reset');


let startTime, intervalId;


//Define the start function that start time:
function Start (){
    startTime = Date.now();
    intervalId = setInterval(() => {
        const elapsedtime = Date.now() - startTime;
        const seconds = Math.floor(elapsedtime/1000);
        const mintues = Math.floor(seconds/60);
        const hours = Math.floor(mintues/60);
        
//HH:MM:SS
        const formatedTime = `${pad(hours)}: ${pad(mintues)}:
         ${pad(seconds)}`;
        display.textContent = formatedTime;

    } ,10);
}
function Stop (){
    clearInterval(intervalId);
}

function Reset (){
    clearInterval(intervalId);
    display.textContent = '00:00:00';
}

// Adding a leading 0 to  anumber its less than 10
function pad(number){
    return number < 10 ? '0' + number:number;
}

StartBtn.addEventListener('click',Start);
StopBtn.addEventListener('click', Stop);
ResetBtn.addEventListener('click',Reset);
