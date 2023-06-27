function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissors"];
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

function writeWinner(pS, cS, result) {
    if (result === "tie") {
        console.log("it's a tie of "+ cS +" !");
    } else if(result === "win") {
        console.log("You win! " + pS + " beats " + cS);
    } else {
        console.log("You lose! " + cS + " beats " + pS);
    }
}

function playRound(playerSelection, computerSelection) {
    let pS = playerSelection.toLowerCase();
    let cS = computerSelection.toLowerCase();
    if(pS === cS) {
            console.log("it's a tie of "+ cS +" !");
            return ("tie");
    } else if((pS === "rock" && cS === "scissors") || 
        (pS === "paper" && cS === "rock") ||
        (pS === "scissors" && cS === "paper")) {
            console.log("You win! " + pS + " beats " + cS);
            return("win");
    } else if((cS === "rock" && pS === "scissors") || 
        (cS === "paper" && pS === "rock") ||
        (cS === "scissors" && pS === "paper")) {
            console.log("You lose! " + cS + " beats " + pS);
            return("lose");
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0;i<5;i++){
        let playerSelection = window.prompt("what do you want to play?");
        let computerSelection = getComputerChoice();
        currentRoundResult = playRound(playerSelection, computerSelection);
        if(currentRoundResult === "win") {
            playerScore +=1;
        } else if(currentRoundResult === "lose") {
            computerScore +=1;
        }
    }
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
}

game();