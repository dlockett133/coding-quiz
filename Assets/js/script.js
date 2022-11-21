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
startGameBtn.setAttribute('style', 'background: blueViolet; border-color: blueViolet')
startGameBtn.textContent = "Start Game"

scoreText.textContent = "High Scores";
timerCount.textContent = "Timer: 90"

// Declares the times for the quiz 
var queueTime = 3;
var gameTime = 90;
var questionNum = 1; 

var question1 = "Javascript is an _______ language?";
var question2 = "Which of the following methods is used to access HTML elements using Javascript?";
var question3 = "Which of the following methods can be used to display data in some form using Javascript?";
var question4 = "How can a datatype be declared to be a constant type?";

const multipleChoice = 4;

// Correct Answers [0], [2], [3], [0]
var answerChoices1 = ['Object-Oriented','Object-Based','Procedural','None of the above'];
var answerChoices2 = ['getElementById()','getElementsByClassName()','Both A and B','None of the above'];
var answerChoices3 = ['document.write()','console.log()','window.alert()','All of the above'];
var answerChoices4 = ['const','var','let','constant'];
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
        timerCount.innerHTML = `<h2>Timer: ${gameTime}</h2>`
        if (gameTime > 0) {
            gameTime--;
        } else {
            clearInterval(startTimer);
            timerCount.textContent = "0";
        }
    }, 1000)
}


function game() {
    startGameBtn.remove();
    // var answerBtn = document.createElement("button");
    
    if(questionNum === 1) {
        bannerEl.textContent = `Question ${questionNum}`
        questionsText.textContent=`${question1}`
        answerChoices1.forEach(x => answersEl.innerHTML+= `<button>${x}</button>`)
    }
    if(questionNum === 2) {
        bannerEl.textContent = `Question ${questionNum}`
        questionsText.textContent=`${question2}`
        answerChoices2.forEach(x => answersEl.innerHTML+= `<button>${x}</button>`)

    }
    if(questionNum === 3) {
        bannerEl.textContent = `Question ${questionNum}`
        questionsText.textContent=`${question3}`
        answerChoices3.forEach(x => answersEl.innerHTML+= `<button>${x}</button>`)

    }
    if(questionNum === 4) {
        bannerEl.textContent = `Question ${questionNum}`
        questionsText.textContent=`${question4}`
        answerChoices4.forEach(x => answersEl.innerHTML+= `<button>${x}</button>`)

    }
    // Selects All 'button' Elements 
    var buttonEls = document.querySelectorAll("button");
    // Sets styling for all 'answers' id Elements
    buttonEls.forEach(btn => btn.setAttribute("class", "btn btn-primary"))
    buttonEls.forEach(btn => btn.setAttribute('style', 'width: 300px; margin: 3px; background: blueViolet; border-color: blueViolet'))
}

// // Selects All 'button' Elements 
// var buttonEls = document.querySelectorAll("button");
// // Sets styling for all 'answers' id Elements
// buttonEls.forEach(btn => btn.setAttribute("class", "btn btn-primary btn-lg"))
// buttonEls.forEach(btn => btn.setAttribute('style', 'background: blueViolet; border-color: blueViolet'))

function startGame(event) {
    startTimer();
    event.preventDefault()
    game();
}


startGameBtn.addEventListener("click", startGame);