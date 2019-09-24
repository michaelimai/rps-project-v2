// pre-game introduction
alert ("Ready to play? Best of 5 wins!");

// computer randomly chooses rock, paper, or scissors
function computerPlay () {
    let options = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random () * 3)
    return options[random];
}

// player manually chooses rock, paper, or scissors
function playerPlay () {
    let options = window.prompt ("Choose rock, paper, or scissors:");
    options = options.toLowerCase ();
    return options;
}

// play a single round of the game
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert ("Draw. Try again!");
        return "draw";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert ("Your rock beats the computer's scissors!"); 
        return "win"; 
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        alert ("The computer's paper beats your rock 😢");
        return "lose";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert ("Your paper beats the computer's rock!");
        return "win";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert ("The computer's scissors beat your paper 😢");
        return "lose";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert ("Your scissors beat the computer's paper!");
        return "win";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert ("The computer's rock beats your scissors 😢");
        return "lose";
    }
}

// play 5 rounds of the game
function game () {

    let playerScore = 0;
    let computerScore = 0;
    let playerChoice;
    let computerChoice;

    while ((playerScore < 5) && (computerScore < 5)) {
        playerChoice = playerPlay ();
        computerChoice = computerPlay ();
        switch (playRound(playerChoice, computerChoice)) {
            case ("win"): console.log ("You won this round!");
                playerScore++;
                break;
            case ("lose"): console.log ("The computer won this round 😢");
                computerScore++;
                break;
            case ("draw"): console.log ("Draw. Try again!");
        }

        alert ("Your Score: " + playerScore + " Computer Score: " + computerScore);
        console.log ("Your Score: " + playerScore + " Computer Score: " + computerScore);

        if (playerScore === 5) {
            console.log ("You win!");
            alert ("Congrats! You've won the best of 5 games!");
        } else if (computerScore === 5) {
            console.log ("You lose!");
            alert ("Game Over. The computer has won the best of 5 games. Try again next time!");
        }
    }
}

game ();