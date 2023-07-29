let playerScore = 0;
let computerScore = 0;

function stopGame() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach( (button) => {
        button.disabled = true;
    })
}

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
    let result = "";
    let winOrLose = "";
    if(pS === cS) {
            result = "it's a tie of "+ cS +" !";
            winOrLose = "tie";
    } else if((pS === "rock" && cS === "scissors") || 
        (pS === "paper" && cS === "rock") ||
        (pS === "scissors" && cS === "paper")) {
            result = "You win! " + pS + " beats " + cS;
            winOrLose ="win";
    } else if((cS === "rock" && pS === "scissors") || 
        (cS === "paper" && pS === "rock") ||
        (cS === "scissors" && pS === "paper")) {
            result = "You lose! " + cS + " beats " + pS;
            winOrLose ="lose";
    }
    document.getElementById('result').innerHTML = result;
    return winOrLose;

}

function game(playerSelection) {
    let computerSelection = getComputerChoice();
    currentRoundResult = playRound(playerSelection, computerSelection);
    if(currentRoundResult === "win") {
        playerScore +=1;
    } else if(currentRoundResult === "lose") {
        computerScore +=1;
    }
    scores = playerScore + " - " + computerScore;
    document.getElementById('scores').innerHTML = scores;
    if(playerScore == 5) {
        document.getElementById('winner-announcement').innerHTML = "YOU WIN! CONGRATULATIONS";
        stopGame();
    }
    if(computerScore == 5) {
        document.getElementById('winner-announcement').innerHTML = "YOU LOSE! NOOB";
        stopGame();
    }
}

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click',() => {
    game("rock");
    console.log("rock");
})

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click',() => {
    game("paper");
    console.log("paper");
})

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click',() => {
    game("scissors");
    console.log("scissors");
})