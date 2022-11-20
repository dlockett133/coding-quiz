// Selects Element with 'score' ID
var scoreEl = document.querySelector("#score");
// Selects Element with 'timer' ID
var timerEl = document.querySelector("#timer");
// Selects the 'headline' ID
var headlineEL = document.querySelector("#headline");
// Selects the 'questions' ID
var questionsEL = document.querySelector("#questions");
// Selects All 'button' Elements 
var buttonELs = document.querySelectorAll("button");

// var startGameText = document.createElement("h1");
headlineEL.innerHTML = "<h1>Coding Quiz<h1>"
var scoreText = document.createElement("h2");
var timerCount = document.createElement("h2");

// Appends Elements to the DOM

scoreEl.appendChild(scoreText);
timerEl.appendChild(timerCount);

scoreText.textContent = "High Scores";
timerCount.textContent = "Timer: "

var count = 90;

// Starts Game Timer
function startTimer() {
    setInterval(function(event){
        timerCount.innerHTML = `<h2>Timer: ${count}<h2>`
        if (count > 0) {
            count--;
        } else {
            clearInterval(startTimer);
            timerCount.textContent = "";
        }
    }, 1000)
}

buttonELs.forEach(button => button.setAttribute("style","background: blueViolet; color: white"))