var myTimer;
var audio = new Audio('audio/beep.mp3');
var timer = document.getElementById("userInput");
console.log(timer)

function stop() {
    clearInterval(myTimer);
}



function clock() {
    myTimer = setInterval(myClock, 1000);
    document.getElementById("timerr").innerHTML = timer.value;
    countDownSeconds = timer.value;
    //var c = 3610; //Initially set to 1 hour


    function myClock() {
        countDownSeconds--
        var seconds = countDownSeconds % 60; // Seconds that cannot be written in minutes
        var secondsInMinutes = (countDownSeconds - seconds) / 60; // Gives the seconds that COULD be given in minutes
        var minutes = secondsInMinutes % 60; // Minutes that cannot be written in hours
        var hours = (secondsInMinutes - minutes) / 60;
        // Now in hours, minutes and seconds, you have the time you need.
        console.clear();
        document.getElementById("timerr").innerHTML = hours + ":" + minutes + ":" + seconds;
        //console.log(hours + ":" + minutes + ":" + seconds)
        if (countDownSeconds == 0 || countDownSeconds < 0) {
            clearInterval(myTimer);
            audio.play();
            document.getElementById("timerr").innerHTML = "Timer Expired !!!";
        }
    }

}