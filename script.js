function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    const computerChoiceIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[computerChoiceIndex]

    return computerChoice;
}


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    let inputMessage;
    let resultMessage;


    if (humanChoice === computerChoice) {
        inputMessage = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        inputMessage = `Human wins! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    } else {
        inputMessage = `Computer wins! ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
    }


    resultMessage = `Current Score - Computer: ${computerScore} | Human: ${humanScore}`;


    document.querySelector("#input").textContent = inputMessage;
    document.querySelector("#result").textContent = resultMessage;


    if (humanScore === 5) {
        document.querySelector("#gameWinner").textContent = "Human wins the game!";
        showGoAgainButton();


    } else if (computerScore === 5) {
        document.querySelector("#gameWinner").textContent = "Computer wins the game!";
        showGoAgainButton();
    }
}


function showGoAgainButton() {
    document.querySelector("#goAgainButton").style.display = "block";
}


function setupGame() {
    const rockButton = document.querySelector("#rockButton");
    const paperButton = document.querySelector("#paperButton");
    const scissorsButton = document.querySelector("#scissorsButton");


    rockButton.addEventListener("click", () => {
        if (humanScore < 5 && computerScore < 5) {
            const humanChoice = "rock";
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        }
    });


    paperButton.addEventListener("click", () => {
        if (humanScore < 5 && computerScore < 5) {
            const humanChoice = "paper";
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        }
    });


    scissorsButton.addEventListener("click", () => {
        if (humanScore < 5 && computerScore < 5) {
            const humanChoice = "scissors";
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        }
    });


    document.querySelector("#goAgainButton").addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        document.querySelector("#gameWinner").textContent = "";
        document.querySelector("#input").textContent = "";
        document.querySelector("#result").textContent = "Current Score(s) - Computer: 0 - Human: 0";
        document.querySelector("#goAgainButton").style.display = "none";
    });
}


setupGame();






