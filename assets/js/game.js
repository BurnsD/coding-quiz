// main variables here
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

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
        choice2: 'answer 2',
        choice3: 'aNsWeR3',
        choice4: 'This is the correct answer',
        answer: 4,
    },
    {
        question: 'What is the answer to this question?',
        choice1: 'Answer 1',
        choice2: 'answer 2',
        choice3: 'This is the correct answer',
        choice4: 'AnSwEr 4',
        answer: 3,
    },
    {
        question: 'What is the answer to this question?',
        choice1: 'This is the correct answer',
        choice2: 'answer 2',
        choice3: 'aNsWeR3',
        choice4: 'AnSwEr 4',
        answer: 1,
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
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        // Stores the most recent score to local storage
        localStorage.setItem('mostRecentScore', score)
        // Sets score to the score board
        return window.location.assign('./endquiz.html')
    }

    questionCounter++
    // shows question "1"
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    // progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    // Keeps track of what question the quiz taker is on
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion();

        }, 750)
    })
})

// adding points to score
incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame();