// Selects Element with 'score' ID
var scoreEl = document.querySelector("#score");
// Selects Element with 'timer' ID
var timerEl = document.querySelector("#timer");


var scoreText = document.createElement("h2");
var timerCount = document.createElement("h2")


scoreText.textContent = "High Scores";
timerCount.textContent = "90"

var timeCount = 90;

function startTimer() {
    setInterval(function(event){
        console.log(`Counting down!`)
    }, 1000)
}
// Appends Elements to the DOM
scoreEl.appendChild(scoreText)
timerEl.appendChild(timerCount)