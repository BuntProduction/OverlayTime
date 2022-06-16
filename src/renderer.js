var displayHours = document.getElementById("hours");
var displayMinutes = document.getElementById("minutes");
var displaySeconds = document.getElementById("seconds");
const CLOSE_BTN = document.getElementById("close");
const body = document.getElementById("body");
var currentTime = new Date();

CLOSE_BTN.addEventListener("click", () => {
    api.close();
});
setInterval( UpdateStats, 1000)

async function UpdateStats (){
    var currentTime = new Date();
    const usage = await api.getCurrentLoad();
    const hoursUsed = usage.currentLoad;
    const minutesUsed = usage.currentLoad;
    const secondsUsed = usage.currentLoad;

    displayHours.innerHTML = currentTime.getHours() + ":";
    displayMinutes.innerHTML = currentTime.getMinutes() + ":";
    displaySeconds.innerHTML = currentTime.getSeconds() + "";
    
}