// Selects Element with 'score' ID
var scoreEl = document.querySelector("#score");
// Selects Element with 'timer' ID
var timerEl = document.querySelector("#timer");


var scoreText = document.createElement("h2");
var timerCount = document.createElement("h2")


scoreText.textContent = "High Scores";
timerCount.textContent = "90"

// Appends Elements to the DOM
scoreEl.appendChild(scoreText)
timerEl.appendChild(timerCount)