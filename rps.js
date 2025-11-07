let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let playerChoice = "";
let computerChoice = 0;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.createElement("scissors");
const lizardButton = document.createElement("lizard");
const spockButton = document.createElement("spock");

const winConditions = {
    rock: {
        scissors: 'crushes',
        lizard: 'crushes'
    },
    paper: {
        rock: 'covers',
        spock: 'disproves'
    },
    scissors: {
        paper: 'cuts',
        lizard: 'decapitates'
    },
    lizard: {
        paper: 'eats',
        spock: 'poisons'
    },
    spock: {
        rock: 'vaporizes',
        scissors: 'smashes'
    }
};

// Modal visibility for rules button
const rulesBtn = document.getElementById("rules-btn");
const closeBtn = document.querySelector(".close");
const modal = document.querySelector(".modal");
rulesBtn.onclick = () => (modal.style.display = "block");
closeBtn.onclick = () => (modal.style.display = "none");

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

    // Add a button to replay the game
    const replayButton = document.getElementById('reset-btn');
    replayButton.addEventListener('click', main); 
}

// Main game loop - start on button click
function main(){
    // Reset the game 
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