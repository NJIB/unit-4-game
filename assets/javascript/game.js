// $(document).ready(function () {


var tgtNumber = 0;  // tgtNumber is the number the computer randomly selects, between 19 and 120
var latestTotal = 0;  // Holds the total of all numbers guessed so far
var crystal1 = 0;  //Score for crystal1
var crystal2 = 0;  //Score for crystal2
var crystal3 = 0;  //Score for crystal3
var crystal4 = 0;  //Score for crystal4
var crysNumLog = [];  //Stores the number already selected for previous crystals, so as not to duplicate



// Computer randomly chooses a team
function chooseTgtNumber() {
    // while (Number < 20) {
        tgtNumber = Math.floor(Math.random() * 121);
    // }
    console.log("tgtNumber:" + tgtNumber);
    document.getElementById("targetNumber").innerHTML = tgtNumber;
}

function chooseCrystalNumber(crystal) {
        var crystalRdmNmbr = 0;
        while (crystalRdmNmbr < 1  || crysNumLog.indexOf(crystalRdmNmbr) > -1) {
            crystalRdmNmbr = Math.floor(Math.random() * 11);
        }
        console.log("crystalRdmNmbr: " + crystalRdmNmbr);
        crysNumLog.push(crystalRdmNmbr);
            console.log("crysNumLog:" + crysNumLog);
            crystal = crystalRdmNmbr;
            return crystal;
            // document.getElementById(crystalDiv).innerHTML = crystal;    
}

    crystal1Div = $('#Crystal1');
    crystal1Div.on('click', function (evt) {
        latestTotal = latestTotal + crystal1;        ;
      console.log("latestTotal:" + latestTotal);
      checkWinLose();
    })

    crystal2Div = $('#Crystal2');
    crystal2Div.on('click', function (evt) {
        latestTotal = latestTotal + crystal2;        ;
      console.log("latestTotal:" + latestTotal);
      checkWinLose();
    })

    crystal3Div = $('#Crystal3');
    crystal3Div.on('click', function (evt) {
        latestTotal = latestTotal + crystal3;        ;
      console.log("latestTotal:" + latestTotal);
      checkWinLose();
    })

    crystal4Div = $('#Crystal4');
    crystal4Div.on('click', function (evt) {
        latestTotal = latestTotal + crystal4;        ;
      console.log("latestTotal:" + latestTotal);
      checkWinLose();
    })

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
    crystal1 = chooseCrystalNumber();
    crystal2 = chooseCrystalNumber();
    crystal3 = chooseCrystalNumber();
    crystal4 = chooseCrystalNumber();

// }
