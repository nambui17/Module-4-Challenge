// may be better to store variables in an object to be cleaner

var timeEl=document.querySelector("#timer");
var questionEl=document.querySelector("#questiontext");
var startBtn=document.querySelector('#start');
var choicebox=document.querySelector('#choicebox');
var q1=document.querySelector("#question-1");
var q2=document.querySelector("#question-2");
var q3=document.querySelector("#question-3");
var q4=document.querySelector("#question-4");
var endIni= document.querySelector("#initials");
var endSub= document.querySelector('#submit');
var foot= document.querySelector('#foot');
var score = 0;
var qNum =0;
var button= document.createElement("button");
var replay = document.querySelector("#replay-nd");
var highScoreList= document.querySelector("#high-score-list");
var timeLeft= 120;
var highScore= {
    high: 0,
    initials: "",
}

var questions = {
    0: "HTML is used to describe the _________ of webpages.",
    1: "What does CSS stand for?",
    2: "CSS is used for the __________ of webpages.",
    3: "JavaScript is used to create _______ webpages.",
    4: "A logical operator for the exact same value and type is:",
    5: "Indexing starts at what value in JavaScript?",
    6: "For loops contain what three parts? An iterator, a condition, and a/an ________.",
    7: "To join arrays together and return a new array which array method is used?",
    8: "What array method is used to remove the last element in the array?",
    9: "What does the DOM stand for?",
    10: "What do you need to end a function in to call it?",
    11: "An API stands for Application _______ Interface.",
    12: "The terminator key in Javascript is:",
    13: "True and False are examples of what type of data?",
    14: "Variables and function names are written in ________.",
    15: "What built-in JavaScript function is useful for debugging?",
    16: "What are common data types in javascript?",
}

var choices = {
    0: ["Structure","Presentation","Functionality", "Color"],
    1: ["Concurrent Style Source","Consecutive Space String","Cascading Style Sheet","Checking String Sheet"],
    2: ["Presentation","Structure","Functionality","Interactivity"],
    3: ["Dynamic","Colorful","Ordered","Working"],
    4: ["!=","==","||","===",],
    5: ["0","1","2","-1"],
    6: ["Increment","Terminator","Operator","Variable"],
    7: [".concat()",".push()",".pop()",".append()"],
    8: [".pop()",".return()",".delete()",".remove()"],
    9: ["Dynamic Objective Mixer","Disco O-ring Maker","Derivative Object Mince","Document Object Model"],
    10: ["{}","[]","()","||"],
    11: ["Printing","Programming","Processing","Padding"],
    12: [":",";","`","#"],
    13: ["Booleans","Integers","Tralse","Logical Operators"],
    14: ["lowercase","UPPERCASE","camelCase","aLtErNaTiNg"],
    15: ["print()","display()","fprintf()","console.log()"],
    16: ["Booleans","Integers","Strings","All of the above"],
}

var answers = {
    0: "Structure",
    1: "Cascading Style Sheet",
    2: "Presentation",
    3: "Dynamic",
    4: "===",
    5: "0",
    6: "Increment",
    7: ".concat()",
    8: ".pop()",
    9: "Document Object Model",
    10: "()",
    11: "Programming",
    12: ";",
    13: "Booleans",
    14: "camelCase",
    15: "console.log()",
    16: "All of the above",
}

var rand=Math.floor(Math.random()*Object.keys(questions).length);
var questionarray=[rand];

function setTime() {
    var timerInterval= setInterval(function() {
        timeLeft--;
        timeEl.textContent="Time Remaining: " + timeLeft;

        if(timeLeft==0) {
            // stop the game
            clearInterval(timerInterval);
            endGame();
        }
    },1000);
}

function endGame() {
    questionEl.textContent="You got " + score + " out of " + Object.keys(questions).length + " correct";
    replay.setAttribute("id","replay");
    q1.setAttribute("class","question-no-display");
    q2.setAttribute("class","question-no-display");
    q3.setAttribute("class","question-no-display");
    q4.setAttribute("class","question-no-display");
    endIni.setAttribute("class","form-d");
    endSub.setAttribute("class","form-d");
}

startBtn.addEventListener("click", function(event) {
    event.preventDefault();
    setTime();
    choicebox.removeChild(document.getElementById("start"));
    questionEl.textContent=questionarray.length + ". " + questions[rand];
    q1.setAttribute("class","question-choices");
    q2.setAttribute("class","question-choices");
    q3.setAttribute("class","question-choices");
    q4.setAttribute("class","question-choices");
    q1.textContent=choices[rand][0];
    q2.textContent=choices[rand][1];
    q3.textContent=choices[rand][2];
    q4.textContent=choices[rand][3];
})

function choiceclick() {
    rand=Math.floor(Math.random()*Object.keys(questions).length);
    if (qNum!=Object.keys(questions).length) {
        while (true) {
            if (questionarray.includes(rand)) {
                rand=Math.floor(Math.random()*Object.keys(questions).length);
            } else {
                questionarray.push(rand);
                break;
            }
        }
        questionEl.textContent=questionarray.length + ". " + questions[rand];
        q1.textContent=choices[rand][0];
        q2.textContent=choices[rand][1];
        q3.textContent=choices[rand][2];
        q4.textContent=choices[rand][3];
    } else {
        timeLeft=1;
        endGame();
    }
}

q1.addEventListener("click", function(event) {
    event.preventDefault();
    if (q1.textContent==answers[rand]) {
        score+=1;
        foot.textContent="Correct!";
        foot.setAttribute("style","border-top: 2px solid #5e5c53");
    } else {
        timeLeft=timeLeft-5;
        foot.textContent="Incorrect!";
        foot.setAttribute("style","border-top: 2px solid #5e5c53");
    }
    qNum+=1;
    choiceclick();
})

q2.addEventListener("click", function(event) {
    event.preventDefault();
    if (q2.textContent==answers[rand]) {
        score+=1;
        foot.textContent="Correct!";
        foot.setAttribute("style","border-top: 2px solid #5e5c53");
    } else {
        timeLeft=timeLeft-5;
        foot.textContent="Incorrect!";
        foot.setAttribute("style","border-top: 2px solid #5e5c53");
    }
    qNum+=1;
    choiceclick();
})

q3.addEventListener("click", function(event) {
    event.preventDefault();
    if (q3.textContent==answers[rand]) {
        score+=1;
        foot.textContent="Correct!";
        foot.setAttribute("style","border-top: 2px solid #5e5c53");
    } else {
        timeLeft=timeLeft-5;
        foot.textContent="Incorrect!";
        foot.setAttribute("style","border-top: 2px solid #5e5c53");
    }
    qNum+=1;
    choiceclick();
})

q4.addEventListener("click", function(event) {
    event.preventDefault();
    if (q4.textContent==answers[rand]) {
        score+=1;
        foot.textContent="Correct!";
        foot.setAttribute("style","border-top: 2px solid #5e5c53");
    } else {
        timeLeft=timeLeft-5;
        foot.textContent="Incorrect!";
        foot.setAttribute("style","border-top: 2px solid #5e5c53");
    }
    qNum+=1;
    choiceclick();
})

replay.addEventListener("click", function(event) {
    window.location.reload();
})

endSub.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(highScore.initials);
    if (score >= highScore.high) {
        highScore.initials = endIni.value;
        highScore.high = score;
    }
    localStorage.setItem("highScore", JSON.stringify(highScore));
    renderHigh();
})

function renderHigh() {
    var lastHigh = JSON.parse(localStorage.getItem("highScore"));
    if (lastHigh !== null && lastHigh.initials !== "") {
        highScoreList.textContent = lastHigh.initials + " currently has the high score of " + lastHigh.high;
    } else if (lastHigh.initials=="") {
        highScoreList.textContent = "Please Submit your initials to save your score!";
    } else {
        highScoreList.textContent = "Take the quiz to get a Score!";
    }
}

renderHigh();
