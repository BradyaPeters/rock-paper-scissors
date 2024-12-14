function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];

    const randomChoice = Math.floor(Math.random() * choices.length);

    const computerChoice = choices[randomChoice];

    return computerChoice;
}

function getHumanChoice() {
    const humanChoice = prompt("Choose between: Rock, Paper, or Scissors");

    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
        
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    if (human === computer) {
        console.log("It's a draw!");
    } else if (
        (human === "rock" && computer === "scissors") || 
        (human === "paper" && computer === "rock") || 
        (human === "scissors" && computer === "paper")
    ) {
        console.log("Human wins! " + human + " beats " + computer + ".");
        humanScore++;
    } else if (
        (human === "rock" && computer === "paper") || 
        (human === "paper" && computer === "scissors") || 
        (human === "scissors" && computer === "rock")
    ) {
        console.log("Computer wins! " + computer + " beats " + human + ".");
        computerScore++;
    } else {
        console.log("Invalid input. Please choose Rock, Paper, or Scissors.");
    }
}

function playGame() {

    while (humanScore < 5 && computerScore < 5) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        
        if (humanScore === 5) {
            console.log("Human is the first to five wins!");
        }
        else if (computerScore === 5) {
            console.log("Computer is the first to five wins!");
        }      
    }
}

playGame();




