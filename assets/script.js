cosnt quizData = [
    {
        question: "What language would I use to style a web application?"
        a: "the first answer",
        b: "the second answer",
        c: "the third answer",
        d: "the forth answer",
        correct: "d"
    },
    {
        question: "What language would I use to style a web application?"
        a: "the first answer",
        b: "the second answer",
        c: "the third answer",
        d: "the forth answer",
        correct: "d"
    },
    {
        question: "What language would I use to style a web application?"
        a: "the first answer",
        b: "the second answer",
        c: "the third answer",
        d: "the forth answer",
        correct: "d"
    },
    {
        question: "What language would I use to style a web application?"
        a: "the first answer",
        b: "the second answer",
        c: "the third answer",
        d: "the forth answer",
        correct: "d"
    },

];

const quiz = document.getElementById('quiz')
const answerEl = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_txt = document.getElementById('a_txt')
const b_txt = document.getElementById('b_txt')
const c_txt = document.getElementById('c_txt')
const d_txt = document.getElementById('d_txt')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz();

function loadQuiz(){
    
}

