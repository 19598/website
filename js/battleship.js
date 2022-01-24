//The use of arrays allows the tracking of where the player has already guessed, so it is more like real battleship
var grid = ["MISS", "MISS", "MISS", "MISS", "MISS", "MISS", "MISS"];//sets up a grid of all misses
var startLoc = Math.floor(Math.random() * 5);//picks a starting location, 0-4
grid.fill("HIT", startLoc, startLoc + 3);//fills 3 grid coordinates with the word HIT instead of MISS
var guesses = 0;//counter for guesses

//Returns -1 if there are no hits left, meaning the player has won. Otherwise, keep looping
while (grid.indexOf("HIT") != -1) {
    var input = getInput();
    check(input);
}

alert("You sunk my battleship!");
alert("You took " + guesses + " guesses to sink the ship. This means your accuracy was " + (3 / guesses * 100) + "%.");

//gets a number from the player
function getInput() {
    var result = prompt("Ready, aim, fire! (enter a number from 0-6):");//gets a number from the player

    //if the player enters a number outside of the allowed range, have them pick a different number
    if (result < 0 || result > 6) {
        alert("Please enter a number from 0-6.");
        result = getInput();
    }

    //if the player picks a number they have already guessed, have them pick a different number
    if (grid[result] == "GUESSED") {
        alert(result + " was already guessed. Please enter a new number.");
        result = getInput();
    }

    //return the proper number
    return result;
}

//checks the player's input
function check(guess) {
    guesses++;//increases the guess counter
    alert(grid[guess]);//tells the player whether they hit or missed, depending upon the value of the cell in the array
    grid[guess] = "GUESSED";//marks the cell that the player picked as GUESSED
}