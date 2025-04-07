const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const compDisplay = document.getElementById("computerDisplay");
const result = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const compScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let compScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE"
    }

    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`; 
    compDisplay.textContent = `COMPUTER: ${computerChoice}`; 
    resultDisplay.textContent = result;

    switch(result){
        case "YOU WIN":
            resultDisplay.style.color = "green";
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE":
            resultDisplay.style.color = "red";
            compScore++;
            compScoreDisplay.textContent = compScore;
            break;
        case "IT'S A TIE":
            resultDisplay.style.color = "white";
            break;
    }
}