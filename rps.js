let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

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

const rulesBtn = document.getElementById("rules-btn");
const modal = document.querySelector(".modal");
const rulesText = document.querySelector(".rules-text");

// Show the rules modal
rulesBtn.addEventListener('click', () => {
    modal.style.display = 'block'; 
    rulesText.classList.add('show'); // Applies fade-in animation in CSS
    rulesText.classList.remove('hide'); // Applies fade-out animation in CSS
});

// Hide the rules modal by clicking anywhere - modal covers whole document 
modal.addEventListener('click', () => {
    rulesText.classList.add('hide');
    rulesText.classList.remove('show');
    rulesText.addEventListener('animationend', () => {
        modal.style.display = 'none';
    }, {once: true}); // prevents running on the fade-in animationend trigger
});

function playRound(playerChoice){
    console.log(playerChoice);
    if (gameOver) return;

    // Generate a number between 1-5 inclusive to choose from 5 options
    const computerChoice = choices[Math.floor(Math.random() * 5)];
    const result = determineWinner(playerChoice, computerChoice);

    updateScores(result.outcome);
    displayResult(result, playerChoice, computerChoice)
    
    if (playerScore > 4 || computerScore > 4 ){
        endGame()
    }
}

function determineWinner(player, computer){
    if (player === computer) {
        return { outcome: 'tie', reason: '' };
    }
    if (winConditions[player] && winConditions[player][computer]) {
        return { 
            outcome: 'win', 
            reason: `${player} ${winConditions[player][computer]} ${computer}`
        };
    }
    return { 
        outcome: 'lose',
        reason: `${computer} ${winConditions[computer][player]} ${player}`
    };
}

function updateScores(outcome){
    if (outcome === 'win') {
        playerScore++;
        document.getElementById('player-score').textContent = playerScore;
    } else if (outcome ==='lose') {
        computerScore++;
        document.getElementById('computer-score').textContent = computerScore;
    }
}

function displayResult(result, playerChoice, computerChoice) {
    // This part will be different
}

function endGame() {
    gameOver = true;
    const choiceButtons = document.querySelectorAll('.choiceButton');
    choiceButtons.forEach(btn => btn.classList.add('disabled'));

    if (playerScore > computerScore){ 
        // >winner message here<
        //console.log("Final result: Player wins! Congrats!");
    }
    else {
        // >lose message here< 
        //console.log("Final result: Computer wins! Better luck next time!");
    }
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    gameOver = false;

    const choiceButtons = document.querySelectorAll('.choiceButton');
    choiceButtons.forEach(btn => btn.classList.remove('disabled'));

    // template: document.getElementById('').textContent = ;
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;

    // todo: Clear messages
}