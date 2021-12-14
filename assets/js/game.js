// main variables here
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const startBtn = document.getElementById('start');

// Countdown 
const startingMinutes = 1.5;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    seconds = seconds < 10 ? '0' + seconds : seconds;
    // Displays countdown to screen
    countdownEl.innerHTML = `${minutes}: ${seconds}`
    time--;

    time = time < 0 ? 0 : time; 
}

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// This is holding all of the questions text
let questions = [
    {
        question: 'Which of these values is NOT considered false?',
        choice1: '0',
        choice2: '"0"',
        choice3: 'null',
        choice4: '""',
        answer: 2,
    },
    {
        question: 'In CSS: Which of the following is NOT a value allowed for the border-style property?',
        choice1: 'groove',
        choice2: 'double',
        choice3: 'ridge',
        choice4: 'beveled',
        answer: 4,
    },
    {
        question: 'If you need to position a child element in relation to its parent element, which value should you set the position property to?',
        choice1: 'display',
        choice2: 'static',
        choice3: 'absolute',
        choice4: 'relative',
        answer: 3,
    },
    {
        question: 'What do media queries allow us to do?',
        choice1: 'Create responsive designs.',
        choice2: 'Play videos on our page',
        choice3: 'Change CSS at different browser widths',
        choice4: 'Allows embedded maps on our page',
        answer: 3,
    },
    {
        question: "In the DOM's event object, what does its target property refer to?",
        choice1: 'It refers to the HTML element we want to affect as a result of our dispatched event.',
        choice2: 'It refers to the HTML element that was interacted with to dispatch the event.',
        choice3: 'It refers to the CSS property we want to affect as a reult of our dispacthed event',
        choice4: 'It refers to the CSS property that was interacted with to dispacth the event',
        answer: 2,
    },
];

// variable for score and maximun questions in the quiz
const SCORE_POINTS = 50;
const MAX_QUESTIONS = 5;



// Start function 
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

// Function for getting question text or stopping quiz
getNewQuestion = () => {
    // Will stop the quiz if time is depleted or no more questions aviable
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS || time === 0) {
        // Stores the most recent score to local storage
        localStorage.setItem('mostRecentScore', score)
        // Sets score to the score board
        return window.location.assign('./endquiz.html')
    } 
    
    questionCounter++;
    // Displays which question the quiz taker is on
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    // Keeps track of what question the quiz taker is on
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        // Displays choices to screen
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionsIndex, 1);
    console.log(availableQuestions)
    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        console.log(e.target);
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        // Toggle for class upon correct or incorrect answer
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'
        // Adding points for correct answer
        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
        // Minus time for wrong answer
        if(classToApply === 'incorrect') {
            time -=25;
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion();

        }, 750)
    })
});

// adding points to score
incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
};


startGame();