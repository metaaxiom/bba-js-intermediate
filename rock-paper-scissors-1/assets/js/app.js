// let playerWins = 12
// let computerWins =  8;

// if two digits, then 


const weaponsArr = ["rock", "paper", "scissors"];
// first weapon in the array beats the latter
const weaponPrimacyArr = [
    ["rock", "scissors"],
    ["paper", "rock"],
    ["scissors", "paper"]
];

const choiceBtnsColl = document.getElementsByClassName("choiceBtns");
const resultContainer = document.getElementById('result-container');
for (let i = 0; i < choiceBtnsColl.length; i++) {
    choiceBtnsColl[i].onclick = function () {
        var audio = new Audio('./assets/audio/Sounds_WHOOSH.WAV');
        audio.play();

        let userWeapon = this.value;
        // generate random number, and use that as the index for weaponsArr
        let compWeapon = weaponsArr[Math.floor(Math.random() * 3)];
        let chosenWeapons = [userWeapon, compWeapon];
        let resultMsg = "";

        if (chosenWeapons[0] == chosenWeapons[1]) {
            // tie
            resultMsg = `TIE: Both hands are ${chosenWeapons[0].toUpperCase()}`;
        } else {
            // not a tie

            // matchedIndex will either be an index from weaponPrimacyArr
            // or it will be -1, if it doesn't find a match
            let matchedIndex = weaponPrimacyArr.findIndex(weaponPrimacy =>
                // ["rock", "scissors"]
                // after join(""): "rockscissors"
                chosenWeapons.join("") == weaponPrimacy.join("")
            );

            // if we find a match in weaponPrimacyArr, then it means
            // that the user has won
            // (since the first element in chosenWeapons is the user's choice
            // ...and the first element specified in weaponPrimacyArr wins)
            if (matchedIndex >= 0) {
                // match occured, so user won
                // chosenWeapons[0] = user's choice
                // chosenWeapons[1] = computer's choice
                resultMsg = `YOU WON: ${chosenWeapons[0].toUpperCase()} beats ${chosenWeapons[1].toUpperCase()}`;
            } else {
                // match has not occured, so user lost
                resultMsg = `YOU LOST: ${chosenWeapons[1].toUpperCase()} beats ${chosenWeapons[0].toUpperCase()}`;
            }

            /* let result = weaponPrimacyArr.findIndex((weaponPrimacy) => {
                return (chosenWeapons.join("") == weaponPrimacy.join(""));
            }) >= 0 ? "YOU WON" : "YOU LOST"; */
        }

        
        resultContainer.innerHTML = resultMsg;
        
        
    }
}