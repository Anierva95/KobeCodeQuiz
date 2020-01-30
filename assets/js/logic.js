// Constructor for questions
var Question = function(question, answer, choices) {
  this.question = question;
  this.answer = answer;
  this.choices = choices;
}

// Creating Kobe Question Objects
var Kobe1 = new Question('Where was Kobe born?', 'Philly', ['Philly','New York','Kentucky','Arizona']);
var Kobe2 = new Question('What was the record Kobe Bryant set at MSG?', '62 Points', ['18 Assists','70 Points','62 Points',' 58 points, no turnovers']);
var Kobe3 = new Question('What did Kobe accomplish on his last NBA game?', '60 points', ['60 points','20 Assists','43 Points','3 Buzzer Beaters']);
var Kobe4 = new Question('What year was Kobe born?', '1978', ['2001','1942','1981','1978']);
var Kobe5 = new Question('Which NBA team draft Kobe Bryant?', 'Charlotte Hornets', ['LA Lakers','NY Knicks','Charlotte Hornets','Orland Magic']);
var Kobe6 = new Question('How many All-Star appearances has Kobe had in his Career?', '4', ['2','5','4','3']);
var Kobe7 = new Question('How tall was Kobe?', '6 foot 6 inches', ['6 foot 10 inches','6 foot 6 inches','6 foot 9 inches','7 feet']);
var Kobe8 = new Question('How many Gold Medals has Kobe won?', '2', ['1','3','2','4']);
var Kobe9 = new Question('How many championships does Kobe have under his belt?', '5', ['3','1','2','5']);
var Kobe10 = new Question('What year was Kobe traded to the Lakers?', '1996', ['1992','1989','1996','1900']);



// Storying Kobe Questions in Array
var questions = [Kobe1, Kobe2, Kobe3, Kobe4, Kobe5, Kobe6, Kobe7, Kobe8, Kobe9, Kobe10];

// variables to keep track of quiz state
var time = 24;
var currentQuestionIndex = 0;
var timerId;
var score = 0;

// Grabbing document elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var currentQues = document.getElementById("questions");
var correct = document.getElementById("correct");
var end = document.getElementById('end-screen');
var congratz = document.getElementById('congrats-container');
var kobe = document.getElementById('kobe');

// Function to start quiz
function startQuiz() {

  // hide start screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // un-hide questions container
  questionsEl.removeAttribute("class");

  // start timer
  timerId = setInterval(clockTick, 1000);

  // show starting time
  timerEl.textContent = time;

  // call the function that gets the next question 
  getQuestion();

}

function getQuestion() {
      currentQues.textContent = questions[currentQuestionIndex].question;
      for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
      var choiceBtn = document.createElement('button');
      choiceBtn.textContent = questions[currentQuestionIndex].choices[i];
      choicesEl.appendChild(choiceBtn);
      }
}


choicesEl.addEventListener("click", function questionClick() {

  /*
    @TODO: write the rest of your function code here
  */
  if (event.target.textContent === questions[currentQuestionIndex].answer) {
    correct.textContent = "Good job!  +8 Seconds!";
    correct.setAttribute("class","show");
    correct.style.color = "green";
    currentQuestionIndex += 1;
    time += 8;
    score += 1;
  } else if (event.target.textContent !== questions[currentQuestionIndex].answer) {
    correct.textContent = "Not correct!  -8 Seconds!";
    correct.setAttribute("class","show");
    correct.style.color = "red";
    time -= 8;
  }
  // check if we've run out of questions
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    choicesEl.textContent = '';
    getQuestion();
  
}});


function quizEnd() {
  clearInterval(timerId);
  end.setAttribute("class","show");
  var congrats = document.createElement("h2");
  congrats.textContent = "Congrats! Your score is " + score + "! Please enter your initials below and submit your score!";
  congratz.append(congrats);
  currentQues.setAttribute("class","hide");
  choicesEl.setAttribute("class","hide");
  correct.setAttribute("class","hide");
  kobe.setAttribute("class","show");
}


function clockTick() {
  time--;
  timerEl.textContent = time;

  
  // end the quiz if the user runs out of time
  if (time <= 0) {
    quizEnd();
  }

}

function saveHighscore() {
initials = document.getElementById('initials').value;
localStorage.setItem(initials, score);
console.log(initials);
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

document.addEventListener('click', function() {
  console.log(event.target.textContent);
})