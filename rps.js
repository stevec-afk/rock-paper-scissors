/* ToDo:
- DONE: Remove logic limiting to 5 rounds, and instead make it first to 5 wins
- DONE: Move results to seperate function
- DONE: Add a replay button (whew that was harder than I thought!)
- Create a UI on the HTML pages, including
    - DONE: Start game button to trigger playRound() function
    - Scoreboard
    - Buttons to click for playerChoice()
    - output results of round & game to HTML page instead of console
    - Display icon to show choices
- Add unique language for each scenario, ie.: paper DISPROVES spock.
- Cleanup comments
- Advanced mode: Update the game logic to rock-paper-scissors-lizard-spock (Major feature - new branch, do seperately)
    - Add link to youtube clip of TBBT explaining - https://www.youtube.com/watch?v=pIpmITBocfM
    - Static image showing rules / logic - CC license requires attribution: https://puzzlewocky.com/parlor-games/rock-paper-scissors-lizard-spock/
    - link to original rules on the web - also CC-NC3.0 license, requires attribution: https://www.samkass.com/theories/RPSSL.html
- Text mode: old-school adventure style game played only by console
*/
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let playerChoice = "";
let computerChoice = 0;

const rockButton = document.createElement("button");
rockButton.textContent = "rock";
const paperButton = document.createElement("button");
paperButton.textContent = "paper";
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "scissors";

// Generate a number between 1-3 inclusive to choose from 3 options
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(){
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
    console.log("Current Score - Computer: "+computerScore+", Player: "+playerScore);
    
    if (playerScore > 4 || computerScore > 4 ){
        gameOver()
    }
}

function gameOver() {
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

    rockButton.remove();
    paperButton.remove();
    scissorsButton.remove();

    // Add a button to replay the game
    const replayButton = document.createElement('button');
    replayButton.textContent = "Play again?";
    replayButton.classList.add('startButton');
    gameContainer.appendChild(replayButton);
    initButton = document.querySelector('.startButton');
    replayButton.addEventListener('click', main); 

}

// Main game loop - start on button click
function main(){
    // Reset the game 
    initButton.remove();
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
    console.log("===== NEW GAME =====")

    playerOptions = [rockButton, paperButton, scissorsButton]
    playerOptions.forEach(option => {
        option.addEventListener('click', function () {
            playerChoice = option.textContent;
            playRound();
        });
        gameContainer.appendChild(option);
    });
}

const gameContainer = document.getElementById('gameContainer');
let initButton = document.querySelector('.startButton');
initButton.addEventListener('click', main);
