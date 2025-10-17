/* Questions / things I need to look up: 
- None! 
*/

/* Keep track of player scores and inputs */
let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = 0;
const drawScore = 0;

/* Get the player choice */
function getPlayerChoice() {
    playerChoice = prompt("Rock, paper, or scissors?"); 
    answer = playerChoice.toLowerCase(); 
    // todo: This is where we would do error handling and account for other inputs
    return answer;
}

/* Get the computer choice */
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

/* Play a single round */
function playRound(){
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    console.log("You chose: " + playerChoice)
    console.log("Computer chose: " + computerChoice)

    // Result: Draw - both choices are same.
    if (playerChoice === computerChoice){
        console.log("Draw!")
    }
    
    // Result: Won - 1 of 3 scenarios
    else if (
        playerChoice === 'rock' && computerChoice === 'scissors' // Rock beats scissor
        || playerChoice === 'paper' && computerChoice==='rock' // Paper beats rock
        || playerChoice === 'scissors' && computerChoice === 'paper' // Scissors beats paper
    ){
        console.log("You win!")
        playerScore++;
    }

    // Result: Lost - if not a draw and not a win, must be a loss so no test needed
    else {
        console.log("Computer wins!")
        computerScore++;
    } 
}

function main() {
    // play 5 rounds
    for (let i=0; i<5; i++){
       playRound(); 
    }
    
    //Print results
    console.log("Game completed! Results: ")
    console.log("Rounds won: " + playerScore)
    console.log("Rounds lost: " + computerScore )
    drawScore = 5 - playerScore - computerScore
    console.log("Draws: " + drawScore)

    if (playerScore > computerScore){ 
        console.log("Final result: Player wins! Congrats!");
    }
    else if (computerScore > playerScore){ 
        console.log("Final result: Computer wins! better luck next time!");
    }
    else { 
        console.log("Its a draw!")
    }
}

main()


/* Ideas & features outside the scope of this project:
- Let the computer "cheat" by weighting the "random" choice towards paper, because the human player
    is more likely to choose rock (its the first in the list and easiest to type)
- Let the player cheat with secret input options - ie.: bomb beats everything
- Option to unlock "advanced mode", which turns the game into rock-paper-scissors-lizard-spock
- Show the running score in the HTML page instead of console, and show stats about games won/lost
- Create logging so I can review how people played the game and what they chose
- Create a web page for showing lifetime / historical player stats - leaderboard? Fancy graphs?
- More robust error handling for human input (TOP project page explicitly says don't worry about this yet)
- Buttons to click on instead of relying on typed input - covered in later lesson
- Simplify and condense code - covered in later lesson
*/