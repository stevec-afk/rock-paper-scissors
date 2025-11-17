# rock-paper-scissors
A simple rock paper scissors game for TOP
https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

Link to live site: https://stevec-afk.github.io/rock-paper-scissors/



Brainstorming ideas & features that were never implemented:
- Branch idea: text-only mode, oldschool adventure style! (learn about sanitizing user input) Reason: Out of scope.
- Branch idea: 2-player mode, hotseat style - Reason: Out of scope.
- Let the computer "cheat" by weighting the "random" choice towards paper, because the human player is more likely to choose rock (its the first in the list and easiest to type) - Reason: This only makes sense in text-only mode, UI has clickable buttons now.
- Let the player cheat with secret input options - ie.: bomb beats everything. - See above reason.
- More robust error handling for typed human input (TOP project page explicitly says don't worry about this yet) - See above reason
- Option to unlock "advanced mode", which turns the game into rock-paper-scissors-lizard-spock - Reason: This is now the default version of the game.
- Show the running score in the HTML page instead of console, and show stats about games won/lost - Reason: Scoreboard implemented, but logging stats is too complex and out of scope for this project.
- Create logging so I can review how people played the game and what they chose. See above reason
- Create a web page for showing lifetime / historical player stats - leaderboard? Fancy graphs? - See above reason
- Add animations each round for "1 - 2 - 3 - GO!" - Reason: These kind of animations are obnoxious and make the user experience worse by forcing you to wait. 
