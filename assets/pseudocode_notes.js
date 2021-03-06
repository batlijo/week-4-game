//The player will have to guess the answer, just like in Hangman. This time, though, the player will guess with numbers instead of letters.

//Here's how the app works:

//There will be four crystals displayed as buttons on the page.
//CREATE FOUR CRYSTAL BUTTONS

//The player will be shown a random number at the start of the game.
//SHOW RANDOM NUMBER TO BEGIN GAME, HOW DO YOU DO THIS

//When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
//USE FUNCTION EVENT, ON CLICK ADD POINTS TO PLAYERS SCORE.

//Your game will hide this amount until the player clicks a crystal.
//MAKE SURE TO CONSOLE LOG THIS TO MAKE SURE IT IS WORKING SINCE THIS IS SOMETHING YOU WON'T BE ABLE TO SEE ON THE SCREEN

//When they do click one, update the player's score counter.
//The player wins if their total score matches the random number from the beginning of the game.
//CREATE CONDITIONAL STATEMENT IF TOTAL SCORE === RANDOM NUMBER, PLAYER WINS, ALSO CREATE A FUNCTION THAT YOUR WINS INCREASE BY 1

//The player loses if their score goes above the random number.
//IF SCORE IS > THAN RANDOM NUMBER PLAYER LOSES, ALSO CREATE A FUNCTION THAT YOUR LOSSES INCREASE BY 1

//The game restarts whenever the player wins or loses.
//WRITE FUNCTION TO RESTART GAME WHEN PLAYER WINS0
//WRITE FUNCTION TO RESTART GAME WHEN PLAYER LOSES

//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.



/*Option 1 Game design notes

The random number shown at the start of the game should be between 19 - 120.

Each crystal should have a random hidden value between 1 - 12. */