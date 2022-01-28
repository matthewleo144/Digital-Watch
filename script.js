const stopwatchTag = document.getElementsByClassName("stopwatch")[0];
const millisecTag = document.getElementsByClassName("millisec")[0];
const startbuttomTag = document.getElementsByClassName("startbuttom")[0];
const pausebuttomTag = document.getElementsByClassName("pausebuttom")[0];
const continuebuttomTag = document.getElementsByClassName("continuebuttom")[0];
const restartbuttomTag = document.getElementsByClassName("restartbuttom")[0];

let seconds = 0, 
    minutes = 0, 
    hours = 0;
    secondss = 0;
const startTime = () => {
    secondss += 4
    if(secondss===1000){secondss=0; seconds+=1;
    if(seconds===60){seconds = 0; minutes += 1;
    if(minutes===60){minutes = 0; hours +=1;}}}

    const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds ;
    const minutesText = minutes < 10 ? "0" + minutes.toString() : minutes ;
    const hoursText = hours < 10 ? "0" + hours.toString() : hours ;
    stopwatchTag.textContent = hoursText + ":" + minutesText + ":" + secondsText 
    const secondssText = secondss < 100 ? "0" + secondss.toString() : secondss;
    millisecTag.textContent = secondssText 
};
let intervalID;

startbuttomTag.addEventListener("click", () => {
    intervalID = setInterval(startTime, 1);
});

pausebuttomTag.addEventListener("click", () => {
    clearInterval(intervalID);

});
continuebuttomTag.addEventListener("click", () => {
    clearInterval(intervalID);
    intervalID = setInterval(startTime, 1);

});

restartbuttomTag.addEventListener("click", () => {
    clearInterval(intervalID);
    seconds = 0, minutes = 0, hours = 0, secondss=0;
    intervalID = setInterval(startTime, 1);
});