const highScoresList = document.querySelector('#highScoresList');
// gets items from local storage
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML =
highScores.map(score => {
    // Brings the score and name values to a list
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("");