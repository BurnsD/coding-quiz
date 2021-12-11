const startBtn = document.getElementsById('start');
var timerEl = getElementsById('timer');

var time = 100;
var timerInterval;

function startQuiz() {
    timerInterval = setInterval(() => {
        time--;
        timerEl = time
        if (time <= 0){
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timerEl);
}

startBtn.onclick = startQuiz;

/* oiriginal code - keeping it here but ineffective as reference material


const quizData = [
    {
        question: "What language would I use to style a web application?",
        a: "the first answer",
        b: "the second answer",
        c: "the third answer",
        d: "the forth answer",
        correct: "d"
    },
    {
        question: "What language would I use to style a web application?",
        a: "the first answer",
        b: "the second answer",
        c: "the third answer",
        d: "the forth answer",
        correct: "d"
    },
    {
        question: "What language would I use to style a web application?",
        a: "the first answer",
        b: "the second answer",
        c: "the third answer",
        d: "the forth answer",
        correct: "d"
    },
    {
        question: "What language would I use to style a web application?",
        a: "the first answer",
        b: "the second answer",
        c: "the third answer",
        d: "the forth answer",
        correct: "d"
    },

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_txt = document.getElementById('a_txt')
const b_txt = document.getElementById('b_txt')
const c_txt = document.getElementById('c_txt')
const d_txt = document.getElementById('d_txt')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz();

// Function used to load quiz text into the web browser
function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_txt.innerText = currentQuizData.a
    b_txt.innerText = currentQuizData.b
    c_txt.innerText = currentQuizData.c
    d_txt.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else {
            quiz.innerHTML = ''
        }
    }
}) */