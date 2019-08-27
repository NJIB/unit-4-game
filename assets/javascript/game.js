var tgtNumber = 0;  // tgtNumber is the number the computer randomly selects, between 19 and 120
var latestTotal = [];  // Holds the total of all numbers guessed so far
// var crystalNumbers = {
//     crystal1: 0,
//     crystal2: 0,
//     crystal3: 0,
//     crystal4: 0
// };
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var crysNumLog = [];



// Computer randomly chooses a team
function chooseTgtNumber() {
    // while (Number < 20) {
        tgtNumber = Math.floor(Math.random() * 121);
    // }
    console.log("tgtNumber:" + tgtNumber);
    document.getElementById("targetNumber").innerHTML = tgtNumber;
}

function chooseCrystalNumber(crystal, crystalDiv) {
    // while (crystal1 < 1) {
    //     crystal1 = Math.floor(Math.random() * 11);
    // }
    //     console.log("crystal1:" + crystal1);
    //     crysNumLog.push(crystal1);
    //     console.log("crysNumLog (#1 pushed):" + crysNumLog)
    //     //ASSIGN THIS NUMBER TO CRYSTAL 1
    //     document.getElementById("Crystal1").innerHTML = crystal1;

        while (crystal < 1  || crysNumLog.indexOf(crystal) > -1) {
            crystal = Math.floor(Math.random() * 11);
        }
            crysNumLog.push(crystal);
            console.log("crysNumLog:" + crysNumLog)
            //ASSIGN THIS NUMBER TO CRYSTAL 1
            document.getElementById(crystalDiv).innerHTML = crystal;
    
}



function checkWinLose() {
    if (latestTotal < tgtNumber) {
    } else if (latestTotal === tgtNumber) {
            document.getElementById("rocketTrack").innerHTML = "You win!";
        } else if (latestTotal > tgtNumber) {
            document.getElementById("rocketTrack").innerHTML = "You overshot!";
        }
}

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
// playGame()

// function playGame() {
    chooseTgtNumber();
    chooseCrystalNumber(crystal1, "Crystal1");
    chooseCrystalNumber(crystal2, "Crystal2");
    chooseCrystalNumber(crystal3, "Crystal3");
    chooseCrystalNumber(crystal4, "Crystal4");
    
    // }
