let playerScore = 0;
let computerScore = 0;

let rockButton = document.querySelector("#rock-button");
let paperButton = document.querySelector("#paper-button");
let scissorsButton = document.querySelector("#scissors-button");

rockButton.addEventListener("click", playerRock);
paperButton.addEventListener("click", playerPaper);
scissorsButton.addEventListener("click", playerScissors);

// computer randomly chooses rock, paper, or scissors
function computerPlay () {
    let options = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random () * 3)
    return options[random];
}

// player manually clicks rock
function playerRock () {
    if (playerScore<5 && computerScore<5) {
        let computerChoice = computerPlay ();
        if (computerChoice == "rock") {
            results.textContent = "Draw. Try again!";
            score.textContent = "Your Score: " + playerScore + " Computer Score: " + computerScore;
        } else if (computerChoice == "scissors") {
            playerScore++;
            results.textContent = "Your rock beats the computer's scissors!";
            score.textContent = "Your Score: " + playerScore + " Computer Score: " + computerScore;
            if (playerScore == 5) {
                results.textContent = "You won! Reload the page to play again!"
            }
        } else if (computerChoice == "paper") {
            computerScore++;
            results.textContent = "The computer's paper beats your rock...";
            score.textContent = "Your Score: " + playerScore + " Computer Score: " + computerScore;
            if (computerScore == 5) {
                results.textContent = "You lost...reload the page to try again!"
            }
        }
    }
}

// player manually clicks paper
function playerPaper () {
    if (playerScore<5 && computerScore<5) {
        let computerChoice = computerPlay ();
        if (computerChoice == "rock") {
            results.textContent = "Draw. Try again!";
            score.textContent = "Your Score: " + playerScore + " Computer Score: " + computerScore;
        } else if (computerChoice == "scissors") {
            playerScore++;
            results.textContent = "Your paper beats the computer's rock!";
            score.textContent = "Your Score: " + playerScore + " Computer Score: " + computerScore;
            if (playerScore == 5) {
                results.textContent = "You won! Reload the page to play again!"
            }
        } else if (computerChoice == "paper") {
            computerScore++;
            results.textContent = "The computer's scissors beat your paper...";
            score.textContent = "Your Score: " + playerScore + " Computer Score: " + computerScore;
            if (computerScore == 5) {
                results.textContent = "You lost...reload the page to try again!"
            }
        }
    }
}

//player manually clicks scissors
function playerScissors () {
    if (playerScore<5 && computerScore<5) {
        let computerChoice = computerPlay ();
        if (computerChoice == "rock") {
            results.textContent = "Draw. Try again!";
            score.textContent = "Your Score: " + playerScore + " Computer Score: " + computerScore;
        } else if (computerChoice == "scissors") {
            playerScore++;
            results.textContent = "Your scissors beat the computer's paper!";
            score.textContent = "Your Score: " + playerScore + " Computer Score: " + computerScore;
            if (playerScore == 5) {
                results.textContent = "You won! Reload the page to play again!"
            }
        } else if (computerChoice == "paper") {
            computerScore++;
            results.textContent = "The computer's rock beats your scissors...";
            score.textContent = "Your Score: " + playerScore + " Computer Score: " + computerScore;
            if (computerScore == 5) {
                results.textContent = "You lost...reload the page to try again!"
            }
        }
    }
}