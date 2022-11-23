// Below are all of the element selectors
// Selects Element with 'score' ID
var highScoreEl = document.querySelector("#highScore");
// Selects Element with 'timer' ID
var timerEl = document.querySelector("#timer");
// Selects the 'headline' ID
var headlineEl = document.querySelector("#headline");
// Selects 'banner' ID
var bannerEl = document.querySelector("#banner");
// Selects 'score' ID
var scoreText = document.querySelector("#score");
// Selects 'input' ID
var submitScore = document.querySelector("#input");
// Selects 'list' ID
var scoreList = document.querySelector("#list");
// Selects the 'questions' ID
var questionsEl = document.querySelector("#questions");
// Selects the 'answers' ID
var answersEl = document.querySelector("#answers");
// Above are all of the element selectors

var startGameBtn = document.createElement("button")
var highScoreText = document.createElement("h2");
var timerCount = document.createElement("p");
var questionsText = document.createElement("h2");
var saveScoreBtn = document.createElement("button");
var saveScoreForm = document.createElement("form");
var submitBtn = document.createElement("button");

// Adds text to the 'banner' id element
bannerEl.textContent = "JavaScript Coding Quiz"
// Adds text to the 'timer' id element
timerCount.textContent = "Timer: 90"

// Below are all of the elements that are initially appeneded to DOM when page is loaded
headlineEl.appendChild(startGameBtn);
timerEl.appendChild(timerCount);
questionsEl.appendChild(questionsText)

// 'Start Game Button' Element Styling and Class declarations
startGameBtn.setAttribute("class", "btn btn-primary btn-lg")
startGameBtn.setAttribute('style', 'background: blueViolet; border-color: blueViolet')
startGameBtn.textContent = "Start Game"

// 'Save Score Button' Element Styling and Class declarations
saveScoreBtn.setAttribute("class", "btn btn-primary btn-lg")
saveScoreBtn.setAttribute('style', 'background: blueViolet; border-color: blueViolet')
saveScoreBtn.textContent = "Save Score";

// 'Submit Button' Element Styling and Class declarations
submitBtn.setAttribute("class", "btn btn-primary")
submitBtn.setAttribute("id", "submit")
submitBtn.textContent = "Submit";

// 'Save Score Form' Element Styling and Class declarations
saveScoreForm.setAttribute('id', 'form');
saveScoreForm.innerHTML = `
<label for="initials">Initials</label>
<input type="text" id="initials" placeholder="Enter your initials" maxlength="3">`

// Declares the timer value for the quiz 
var gameTime = 90;
// Keeps count of the question the user is on 
var questionNum = 1; 
// Restricts the number of multiple choice answers to 4
const amount = 4;
// Keeps count of the user's score
var score = 0;

// These variables below store each question
var question1 = "Javascript is an _______ language?";
var question2 = "Which of the following methods is used to access HTML elements using Javascript?";
var question3 = "Which of the following methods can be used to display data in some form using Javascript?";
var question4 = "How can a datatype be declared to be a constant type?";

// Stores each multiple choice answers in seperate arrays based off the question they are assigned to
var answerChoices1 = ['Object-Oriented','Object-Based','Procedural','None of the above']; // Correct answer [0]
var answerChoices2 = ['getElementById()','getElementsByClassName()','Both A and B','None of the above']; // Correct Answers [2]
var answerChoices3 = ['document.write()','console.log()','window.alert()','All of the above']; // Correct Answers [3]
var answerChoices4 = ['const','var','let','constant']; // Correct Answers [0]

// Starts Game Timer countdown
function startTimer() {
    var timer = setInterval(function(event){
        timerCount.textContent = `Timer: ${gameTime}`
        if (gameTime > 0) {
            gameTime--;
        } else {
            gameOver();
            clearInterval(timer);
        }
    }, 1000)
}

// Starts game by generating the questions and answers
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
    
     //  Generates each question and its mulitple choice answers based of the value of the 'questionNum' (Question number) variable
     if(questionNum === 1) {
        // Generates the 'question number' the user is on
        bannerEl.textContent = `Question ${questionNum}`
        // Generates the question and multiple choice answers
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
        // If ALL the questions are answered, then the 'gameOVer' function is invoked
        gameOver();
    }
}

// This function is invoked if the answer choice is correct
// It increments the questionNum variable and adds additional value to score variable
// Invokes the game function to transition to the next question
function correct() {
    if(questionNum <= 4){
        answersEl.innerHTML=""
        questionNum++;
        score+=100;
        game();
    }
}

// This function is invoked if the answer choice is incorrect
// It increments the 'questionNum' variable and decrease the game time by 15 sec
// Invokes the game function to transition to the next question
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

// Invokes the 'gameOver' function
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

// This function promps user to save their score and initials
function saveScore () {
    saveScoreBtn.remove();
    bannerEl.textContent = "Scores"
    submitScore.appendChild(saveScoreForm);
    saveScoreForm.appendChild(submitBtn);
}

// This function appends the user's submission to the 'list' element
function listScore () {
    // Gets the value (initials) of the form , and converts text to all uppercase chars
    var input = document.querySelector("#initials").value.toUpperCase();
    // Checks if the user left the form blank
    if (input === ''){

        alert(`Please Submit Initials`);
       
    }
     // Checks if the user used numeric chars
    else if (/[0-9]/.test(input) === true)
    {

        alert(`Please only use standard alphabets`);

    }
    // Checks if the user used special chars
    else if (/[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g.test(input)=== true)
    {

        alert(`Please only use standard alphabets`);

    }
     else {
        // Creates a list element for each submitted form
        var listEl = document.createElement("li");
        
        // Sets the text(value) of the todo item(li)
        var txt = document.createTextNode(`Name: ${input} \| Score: ${score}`);
        
        // We append the text(value) to the created list tag(li)
        listEl.appendChild(txt);

        // We append the list element to the list id element
        scoreList.appendChild(listEl);
    }
}

// Invoke this function to start the quiz
function startGame() {
    startTimer();
    game();
}

startGameBtn.addEventListener("click", startGame);

saveScoreBtn.addEventListener("click",saveScore);

submitBtn.addEventListener('click', listScore);

// Prevents the submition of the form from refreshing the browser
saveScoreForm.addEventListener('submit', e => e.preventDefault());
