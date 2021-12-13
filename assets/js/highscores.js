/*
function displayHighScore(){

    for (let i = 0; i < localStorage.length; 1++) {
        const key = localStorage.key(i);
        const entry = localStorage.getItem(key);
        scoreArray.push(JSON.parse(entry));
    }

    scoreArray?.sort((entry1, entry2) => (entry1.score < entry2.score ? 1 : -1))

    const table= document.getElementById("scores-table");
    for (let j =1; j < scoreArray.length+1; j++){
        var row = table.insertRow(j);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = scoreArray[j-1].initials;
        cell2.innerHTML = scoreArray[j-1].score;
    }
}; */

 
 
 
 
const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


highScoresList.innerHTML =highScores
    .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("");


 /* refrence
function formSubmit(){
    var formInfoEl = document.getElementById('initials').value;

    var entry = {
        "initials": formInfoEl,
        "score": totalScore,
    };
    localStorage.setItem(localStorage.length, JSON.stringify(entry));

    displayHighScore();
};




function displayHighScore(){

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const entry = localStorage.getItem(key);
        scoreArray.push(JSON.parse(entry));
    }

    scoreArray?.sort((entry1, entry2) => (entry1.score < entry2.score ? 1 : -1))
    
    var table = document.getElementById("scores-table");
    for (let j =1; j < scoreArray.length+1; j++){
        var row = table.insertRow(j);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = scoreArray[j-1].initials;
        cell2.innerHTML = scoreArray[j-1].score;
    }

};

window.addEventListener('beforeunload', function (e) {
    // Cancel the event
    e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
    // Chrome requires returnValue to be set
    e.returnValue = '';
}); */