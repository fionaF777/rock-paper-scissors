let humanScore = 0, computerScore = 0, rounds = 0;
const totalRounds = 5;

const btnContainer = document.getElementById("btn-container");
const result = document.getElementById("result");
const humanScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");

btnContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON") {
        const humanChoice = e.target.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        humanScoreDisplay.innerText = `User: ${humanScore}`;
        computerScoreDisplay.innerText = `Computer: ${computerScore}`;

        rounds++;
        showResult();
    }
});

function showResult() {
    const scores = document.createElement("p");
    const winner = document.createElement("p");
    if( rounds == 5) {
        winner.innerText = humanScore == computerScore ? "It's a tie!" : humanScore > computerScore ? "You win the game!" : "Computer wins the game!";
        
        scores.innerText = `Final Score: You score ${humanScore}  -  computer scores ${computerScore}`; 

        result.append(scores, winner);
        resetGame();
    }
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// function getHumanChoice(choice) {
//     choice = prompt("Enter rock, paper, or scissors:" ).trim().toLowerCase();
//     return choice;
// }

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

// function playGame() {
//     while(rounds < totalRounds) {
//         playRound(getHumanChoice(),getComputerChoice());
//         rounds++;
//     }

//    console.log("Final Score: You " + humanScore + " - " + computerScore + " Computer");

//     if(humanScore > computerScore) {
//         console.log("You win the game!");
//     } else if(humanScore < computerScore) {
//         console.log("You lose the game!");
//     } else {
//         console.log("The game is a tie!");
//     }

//     console.log("The game will reset in 5 seconds...");

//    resetGame();
// }

//playGame();

function resetGame() {
    setTimeout(() => {
        const reset = prompt("Do you want to play again? (yes/no)").trim().toLowerCase();
        if (reset === "yes") {
            rounds = 0;
            humanScore = 0;
            computerScore = 0;
            alert("Game has been reset! Let's play again.");
            result.innerHTML = ""; 
            humanScoreDisplay.innerText = "User: 0";
            computerScoreDisplay.innerText = "Computer: 0";
            //playGame();
        } else {
            result.innerHTML = "Thanks for playing!";
        }
    }, 3000);
}

