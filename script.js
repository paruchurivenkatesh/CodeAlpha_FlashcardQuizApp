const flashcards = [

    {
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language"
    },

    {
        question: "What does CSS do?",
        answer: "Styles the webpage"
    },

    {
        question: "What is JavaScript used for?",
        answer: "Makes websites interactive"
    },

    {
        question: "What does CPU stand for?",
        answer: "Central Processing Unit"
    },

    {
        question: "What is the capital of India?",
        answer: "New Delhi"
    },

    {
        question: "Who invented the light bulb?",
        answer: "Thomas Edison"
    },

    {
        question: "Which planet is called the Red Planet?",
        answer: "Mars"
    },

    {
        question: "What is 10 x 10?",
        answer: "100"
    },

    {
        question: "Which animal is known as King of Jungle?",
        answer: "Lion"
    },

    {
        question: "Which language runs in browser?",
        answer: "JavaScript"
    },

    {
        question: "What is the largest ocean?",
        answer: "Pacific Ocean"
    },

    {
        question: "How many days are there in a week?",
        answer: "7"
    },

    {
        question: "Which bird can mimic human voice?",
        answer: "Parrot"
    },

    {
        question: "What is the national animal of India?",
        answer: "Tiger"
    },

    {
        question: "Which gas do plants absorb?",
        answer: "Carbon Dioxide"
    }

];

let currentCard = 0;

const question =
document.getElementById("question");

const answer =
document.getElementById("answer");

const flashcard =
document.getElementById("flashcard");

const flipBtn =
document.getElementById("flipBtn");

const nextBtn =
document.getElementById("nextBtn");

const prevBtn =
document.getElementById("prevBtn");

const addBtn =
document.getElementById("addBtn");

const newQuestion =
document.getElementById("newQuestion");

const newAnswer =
document.getElementById("newAnswer");

/* LOAD CARD */

function loadCard(){

    question.innerText =
    flashcards[currentCard].question;

    answer.innerText =
    flashcards[currentCard].answer;

    flashcard.classList.remove("flip");
}

/* FLIP CARD */

flipBtn.addEventListener("click", function(){

    flashcard.classList.toggle("flip");
});

/* NEXT CARD */

nextBtn.addEventListener("click", function(){

    currentCard++;

    if(currentCard >= flashcards.length){

        currentCard = 0;
    }

    loadCard();
});

/* PREVIOUS CARD */

prevBtn.addEventListener("click", function(){

    currentCard--;

    if(currentCard < 0){

        currentCard =
        flashcards.length - 1;
    }

    loadCard();
});

/* ADD FLASHCARD */

addBtn.addEventListener("click", function(){

    if(
        newQuestion.value === "" ||
        newAnswer.value === ""
    ){

        alert("Please fill all fields");

        return;
    }

    flashcards.push({

        question: newQuestion.value,

        answer: newAnswer.value
    });

    alert("New Flashcard Added!");

    newQuestion.value = "";

    newAnswer.value = "";
});

/* INITIAL LOAD */

loadCard();
