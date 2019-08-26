var tgtNumber = [];  // tgtNumber is the number the computer randomly selects, between 19 and 120
var latestTotal = [];  // Holds the total of all numbers guessed so far


// Computer randomly chooses a team
function chooseNumber() {
    while (tgtNumber < 20){
        tgtNumber = Math.floor(Math.random() * 121);
    }
    console.log(tgtNumber);
    document.getElementById("targetNumber").innerHTML = tgtNumber;
}

// function checkWinLose() {
//     if ((totalGuessed >= teamNameLength) && (guessesRemaining > 0)) {
//         selectTeamBadge(chosenTeam);
//         // document.getElementById("teamBadge").style.display = "flex";
//         document.getElementById("pressToRestart").style.display = "flex";
//         endResult = ("Goal...! &nbsp You got it - the correct answer was &nbsp" + chosenTeam);
//         document.getElementById("letterContainer").innerHTML = endResult;
//         gamesWon++;
//         document.getElementById("totalScore").innerHTML = "TOTAL SCORE :  " + gamesWon;
//         console.log(gamesWon);
//     } else

//         if ((totalGuessed < teamNameLength) && (guessesRemaining < 1)) {
//             selectTeamBadge(chosenTeam);
//             document.getElementById("teamBadge").style.display = "flex";
//             document.getElementById("pressToRestart").style.display = "flex";
//             endResult = ("Foul...! &nbsp The correct answer was&nbsp" + chosenTeam);
//             document.getElementById("letterContainer").innerHTML = endResult;
//         }
// }

// function displayUpdate(playerScoreCount, computerScoreCount) {
//     document.getElementById("playerScore").innerHTML = playerScoreCount;
//     document.getElementById("computerScore").innerHTML = computerScoreCount;
//     if (totalGuessed < 1) {
//         document.getElementById("letterContainer").innerHTML = blankDisplay;
//     }
//     else {
//         document.getElementById("letterContainer").innerHTML = playerOutcome;
//     }
//     if (computerScoreCount > 0) {
//         document.getElementById("incorrectGuessListTitle").innerHTML = "Incorrect guesses:  ";
//         document.getElementById("incorrectGuessList").innerHTML = incorrectGuesses;
//     }
// }


//FUNCTION CALLS FOR PROGRAM EXECUTION   
playGame()

function playGame() {
    chooseNumber();
}
