// Questions / things I need to look up
// - Syntax for evaluating human input (Boolean logic)
// - Syntax for loops
// - Which variables should be local / global?

// Keep track of player scores and inputs
let playerScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = 0;

// Get the human choice
    // x Create a function called getHumanChoice to get the human choice
    // x GET human input using prompt() 
    // x Store input
    // x make the input case insensitive (store everything as lowercase)
    // x error handling for invalid input not needed yet
    // x PRINT humanChoice to console.log (with standardized formatting)
    // x RETURN humanChoice
function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?");
    console.log("You chose: " + humanChoice);
    if (humanChoice.toLowerCase() === "rock") return 'r';
    else if (humanChoice.toLowerCase() === "paper") return 'p';
    else if (humanChoice.toLowerCase() === "scissors") return 's';
    else return 0;
}

// Get the computer choice
function getComputerChoice() {
    // Generate a number between 0 and 2 inclusive
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) return 'r';
    else if (computerChoice === 1) return 'p';
    else if (computerChoice === 2) return 's';
    // This should never trigger, but just in case...
    else{ 
        console.log("Math Error - you should not be seeing this message.");
        return 0;
    }
}

// Play a single round
    // create a function to play a single round
    // CALL the functions to get computer choice and human choice
    // EVALUATE winner
    // increment the scores based on round winner and OUTPUT round result to console
function playRound(){
    humanChoice = getComputerChoice();
    computerChoice = getHumanChoice();

    // Result: Draw - both choices are same.
    if (humanChoice === computerChoice){
        // print draw message
        // do not increment score counter
    }
    
    // Result: Won - 1 of 3 scenarios
    else if (
        humanChoice === 'r' && computerChoice === 's' // Rock beats scissor
        || humanChoice === 'p' && computerChoice==='r' // Paper beats rock
        || humanChoice === 's' && computerChoice === 'p' // Scissors beats paper
    ){

        // print winner message
        // increment score counter
    }

    // Result: Lost - if not a draw and not a win, must be a loss so no test needed
    else {
        // print loser message
        // increment score counter
    } 
}



// Play the entire game - MAIN function
    // CALL the single round function 5 times with a loop 
        // Create a loop
        // call playRound() and store results
        // Increment scores
        // output results to console.log()
    // OUTPUT final result

// Ideas & features outside the scope of this project
    // Let the computer "cheat" by weighting the "random" choice towards paper, because the human player
    //     is more likely to choose rock (its the first in the list and easiest to type)
    // Let the player cheat with secret input options - ie.: bomb beats everything
    // Show the running score in the HTML page, and stats about games won/lost
    // Create logging so I can review how people played the game and what they chose
    // Create a web page for showing lifetime / historical player stats - leaderboard? Fancy graphs?
    // More robust error handling for human input
    // Buttons to click on instead of relying on typed input - covered in later lesson
    // Simplify and condense code - covered in later lesson