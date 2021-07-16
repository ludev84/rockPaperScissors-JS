// Create function that plays for the computer
// Returns: "Rock" | "Paper" | "Scissors".
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "Rock";
    } else if (randomNum === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Create a function that plays player vs the computer round and
// outputs a message if it's a tie, win, lose or invalid input
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You win! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            return "You lose! Paper beats Rock";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            return "You lose! Scissors beats Paper";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win! Scissors beats Paper";
        } else if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors";
        }
    }
    else {
        return 'You need to input either Rock, Paper or Scissors';
    }
}

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const body = document.body;
const resultsContainer = document.querySelector("#results-container");
const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");
const buttons = document.querySelectorAll("button");

// Alertar el ID de cada boton al ser presionado
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.id;
        computerSelection = computerPlay();
        let currentGame = playRound(playerSelection, computerSelection);

        if (currentGame.substr(4,4) === "win!") playerScore += 1;
        else if (currentGame.substr(4,4) === "lose") computerScore += 1;

        resultDiv.textContent = currentGame;
        scoreDiv.textContent = `You: ${playerScore} - Computer: ${computerScore}`;

        if (playerScore === 5 || computerScore === 5) {
            if (playerScore === 5) alert("You won!");
            else if (computerScore === 5) alert("You were defeated.");
            playerScore = 0;
            computerScore = 0;
            // Limpiar pantalla de resultados
            resultDiv.textContent = ""; 
            scoreDiv.textContent = "";
        }
    });
});