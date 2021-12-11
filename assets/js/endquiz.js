const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = document.querySelector('#mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefualt()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)
    // sorts high scores
    highScores.sort((a,b) => {
        return b.score - a.score
    })
    // allows the high scores to be replaced with new ones
    highScores.splice(5)

    localStorage.setItem('./highscores.html', JSON.stringify(highScores))
    window.location.assign('./index.html')
}