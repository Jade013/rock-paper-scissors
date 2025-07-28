let popup = document.getElementById("popup");
let closeButton = document.getElementById("close-button");
let gameContainer = document.getElementById("game-container");
let winnerPopup = document.getElementById("winner-popup");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

var image = document.querySelector("#human-choice-image");
var computerImage = document.querySelector("#computer-choice-image");

let computerChoice = 0;

let humanScore = 0;
let computerScore = 0;

closeButton.addEventListener("click", function() {
    popup.classList.add("close");
    gameContainer.classList.add("open");
});

function resetPlay(){
    humanScore = 0;
    computerScore = 0;
    document.getElementById("human-score").innerText = 0;
    document.getElementById("computer-score").innerText = 0;
    winnerPopup.classList.remove("open");
    enabledPlayButtons();
} 

function getComputerChoice() {
    return computerChoice = Math.floor(Math.random() * 3) + 1;    
} 

function disablePlayButtons () {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function enabledPlayButtons() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

function interpretComputerChoice(computerChoice) {
    switch (computerChoice) {
        case 1:
            computerImage.src = "assets/noun-rock-7664846.svg";
            computerImage.alt = "Rock";
            return computerChoice = "rock";
            break;
        case 2:
            computerImage.src = "assets/noun-paper-7664844.svg";
            computerImage.alt = "Paper";
            return computerChoice = "paper";
            break;
        case 3:
            computerImage.src = "assets/noun-scissors-7664845.svg";
            computerImage.alt = "Scissors";
            return computerChoice = "scissors";
            break;
    }
}

function deliberation (humanChoice, computerChoice) {
    // console.log("deliberation started");
    // console.log("Human choice: " + humanChoice);
    // console.log("Computer choice: " + computerChoice);

    if (humanChoice === "rock" && computerChoice === "scissors") {
        // console.log("Human wins!");
        humanScore++;
        //document.getElementById("human-click-choice").innerText = "Human wins!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        // console.log("Human wins!");
        humanScore++;
        // document.getElementById("human-click-choice").innerText = "Human wins!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        // console.log("Human wins!");
        humanScore++;
        //document.getElementById("human-click-choice").innerText = "Human wins!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        // console.log("Computer wins!");
        computerScore++;
        //document.getElementById("human-click-choice").innerText = "Computer wins!";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        // console.log("Computer wins!");
        computerScore++;
        //document.getElementById("human-click-choice").innerText = "Computer wins!";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        // console.log("Computer wins!");
        computerScore++;
        //document.getElementById("human-click-choice").innerText = "Computer wins!";
    } 
}

function checkScores(humanScore, computerScore) {
    // console.log("Checking scores...");
    // console.log("Human score: " + humanScore); 
    // console.log("Computer score: " + computerScore);
    if (humanScore === 5) {
        document.getElementById("winner").innerText = "HUMAN";
        winnerPopup.classList.add("open");
        disablePlayButtons();

    } else if (computerScore === 5) {
        document.getElementById("winner").innerText = "COMPUTER";
        winnerPopup.classList.add("open");
        disablePlayButtons();
    }
}

function displayScore(humanScore, computerScore) {
    document.getElementById("human-score").innerText = humanScore;
    document.getElementById("computer-score").innerText = computerScore;
}

function changeHumanChoiceText(choice) {
    document.getElementById("human-click-choice").innerText = choice;
}

function changeComputerChoiceText(choice) {
    document.getElementById("computer-math-choice").innerText = choice.toUpperCase();
}


function playRock() {
    image.src = "assets/noun-rock-7664846.svg";
    image.alt = "Rock";
    humanChoice = "rock";
    changeHumanChoiceText("ROCK");
    getComputerChoice()
    changeComputerChoiceText(interpretComputerChoice(computerChoice));
    deliberation(humanChoice, interpretComputerChoice(computerChoice));
    displayScore(humanScore, computerScore);
    checkScores(humanScore, computerScore);

    // debugging
    // console.log("Human choice: Rock");
    // console.log("Computer choice: " + getComputerChoice());
    // console.log("Computer choice interpreted: " + interpretComputerChoice(computerChoice));
}

function playPaper() {
    image.src = "assets/noun-paper-7664844.svg";
    image.alt = "Paper";
    humanChoice = "paper";
    changeHumanChoiceText("PAPER");
    getComputerChoice()
    changeComputerChoiceText(interpretComputerChoice(computerChoice));
    deliberation(humanChoice, interpretComputerChoice(computerChoice));
    displayScore(humanScore, computerScore);
    checkScores(humanScore, computerScore);

    // debugging
    // console.log("Human choice: Paper");
    // console.log("Computer choice: " + getComputerChoice());
    // console.log("Computer choice interpreted: " + interpretComputerChoice(computerChoice));
    
}

function playScissors() {
    image.src = "assets/noun-scissors-7664845.svg";
    image.alt = "Scissors";
    humanChoice = "scissors";
    changeHumanChoiceText("SCISSORS");
    getComputerChoice()
    changeComputerChoiceText(interpretComputerChoice(computerChoice));
    deliberation(humanChoice, interpretComputerChoice(computerChoice));
    displayScore(humanScore, computerScore);
    checkScores(humanScore, computerScore);

    // // debugging
    // console.log("Human choice: Scissors");
    // console.log("Computer choice: " + getComputerChoice());
    // console.log("Computer choice interpreted: " + interpretComputerChoice(computerChoice));
    
}

