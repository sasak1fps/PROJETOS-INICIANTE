const time = document.getElementById('timediv');
const btns = document.getElementById('btnstart');
const btnp = document.getElementById('btnpause');
const btnr = document.getElementById('btnreset');

let = starttime= 0;
let = elapsedtime= 0;
let = currenttime= 0;
let = paused = true;
let  intervalId;
let hrs = 0;
let min = 0;
let sec = 0
;
btns.addEventListener('click' , () =>{
    if(paused){
        paused = false;
        starttime = Date.now() - elapsedtime;
        intervalId = setInterval(updateTime,75)
    }
})

btnp.addEventListener('click' , () =>{
    if(!paused)
        paused = true
        elapsedtime = Date.now() - starttime 
        clearInterval(intervalId)
})

btnr.addEventListener('click' , () =>{
    paused = true
    clearInterval(intervalId)
    starttime = 0
    elapsedtime = 0
    currenttime = 0
    hrs = 0;
    min = 0;
    sec = 0
    time.textContent = '00:00:00'
})

function updateTime(){
    elapsedtime = Date.now() - starttime

    sec = Math.floor((elapsedtime / 1000) % 60)
    min = Math.floor((elapsedtime /( 1000 * 60 )) % 60)
    hrs = Math.floor((elapsedtime /( 1000 * 60 * 60 )) % 60)

    sec = pad(sec)
    min = pad(min)
    hrs = pad(hrs)

    time.textContent = `${hrs}:${min}:${sec}`
    
    function pad(unit){
        return (("0") + unit ).length > 2 ? unit : "0" + unit;
        
    }

}