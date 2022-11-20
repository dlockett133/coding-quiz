// Selects Element with 'score' ID
var scoreEl = document.querySelector("#score");
// Selects Element with 'timer' ID
var timerEl = document.querySelector("#timer");
// Selects the 'headline' ID
var headlineEL = document.querySelector("#headline");
// Selects the 'questions' ID
var questionsEL = document.querySelector("#questions");


// var startGameText = document.createElement("h1");
headlineEL.innerHTML = "<h1>Coding Quiz<h1>"
var startGameBtn = document.createElement("button")
var scoreText = document.createElement("h2");
var timerCount = document.createElement("h2");

// Appends Elements to the DOM
headlineEL.appendChild(startGameBtn);
scoreEl.appendChild(scoreText);
timerEl.appendChild(timerCount);

// 'Start Game Button' Styling and Class declarations
// startGameBtn.setAttribute("class", "btn btn-primary btn-lg")
startGameBtn.style.backgroundColor = 'blueViolet';
startGameBtn.style.borderColor = 'blueViolet'
startGameBtn.textContent = "Start Game"

scoreText.textContent = "High Scores";
timerCount.textContent = "Timer: "

// Declares the time for the quiz 
var count = 90;

// Queues Count Down

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


// Selects All 'button' Elements 
var buttonELs = document.querySelectorAll("button");
// Applies classes for all 'button' elements
buttonELs.forEach(btn => btn.setAttribute("class", "btn btn-primary btn-lg"))

startGameBtn.addEventListener('click', function() {
    
    startTimer();
})