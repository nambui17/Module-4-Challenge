var timeLeft= 90;
var timeEl=document.querySelector("#timer");
var questionEl=document.querySelector("#questiontext");
var startBtn=document.querySelector('#start');
var choicebox=document.querySelector('#choicebox');
var q1=document.querySelector("#question-1");
var q2=document.querySelector("#question-2");
var q3=document.querySelector("#question-3");
var q4=document.querySelector("#question-4");
var score = 0;
var qNum =0;
var button= document.createElement("button");
var rand = Math.floor(Math.random()*15);
var questionarray=[rand];
var replay = document.querySelector("#replay-nd");
var localscore=localStorage.getItem("score");

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
    10: "What function can add a tag into the DOM?",
    11: "An API stands for Application _______ Interface.",
    12: "The terminator key in Javascript is:",
    13: "True and False are examples of what type of data?",
    14: "Variables and function names are written in ________.",
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
    8: ".push()",
    9: "Document Object Model",
    10: ".appendChild()",
    11: "Programming",
    12: ";",
    13: "Booleans",
    14: "camelCase",
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
    10: [".addElement()",".appendChild()",".createElement()",".createTag()"],
    11: ["Printing","Programming","Processing","Padding"],
    12: [":",";","`","#"],
    13: ["Booleans","Integers","Tralse","Logical Operators"],
    14: ["lowercase","UPPERCASE","camelCase","aLtErNaTiNg"],
}

function setTime() {
    var timerInterval= setInterval(function() {
        timeLeft--;
        timeLeft.textContent="Time: " + timeLeft;

        if(timeLeft==0) {
            // stop the game
            clearInterval(timerInterval);
            sendMessage();
        }
    },1000);
}

// Function to clear the screen of text and show score

startBtn.addEventListener("click", function(event) {
    event.preventDefault();
    setTime();
    choicebox.removeChild(document.getElementById("start"));
    questionEl.textContent=questions[rand];
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
    rand=Math.floor(Math.random()*15);
    while (true) {
        if (rand==questionarray[-1] || questionarray.length==15 ) {
            rand=Math.floor(Math.random()*15);
        } else {
            questionarray.push(rand);
            break;
        }
    }
    questionEl.textContent = questions[rand];
    q1.textContent=choices[rand][0];
    q2.textContent=choices[rand][1];
    q3.textContent=choices[rand][2];
    q4.textContent=choices[rand][3];
    if (questionarray.length==15) {
        questionEl.textContent="You got " + score + " out of " + 15 + " correct";
        replay.setAttribute("id","replay");
        q1.setAttribute("class","question-no-display");
        q2.setAttribute("class","question-no-display");
        q3.setAttribute("class","question-no-display");
        q4.setAttribute("class","question-no-display");
        localscore=score;
    }
}

replay.addEventListener("click", function(event) {
    window.location.reload();
})

q1.addEventListener("click", function(event) {
    event.preventDefault();
    if (q1.textContent==answers[rand]) {
        score+=1;
    } else {
        timeLeft=timeLeft-5;
    }
    choiceclick();
})

q2.addEventListener("click", function(event) {
    event.preventDefault();
    if (q2.textContent==answers[rand]) {
        score+=1;
    }
    choiceclick();
})

q3.addEventListener("click", function(event) {
    event.preventDefault();
    if (q3.textContent==answers[rand]) {
        score+=1;
    }
    choiceclick();
})

q4.addEventListener("click", function(event) {
    event.preventDefault();
    if (q4.textContent==answers[rand]) {
        score+=1;
    }
    choiceclick();
})