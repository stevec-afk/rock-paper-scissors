let playerScore = 0;
let computerScore = 0;
let gameOver = false;
let spockClicks = 0;

const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

const emojis = {
    Rock: '🪨',
    Paper: '📄',
    Scissors: '✂️',
    Lizard: '🦎',
    Spock: '🖖'
};

const winConditions = {
    Rock: {
        Scissors: 'crushes',
        Lizard: 'crushes'
    },
    Paper: {
        Rock: 'covers',
        Spock: 'disproves'
    },
    Scissors: {
        Paper: 'cuts',
        Lizard: 'decapitates'
    },
    Lizard: {
        Paper: 'eats',
        Spock: 'poisons'
    },
    Spock: {
        Rock: 'vaporizes',
        Scissors: 'smashes'
    }
};

const rulesBtn = document.getElementById("rules-btn");
const modal = document.querySelector(".modal");
const rulesText = document.querySelector(".rules-text");

// Show the rules modal
rulesBtn.addEventListener('click', () => {
    console.log('Showing rules modal...')
    modal.style.display = 'block'; 
    rulesText.classList.add('show'); // Applies fade-in animation in CSS
    rulesText.classList.remove('hide'); // Applies fade-out animation in CSS
});

// Hide the rules modal by clicking anywhere - modal covers whole document 
modal.addEventListener('click', () => {
    console.log('Closing rules modal...')
    rulesText.classList.add('hide');
    rulesText.classList.remove('show');
    rulesText.addEventListener('animationend', () => {
        modal.style.display = 'none';
    }, {once: true}); // prevents running on the fade-in animationend trigger
});

function playRound(playerChoice) {
    let computerChoice = 0;
    if (gameOver) return;

    // Time to cheat for the memes!
    if (playerChoice == 'Spock') {  
        spockClicks++;
        computerChoice = choices[4];
    } else {
        // Generate a number between 1-5 inclusive to choose from 5 options
        computerChoice = choices[Math.floor(Math.random() * 5)];
    }

    const result = determineWinner(playerChoice, computerChoice);
    updateScores(result.outcome);
    output(`You chose ${emojis[playerChoice]} - ${result.reason}.`);

    // Give the player a hint if they click Spock 4 times
    if (spockClicks == 4) {
        console.log('Note: the computer always chooses spock if you do!');
        console.log('...Who said the game had to be fair? 🤪');
        console.log('See: https://www.youtube.com/watch?v=jnfz_9d9BUA&t=108s');
        output("...wait something seems odd. Better check the console log! ⚠️")
        spockClicks = 0;
    }

    if (playerScore > 4 || computerScore > 4 ){
        endGame();
    }
}

function determineWinner(player, computer){
    if (player === computer) {
        return { 
            outcome: 'tie', 
            reason: `Computer also chose ${computer}! No points` 
        };
    }
    else if (winConditions[player] && winConditions[player][computer]) {
        return { 
            outcome: 'win', 
            reason: `${player} ${winConditions[player][computer]} ${computer}`
        };
    } else {
        return { 
            outcome: 'lose',
            reason: `${computer} ${winConditions[computer][player]} ${player}`
        };
    }
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

function endGame() {
    gameOver = true;
    const choiceButtons = document.querySelectorAll('.choiceButton');
    choiceButtons.forEach(btn => btn.classList.add('disabled'));
    output('-------');
    output("Click 'New Game' below to start a new game.");
    if (playerScore > computerScore){ 
        output(`Game over. Final result: Player wins ${playerScore} - ${computerScore}! Congrats! 🏆`);
    } else {
        // Winner's score is read first because sports. Trust me bro.
        output(`Game over. Final result: Computer wins ${computerScore} - ${playerScore}. Better luck next time!`);
    }
}

// Takes a string and inserts it in a list in the output box on the HTML page
function output(message) {
    const messageList = document.getElementById('output');
    const newItem = document.createElement('li');

    if (message == 'clear') { 
        messageList.textContent = ''; // No need to use .innerHTML!
        return;
    } else {
        newItem.textContent = message;
        messageList.prepend(newItem);
    }
}

function resetGame() {
    console.clear();
    console.log('Starting new game...');
    playerScore = 0;
    computerScore = 0;
    spockClicks = 0;
    gameOver = false;

    const choiceButtons = document.querySelectorAll('.choiceButton');
    choiceButtons.forEach(btn => btn.classList.remove('disabled'));

    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;

    output('clear');
    output('Starting new game...');
    output('Choose your move!');
}