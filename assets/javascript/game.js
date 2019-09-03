// $(document).ready(function () {


var tgtNumber = 0;  // tgtNumber is the number the computer randomly selects, between 19 and 120
var latestTotal = 0;  // Holds the total of all numbers guessed so far
var crystal1 = 0;  //Score for crystal1
var crystal2 = 0;  //Score for crystal2
var crystal3 = 0;  //Score for crystal3
var crystal4 = 0;  //Score for crystal4
var crysNumLog = [];  //Stores the number already selected for previous crystals, so as not to duplicate
var shuttleDistance = 0; //Distance shuttle will move with an individual crystal click
var gamesWon = 0;  //Stores hi score
var totalScore = 0; //Cumulative total score


// Computer randomly chooses a team
function chooseTgtNumber() {
    tgtNumber = 0;
    while (tgtNumber < 20) {
        tgtNumber = Math.floor(Math.random() * 121);
    }
    console.log("tgtNumber:" + tgtNumber);
    $("#targetNumber").html(tgtNumber);
}

function chooseCrystalNumber(crystal) {
    var crystalRdmNmbr = 0;
    while (crystalRdmNmbr < 1 || crysNumLog.indexOf(crystalRdmNmbr) > -1) {
        crystalRdmNmbr = Math.floor(Math.random() * 11);
    }
    crysNumLog.push(crystalRdmNmbr);
    //Log crystal values
    if (crysNumLog.length === 4) {
        console.log("crysNumLog:" + crysNumLog);
    }
    crystal = crystalRdmNmbr;
    return crystal;
}
// crysDiv = $('.crystalsDiv');
// //When crystal is clicked...
// crysDiv.on('click', function (evt) {
//     //Add value of crystal to the latestTotal
//     // console.log(crysDiv.attr("crystalnumber"));
//     latestTotal = latestTotal + crystal1;
//     console.log("latestTotal:" + latestTotal);
//     //Move shuttle
//     var shuttle = $("#shuttle");
//     shuttle.animate({ left: "+=200px" }, 3000);
//     //Print latestTotal to screen
//     displayUpdate(latestTotal);
//     checkWinLose();
// })

crystal1Div = $('#Crystal1');
//When crystal is clicked...
crystal1Div.on('click', function (evt) {
    if (latestTotal < tgtNumber) {
        //Add value of crystal to the latestTotal
        latestTotal = latestTotal + crystal1;
        console.log("latestTotal:" + latestTotal);
        //Move shuttle
        animateShuttle();
        //Print latestTotal to screen
        displayUpdate(latestTotal);
        checkWinLose();
    }
});

crystal2Div = $('#Crystal2');
//When crystal is clicked...
crystal2Div.on('click', function (evt) {
    if (latestTotal < tgtNumber) {
        //Add value of crystal to the latestTotal
        latestTotal = latestTotal + crystal2;
        console.log("latestTotal:" + latestTotal);
        //Move shuttle
        animateShuttle();
        //Print latestTotal to screen
        displayUpdate(latestTotal);
        checkWinLose();
    }
})

crystal3Div = $('#Crystal3');
//When crystal is clicked...
crystal3Div.on('click', function (evt) {
    if (latestTotal < tgtNumber) {
        //Add value of crystal to the latestTotal
        latestTotal = latestTotal + crystal3;
        console.log("latestTotal:" + latestTotal);
        //Move shuttle
        animateShuttle();
        //Print latestTotal to screen
        displayUpdate(latestTotal);
        checkWinLose();
    }
})

crystal4Div = $('#Crystal4');
//When crystal is clicked...
crystal4Div.on('click', function (evt) {
    if (latestTotal < tgtNumber) {
        //Add value of crystal to the latestTotal
        latestTotal = latestTotal + crystal4;
        console.log("latestTotal:" + latestTotal);
        //Move shuttle
        animateShuttle();
        //Print latestTotal to screen
        displayUpdate(latestTotal);
        checkWinLose();
    }
})

function checkWinLose() {
    // Check if targetNumber reached or exceeded
    if (latestTotal < tgtNumber) {
        //Win message
    } else if (latestTotal === tgtNumber) {
        $("#scoreBoardMsg").html("You win!");
        gamesWon++;
        $("#totalScore").html("Games won: " + gamesWon);
        // Show Play Again button
        $("#restartButton").fadeIn("slow", function () {
            // Animation complete
        });
        // Lose message
    } else if (latestTotal > tgtNumber) {
        $("#scoreBoardMsg").html("You overshot!");
        // Show Play Again button
        $("#restartButton").fadeIn("slow", function () {
            // Animation complete
        });
    }
}

function animateShuttle() {
    var rocketToMoonPosition = $("#rocketToMoon").position();
    console.log("rocketToMoonContainer position:" + rocketToMoonPosition.left + rocketToMoonPosition.top);
    var moonContPosition = $("#moonContainer").position();
    console.log("moonContainer position:" + moonContPosition.left + moonContPosition.top);
    var rocketTrackLength = parseInt((moonContPosition.left - rocketToMoonPosition.left) - 80);
    console.log("rocketTrackLength:" + rocketTrackLength);
    //Move shuttle
    var shuttlePosition = $("#shuttle").position();
    console.log("Shuttle position:" + shuttlePosition.left);
    shuttleDistance = parseInt((latestTotal / tgtNumber) * rocketTrackLength);
    console.log("ShuttleDistance:" + shuttleDistance);
    var shuttle = $("#shuttle");
    $("#shuttle").animate({ left: shuttleDistance }, 500);
}

pressToRestart = $('#restartButton');
pressToRestart.on('click', function (evt) {
    // Reset won/lose message
    var blankDisplay = [];
    $("#scoreBoardMsg").html(blankDisplay);
    // Select new target and crystal numbers
    chooseTgtNumber();
    crystal1 = chooseCrystalNumber();
    crystal2 = chooseCrystalNumber();
    crystal3 = chooseCrystalNumber();
    crystal4 = chooseCrystalNumber();
    // Move shuttle back to starting position
    $("#shuttle").animate({ left: "-0px" }, 2000);
    //Reset scoreboard
    latestTotal = 0;
    $("#latest").html(latestTotal);
    // Reset shuttle position counter
    shuttleDistance = 0;
    // Hide Play Again button
    $("#restartButton").fadeOut("slow", function () {
    });
})




function displayUpdate(latest) {
        $("#latest").html(latest);
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
