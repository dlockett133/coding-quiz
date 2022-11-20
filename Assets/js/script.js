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

// Declares the times for the quiz 
var queueTime = 3;
var gameTime = 90;

// Queues Count Down
function countDown() {
    headlineEL.textContent=""
    startGameBtn.remove();
    setInterval(function(event) {
        headlineEL.textContent = `${queueTime}`
        if (queueTime > 0){
            queueTime--;
        }else {
            clearInterval(countDown);
            headlineEL.textContent = "";
        }

     }, 1000)
}
// Starts Game Timer
function startTimer() {
    setInterval(function(event){
        timerCount.innerHTML = `<h2>Timer: ${gameTime}<h2>`
        if (gameTime > 0) {
            gameTime--;
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

function startGame() {
    countDown();
}

// startGame();
