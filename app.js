var min= 0;
var sec = 0;
var mili = 0;
var minHeading =document.getElementById('min')
var secHeading =document.getElementById('sec')
var miliHeading =document.getElementById('mili')
var btn = document.getElementById('start');
var interval;

function timer(){
    mili++;
    miliHeading.innerHTML = mili;
    if(mili >= 100){
        sec++
        secHeading.innerHTML = sec;
        mili = 0
        
    }
    else if(sec == 60){
        min++;
        sec = 0;
        minHeading.innerHTML  = min;
    }
}
function start(){
    interval = setInterval(timer,10);
    btn.disabled = true;
    
}
function stop(){
    clearInterval(interval)
    btn.disabled = false;
    
}

function reset(){
    min = 0;
    sec = 0;
    mili = 0;
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    miliHeading.innerHTML = mili
    clearInterval(interval)
}
