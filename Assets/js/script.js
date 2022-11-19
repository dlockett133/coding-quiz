// Selects Element with 'score' ID
var scoreEl = document.querySelector("#score");
// Selects Element with 'timer' ID
var timerEl = document.querySelector("#timer");


var scoreText = document.createElement("h2");
var timerCount = document.createElement("h2")


scoreText.textContent = "High Scores";
timerCount.textContent = ""

var count = 90;

// Starts Game Timer
function startTimer() {
    setInterval(function(event){
        timerCount.textContent = count;
        if (count > 0) {
            count--;
        } else {
            clearInterval(startTimer);
            timerCount.textContent = "";
        }
    }, 1000)
}
// Appends Elements to the DOM
scoreEl.appendChild(scoreText)
timerEl.appendChild(timerCount)