/*
const saveScoreBtn = document.getElementById("saveScoreBtn")
var scoreArray = [];

saveScoreBtn.addEventListener('click', scoreSubmit);

function scoreSubmit(){
    var forminfoEl = document.getElementById('initials').ariaValueMax;

    const entry = {
        "initials": forminfoEl,
        "score": score
    };
    localStorage.setItem(localStorage.length, JSON.stringify(entry));

    displayHighScore();
}
*/

/*
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
// Get highscores OR empty array for first time
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;
// allows save button to work once value is inputed 
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});




saveHighScore = e => {
    e.preventDefualt();

    const score = {
        score: mostRecentScore,
        name: username.value
    }
    highScores.push(score);
    // sort high scores
    highScores.sort( (a,b) => b.score - a.score)
    // allows the high scores to be replaced with new ones
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('./index.html');
};
*/
const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('./index.html')

    
}