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

// Create a function that asks the user to input a string in a prompt windows
// The user should input rock, paper or scissors.
function playerPlay() {
    return prompt("Make your choice: ");
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

// game function plays 5 rounds
// and logs in the console the win, lose, tie or invalid message.
// At the end of the loop, it alerts a win or lose message,
// followed by your number of wins or loses
function game() {
    let wins = 0;
    let loses = 0;
    // Play 5 rounds of the game and add counters to wins and loses variables
    for (let i = 0; i < 5; i++) {
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        let currentGame = playRound(playerSelection, computerSelection)
        
        if (currentGame.substr(4,4) === "win!") wins += 1;
        else loses += 1;
        console.log(currentGame);
    }
    // At the end of the loop, it shows you a message
    // followed by your number of loses/wins
    if (wins > loses) {
        let message = `Congratulations, you won ${wins} out of 5!`
        alert(message)
    }
    else {
        let message = `You lose, you were defeated ${loses} times!`
        alert(message);
    }
}

let playerSelection;
let computerSelection;
game();