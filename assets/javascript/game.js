$(document).ready(function () {
    let wins = 0;
    let losses = 0;
    let crystalValue1 = 0;
    let crystalValue2 = 0;
    let crystalValue3 = 0;
    let crystalValue4 = 0;
    let randomNumber = 0;
    let playerScore = 0;

    function newGame() {
        playerScore = 0;
        $("#playerScore").text(playerScore);
        crystalValue1 = Math.floor(Math.random() * (12 - 1)) + 1;
        crystalValue2 = Math.floor(Math.random() * (12 - 1)) + 1;
        crystalValue3 = Math.floor(Math.random() * (12 - 1)) + 1;
        crystalValue4 = Math.floor(Math.random() * (12 - 1)) + 1;
        randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        $("#randomNumber").text(randomNumber);
    }

    newGame();
    

    $("#crystal1").click(function () {
        playerScore += crystalValue1;
        updateScore();
        checkScore();
    });

    $("#crystal2").click(function () {
        playerScore += crystalValue2;
        updateScore();
        checkScore();
    });

    $("#crystal3").click(function () {
        playerScore += crystalValue3;
        updateScore();
        checkScore();
    });

    $("#crystal4").click(function () {
        playerScore += crystalValue4;
        updateScore();
        checkScore();
    });

    function updateScore() {
        $("#playerScore").text(playerScore);
    }


    function checkScore() {
        if (playerScore === randomNumber) {
            wins++;
            $("#wins").text(wins);
            newGame();
        } 
        if (playerScore > randomNumber) {
            losses++;            
            $("#losses").text(losses);
            newGame();
        }

    }



   


});
