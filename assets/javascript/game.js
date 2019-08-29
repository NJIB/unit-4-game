// $(document).ready(function () {


var tgtNumber = 0;  // tgtNumber is the number the computer randomly selects, between 19 and 120
var latestTotal = 0;  // Holds the total of all numbers guessed so far
var crystal1 = 0;  //Score for crystal1
var crystal2 = 0;  //Score for crystal2
var crystal3 = 0;  //Score for crystal3
var crystal4 = 0;  //Score for crystal4
var crysNumLog = [];  //Stores the number already selected for previous crystals, so as not to duplicate
var latest = 0;


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
}

    crystal1Div = $('#Crystal1');
    crystal1Div.on('click', function (evt) {
        latestTotal = latestTotal + crystal1;        ;
        console.log("latestTotal:" + latestTotal);
        displayUpdate(latestTotal);
        checkWinLose();
    })

    crystal2Div = $('#Crystal2');
    crystal2Div.on('click', function (evt) {
        latestTotal = latestTotal + crystal2;        ;
      console.log("latestTotal:" + latestTotal);
      displayUpdate(latestTotal);
      checkWinLose();
    })

    crystal3Div = $('#Crystal3');
    crystal3Div.on('click', function (evt) {
        latestTotal = latestTotal + crystal3;        ;
      console.log("latestTotal:" + latestTotal);
      displayUpdate(latestTotal);
      checkWinLose();
    })

    crystal4Div = $('#Crystal4');
    crystal4Div.on('click', function (evt) {
        latestTotal = latestTotal + crystal4;        ;
      console.log("latestTotal:" + latestTotal);
    //   document.getElementById("latest").innerHTML = latest;
    displayUpdate(latestTotal);
      checkWinLose();
    })

function checkWinLose() {
    if (latestTotal < tgtNumber) {
    } else if (latestTotal === tgtNumber) {
            document.getElementById("scoreBoardMsg").innerHTML = "You win!";
        } else if (latestTotal > tgtNumber) {
            document.getElementById("scoreBoardMsg").innerHTML = "You overshot!";
        }
}


function displayUpdate(latest) {
    document.getElementById("latest").innerHTML = latest;
}


//FUNCTION CALLS FOR PROGRAM EXECUTION   
// playGame()

// function playGame() {
    chooseTgtNumber();
    crystal1 = chooseCrystalNumber();
    crystal2 = chooseCrystalNumber();
    crystal3 = chooseCrystalNumber();
    crystal4 = chooseCrystalNumber();

// }
