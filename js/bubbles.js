var scores = [60, 50, 60, 58, 54, 54,     
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
		      41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25, .33, .31, 
             .25, .29, .27, .22, .31, .25, .25, .33, 
             .21, .25, .25, .25, .28, .25, .24, .22,
             .20, .25, .30, .25, .24, .25, .25, .25, 
             .27, .25, .26, .29];

//calls function to find high score and displays it
var highScore = highestScore(scores);
display("Bubbles tests: " + scores.length);
display("Highest bubble score: " + highScore);

//shows best results
var bestSolutions = bestResults(scores, highScore);
display("Solutions with the highest score: " + bestSolutions);

//find most effective solution
var mostCostEffective = mostCostEffectiveSolution(bestSolutions, costs);

// display the results
display("Bubble Solution #" + mostCostEffective + " is the most cost effective");

//accepts the scores as input and returns the highest one
function highestScore(scores) {
	var highScore = 0;
	var output;

	//loops through all the scores and displays them, as well as tracking which is highest
	for (var i = 0; i < scores.length; i++) {
		output = "Bubble solution " + i + " score: " + scores[i];
		display(output);

		if (scores[i] > highScore) {
			highScore = scores[i];
		}
	}
	return highScore;
}

//takes scores and the highest score and finds all the ones with the same score, if there are any others
function bestResults(scores, highScore) {
	var bestSolutions = [];

	//loops through and determines if there are any matching scores
	for (var i = 0; i < scores.length; i++) {
		if (scores[i] == highScore) {
			bestSolutions.push(i);
		}
	}
	return bestSolutions;
}

//loops through all of the solutions with the best score and determines which one is the least costly to produce
function mostCostEffectiveSolution(bestSolutions, costs) {
	var cost = 1;
	var currentSolution;
	var lowestCost;

	for (var i = 0; i < bestSolutions.length; i++) {
		currentSolution = bestSolutions[i];
		if (cost > costs[currentSolution]) {
			lowestCost = currentSolution;
			cost = costs[currentSolution];
		}
	}
	return lowestCost;
}

//displays input to the console and to the webpage
function display(text) {
	console.log(text);
	document.write(text + "<br />");
}