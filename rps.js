// Questions / things I need to look up
// 1. How to use math.random
// 2. Syntax for evaluating human input (Boolean logic)
// 3. When do I use semicolons at the end of a line?
// 4. Strings - how to convert input to lowercase
// 5. Syntax for loops
// 6. Which variables should be local / global?

// Keep track of player scores
let playerScore = 0;
let computerScore = 0;

// Get the human choice
    // x Create a function called getHumanChoice to get the human choice
    // x GET human input using prompt() 
    // x Store input
    // make the input case insensitive (store everything as lowercase)
    // x error handling for invalid input not needed yet
    // ? PRINT humanChoice to console.log (with standardized formatting)
    // x RETURN humanChoice
function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?");
    // convert to lowercase here
    console.log("You chose: " + humanChoice);
    if humanChoice == "rock" return 1;
    else if humanChoice == "paper" return 2;
    else if humanChoice == "scissors" return 3;
    // Invalid choice = 0, if getHumanChoice returns 0, rerun round & do not increment counter
    else return 0;
}

// Get the computer choice
    // create a function called getComputerChoice
    // RETURN random(rock | paper | scissors)
    // x use math.random, don't use arrays
function getComputerChoice() {
    // update math.random call - should return 1 2 or 3 
    let computerChoice = math.random()
    return computerChoice
}

// Play a single round
    // create a function to play a single round
    // CALL the functions to get computer choice and human choice
    // EVALUATE winner
    // increment the scores based on round winner and OUTPUT round result to console
function playRound(){
    getComputerChoice() // store this in a variable I guess? 
    getHumanChoice()    // store this in a variable I guess? 
    // Insert logic to evaluate results here
}

// Play the entire game - MAIN function
    // CALL the single round function 5 times with a loop 
        // Create a loop
        // call playRound() and store results
        // Increment scores
        // output results to console.log()
    // OUTPUT final result


// Ideas & features outside the scope of this project
    // Let the computer "cheat" by weighting the "random" choice towards paper, 
       // because the human player is more likely to choose rock (its the first in the list and easiest to type)
    // Show the running score in the HTML page, and stats about games won/lost
    // Create logging so I can review how people played the game and what they chose
    // Create a web page for showing lifetime / historical player stats - leaderboard? Fancy graphs?
    // More robust error handling for human input
    // Buttons to click on instead of relying on typed input
    // Simplify and condense code