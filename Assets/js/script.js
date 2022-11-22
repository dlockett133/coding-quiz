// Selects Element with 'score' ID
var highScoreEl = document.querySelector("#highScore");
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
var highScoreText = document.createElement("h2");
var timerCount = document.createElement("h2");
var questionsText = document.createElement("h2");
var scoreText = document.createElement("p");
var saveScoreBtn = document.createElement("button");

// Appends Elements to the DOM
headlineEl.appendChild(startGameBtn);
highScoreEl.appendChild(highScoreText);
timerEl.appendChild(timerCount);
questionsEl.appendChild(questionsText)
headlineEl.appendChild(scoreText);
// headlineEl.appendChild(saveScoreBtn);


// 'Start Game Button' Styling and Class declarations
startGameBtn.setAttribute("class", "btn btn-primary btn-lg")
startGameBtn.setAttribute('style', 'background: blueViolet; border-color: blueViolet')
startGameBtn.textContent = "Start Game"

saveScoreBtn.setAttribute("class", "btn btn-primary btn-lg")
saveScoreBtn.setAttribute('style', 'background: blueViolet; border-color: blueViolet')
saveScoreBtn.textContent = "Save Score";

scoreText.setAttribute('id', 'score');
highScoreText.textContent = "High Scores";
timerCount.textContent = "Timer: 90"

// Declares the times for the quiz 
var queueTime = 3;
var gameTime = 90;
var questionNum = 1; 
const amount = 4;
var score = 0;

var question1 = "Javascript is an _______ language?";
var question2 = "Which of the following methods is used to access HTML elements using Javascript?";
var question3 = "Which of the following methods can be used to display data in some form using Javascript?";
var question4 = "How can a datatype be declared to be a constant type?";


// Correct Answers [0], [2], [3], [0]
var answerChoices1 = ['Object-Oriented','Object-Based','Procedural','None of the above'];
var answerChoices2 = ['getElementById()','getElementsByClassName()','Both A and B','None of the above'];
var answerChoices3 = ['document.write()','console.log()','window.alert()','All of the above'];
var answerChoices4 = ['const','var','let','constant'];

// Starts Game Timer
function startTimer() {
    setInterval(function(event){
        timerCount.innerHTML = `<h2>Timer: ${gameTime}</h2>`
        if (gameTime > 0) {
            gameTime--;
        } else {
            clearInterval(startTimer);
            gameOver();
        }
    }, 1000)
}


function game() {
    startGameBtn.remove();
    for (i=0; i < amount; i++){
        answersEl.innerHTML+= `<button data-choice="${i}"></button>`
    }
    // Selects All 'button' Elements 
    var answerBtns = document.querySelectorAll("button");
     // Sets styling for all 'answers' id Elements
     answerBtns.forEach(btn => btn.setAttribute("class", "answers btn btn-primary"))
     answerBtns.forEach(btn => btn.setAttribute('style', 'width: 300px; margin: 3px; background: blueViolet; border-color: blueViolet'))
    
     if(questionNum === 1) {
        bannerEl.textContent = `Question ${questionNum}`
        questionsText.textContent=`${question1}`
        answerChoices1.forEach((x,y) => answerBtns[y].textContent = `${x}`)
        answerBtns[0].onclick = ()=> {correct(); }
        answerBtns[1].onclick = ()=> {incorrect();}
        answerBtns[2].onclick = ()=> {incorrect();}
        answerBtns[3].onclick = ()=> {incorrect();}
        
    }else if(questionNum === 2) {
        bannerEl.textContent = `Question ${questionNum}`
        questionsText.textContent=`${question2}`
        answerChoices2.forEach((x,y) => answerBtns[y].textContent = `${x}`)
        answerBtns[0].onclick = ()=> {incorrect();}
        answerBtns[1].onclick = ()=> {incorrect();}
        answerBtns[2].onclick = ()=> {correct(); }
        answerBtns[3].onclick = ()=> {incorrect();}
    }else if(questionNum === 3) {
        bannerEl.textContent = `Question ${questionNum}`
        questionsText.textContent=`${question3}`
        answerChoices3.forEach((x,y) => answerBtns[y].textContent = `${x}`)
        answerBtns[0].onclick = ()=> {incorrect();}
        answerBtns[1].onclick = ()=> {incorrect();}
        answerBtns[2].onclick = ()=> {incorrect();}
        answerBtns[3].onclick = ()=> {correct(); }

    }else if(questionNum === 4) {
        bannerEl.textContent = `Question ${questionNum}`
        questionsText.textContent=`${question4}`
        answerChoices4.forEach((x,y) => answerBtns[y].textContent = `${x}`)
        answerBtns[0].onclick = ()=> {correct(); }
        answerBtns[1].onclick = ()=> {incorrect();}
        answerBtns[2].onclick = ()=> {incorrect();}
        answerBtns[3].onclick = ()=> {incorrect();}

    }else {
        gameOver();
        // headlineEl.appendChild(saveScoreBtn);
    }
}

function correct() {
    if(questionNum <= 4){
        answersEl.innerHTML=""
        questionNum++;
        score+=100;
        game();
    }
}

function incorrect(){
    if(questionNum <= 4){
        answersEl.innerHTML=""
        var subTime = gameTime - 15;
        gameTime = subTime;
        questionNum++;
        game();
        return gameTime
    }
}

function gameOver() {
    gameTime = 0;
    bannerEl.textContent = "Game Over!"
    scoreText.textContent = `Your Score: ${score}`
    questionsText.textContent = ""
    answersEl.innerHTML=""
    timerCount.textContent = "Timer: 00";
    headlineEl.appendChild(saveScoreBtn)
    return gameTime;
    
}
function startGame(event) {
    startTimer();
    event.preventDefault()
    game();
}

// function iWasClicked

startGameBtn.addEventListener("click", startGame);

// saveScoreBtn.addEventListener("click",)



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