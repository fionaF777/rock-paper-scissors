let humanScore = 0, computerScore = 0, rounds = 0;
const totalRounds = 5;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getHumanChoice(choice) {
    choice = prompt("Enter rock, paper, or scissors:" ).trim().toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        humanScore++;
        computerScore++;
    } else if(humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
    } else if(humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
    } else if(humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
    } 
    else {
        computerScore++;
    }
}

function playGame() {
    while(rounds < totalRounds) {
        playRound(getHumanChoice(),getComputerChoice());
        rounds++;
    }

    console.log("Final Score: You " + humanScore + " - " + computerScore + " Computer");

    if(humanScore > computerScore) {
        console.log("You win the game!");
    } else if(humanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a tie!");
    }

    // reset the game after 5 seconds
    // to allow the user to play again
    // without refreshing the page
    // or restarting the program
    console.log("The game will reset in 5 seconds...");

   resetGame();
    

}

playGame();

function resetGame() {
    setTimeout(() => {
        const reset = prompt("Do you want to play again? (yes/no)").trim().toLowerCase();
        if (reset === "yes") {
            rounds = 0;
            humanScore = 0;
            computerScore = 0;
            console.clear();
            console.log("Game has been reset! Let's play again.");
            playGame();
        } else {
            console.log("Thanks for playing!");
        }
    }, 5000);
}

