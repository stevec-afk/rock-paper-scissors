let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = 0;
let drawScore = 0;

function getPlayerChoice() {
    playerChoice = prompt("Rock, paper, or scissors?"); 
    answer = playerChoice.toLowerCase(); 
    // This is where we would do error handling and account for other inputs - out of scope for now
    return answer;
}

function getComputerChoice() {
    let randnum = Math.floor(Math.random()*3); // Generate a number between 0 and 2 inclusive
    if (randnum === 0) return 'rock';
    else if (randnum === 1) return 'paper';
    else if (randnum === 2) return 'scissors';
    // This should never trigger, but just in case...
    else{ 
        console.log("ComputerChoice() Error - you should not be seeing this message.");
        return 0;
    }
}

function playRound(){
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    console.log("You chose: " + playerChoice)
    console.log("Computer chose: " + computerChoice)

    // Result: Draw - both choices are same.
    if (playerChoice === computerChoice){
        console.log("Draw!")
        drawScore++
    }
    
    // Result: Player Won - 1 of 3 scenarios
    else if (
        playerChoice === 'rock' && computerChoice === 'scissors' // Rock beats scissor
        || playerChoice === 'paper' && computerChoice==='rock' // Paper beats rock
        || playerChoice === 'scissors' && computerChoice === 'paper' // Scissors beats paper
    ){
        console.log("You win!")
        playerScore++;
    }

    // Result: Player Lost - if not a draw and not a win, must be a loss so no test needed
    else {
        console.log("Computer wins!")
        computerScore++;
    } 
}

function main() {
    for (let i=0; i<5; i++){
       playRound(); 
    }
    
    console.log("Game completed! Results: ")
    console.log("Rounds won: " + playerScore)
    console.log("Rounds lost: " + computerScore )
    console.log("Draws: " + drawScore)

    if (playerScore > computerScore){ 
        console.log("Final result: Player wins! Congrats!");
    }
    else if (computerScore > playerScore){ 
        console.log("Final result: Computer wins! Better luck next time!");
    }
    else { 
        console.log("Its a draw!")
    }
    console.log("Refresh page to play again.")
}

main()

