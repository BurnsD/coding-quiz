const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;
// Allows Save button to be used only when a value has been made in the initials input
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});
// Saves the high score
saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    }
    
    highScores.push(score);
    // sorts highscores from highest to lowest
    highScores.sort((a,b) => {
        return b.score - a.score
    })
    // Keeps highscore page to only 5 scores. 
    highScores.splice(5);
    // saves to local storage
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('./index.html');

    
};