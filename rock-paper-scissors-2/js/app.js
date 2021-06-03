
let playerWins = 0;
let computerWins = 0;

// if two digits, then

const weaponsArr = ["rock", "paper", "scissors"];
const weaponPrimacyArr = [
    ["rock", "scissors"],
    ["paper", "rock"],
    ["scissors", "paper"]
];

const choiceBtnsColl = document.getElementsByClassName("choiceBtns");
const resultContainer = document.getElementById('result-container');
const playerScoreBoard = document.getElementById('player-score');
const computerScoreBoard = document.getElementById('cpu-score');
for (let i = 0; i < choiceBtnsColl.length; i++) {
    choiceBtnsColl[i].onclick = function () {
        var audio = new Audio('./assets/audio/Sounds_WHOOSH.WAV');
        audio.play();

        let userWeapon = this.value;
        let compWeapon = weaponsArr[Math.floor(Math.random() * 3)];
        let chosenWeapons = [userWeapon, compWeapon];
        let resultMsg = "";

        const outputDiv = document.createElement("div")
        if (chosenWeapons[0] == chosenWeapons[1]) {
            resultMsg = `TIE: Both hands are ${chosenWeapons[0].toUpperCase()}`;
        } else {
            let matchedIndex = weaponPrimacyArr.findIndex(weaponPrimacy =>
                chosenWeapons.join("") == weaponPrimacy.join("")
            );
           
            if (matchedIndex >= 0) {
                resultMsg = `YOU WON: ${chosenWeapons[0].toUpperCase()} beats ${chosenWeapons[1].toUpperCase()}`;
                playerWins ++;
            } else {
                resultMsg = `YOU LOST: ${chosenWeapons[1].toUpperCase()} beats ${chosenWeapons[0].toUpperCase()}`;
                computerWins ++;
            }
        }
        resultContainer.innerHTML = resultMsg

        let cpuSplitScore = splitScore(computerWins);
        // does score have two digits?
        if(cpuSplitScore.length == 2){
            document.querySelector('#cpu-score-digit-1').innerText = cpuSplitScore[0];
            document.querySelector('#cpu-score-digit-2').innerText = cpuSplitScore[1];
        }else{
            // score has only one digit
            document.querySelector('#cpu-score-digit-2').innerText = cpuSplitScore[0];
        }

        
        let playerSplitScore = splitScore(playerWins);
        // does score have two digits?
        if(playerSplitScore.length == 2){
            document.querySelector('#player-score-digit-1').innerText = playerSplitScore[0];
            document.querySelector('#player-score-digit-2').innerText = playerSplitScore[1];
        }else{
            // score has only one digit
            document.querySelector('#player-score-digit-2').innerText = playerSplitScore[0];
        }


    }
}

function splitScore(scoreNum){
    // convert numerical value to string, and split it by individual characters
    return scoreNum.toString().split('');
}

// split(22) // ["2", "2"]
// let someArr = split(2) // ["2"]
// someArr[0] // okay
// someArr[1] // index not found