// Selects Element with 'score' ID
var scoreEl = document.querySelector("#score");
// Selects Element with 'timer' ID
var timerEl = document.querySelector("#timer");
// Selects the 'headline' ID
var headlineEl = document.querySelector("#headline");
// Selects 'banner' ID
var bannerEl = document.querySelector("#banner");
// Selects the 'questions' ID
var questionsEl = document.querySelector("#questions");
// Selects the 'answers' ID
var answersEl = document.querySelector("#answers");

bannerEl.textContent = "Coding Quiz"
var startGameBtn = document.createElement("button")
var scoreText = document.createElement("h2");
var timerCount = document.createElement("h2");
var questionsText = document.createElement("h2");


// Appends Elements to the DOM
headlineEl.appendChild(startGameBtn);
scoreEl.appendChild(scoreText);
timerEl.appendChild(timerCount);
questionsEl.appendChild(questionsText)

// 'Start Game Button' Styling and Class declarations
startGameBtn.setAttribute("class", "btn btn-primary btn-lg")
startGameBtn.style.backgroundColor = 'blueViolet';
startGameBtn.style.borderColor = 'blueViolet'
startGameBtn.textContent = "Start Game"

scoreText.textContent = "High Scores";
timerCount.textContent = "Timer: "

// Declares the times for the quiz 
var queueTime = 3;
var gameTime = 90;
var questionNum = 0; 

// Queues Count Down
// function countDown() {
//     headlineEl.textContent=""
//     startGameBtn.remove();
//     setInterval(function(event) {
//         headlineEl.textContent = `${queueTime}`
//         if (queueTime > 0){
//             queueTime--;
//         }else {
//             clearInterval(countDown);
//             headlineEl.textContent = "";
//         }

//      }, 1000)
// }


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


function game() {
    startGameBtn.remove();
    bannerEl.textContent = "Question 1"
    questionsText.textContent=" This is question 1"
}

// Selects All 'button' Elements 
var buttonEls = document.querySelectorAll("button");
// Applies classes for all 'button' elements
buttonEls.forEach(btn => btn.setAttribute("class", "btn btn-primary btn-lg"))

function startGame() {
    startTimer();
    game();
}


startGameBtn.addEventListener("click", startGame);