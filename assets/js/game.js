// main variables here
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const ProgressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

// This is holding all of the questions text
let questions = [
    {
        question: 'What is the answer to this question?',
        choice1: 'Answer 1',
        choice2: 'This is the correct answer',
        choice3: 'aNsWeR3',
        choice4: 'AnSwEr 4',
        answer: 2,
    },
    {
        question: 'What is the answer to this question?',
        choice1: 'Answer 1',
        choice2: 'This is the correct answer',
        choice3: 'aNsWeR3',
        choice4: 'AnSwEr 4',
        answer: 2,
    },
    {
        question: 'What is the answer to this question?',
        choice1: 'Answer 1',
        choice2: 'This is the correct answer',
        choice3: 'aNsWeR3',
        choice4: 'AnSwEr 4',
        answer: 2,
    },
    {
        question: 'What is the answer to this question?',
        choice1: 'Answer 1',
        choice2: 'This is the correct answer',
        choice3: 'aNsWeR3',
        choice4: 'AnSwEr 4',
        answer: 2,
    },
    {
        question: 'What is the answer to this question?',
        choice1: 'Answer 1',
        choice2: 'This is the correct answer',
        choice3: 'aNsWeR3',
        choice4: 'AnSwEr 4',
        answer: 2,
    },
]

// variable for score and maximun questions in the quiz
const SCORE_POINTS = 100
const MAX_QUESTIONS = 5


startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        // Stores the most recent score to local storage
        localStorage.setItem('mostRecentScore', score)
        // Sets score to the high score board
        return window.location.assign('./end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    ProgressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
}