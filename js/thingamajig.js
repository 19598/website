//displays "clunk" the number of times specified
function clunk(times) {
	var num = times;
	while (num > 0) {
		display("clunk");
		num = num - 1;
	}
}


function thingamajig(size) {
	var facky = 1;
	clunkCounter = 0;
	//if input is 0, the object clanks
	if (size == 0) {
		clunkCounter = -1;//using the display function adds 1 to clunkCounter, so setting clunkCounter to -1 negates that
		display("clank");
	}
	//if input is 1, the object thunks
	else if (size == 1) {
		clunkCounter = -1;
		display("thunk");
	}
	//if input is more than 1, it clunks input! (input factorial) times
	//for example, 5! is 120, so it clunks 120 times
	else {
		//this part calculates the factorial
		//5! goes 5 * 4 * 3 * 2 * 1 = 120
		//However, in a program it is easier to start multiplying the starting number by 1 and then decreasing until the program hits 2, which is what this code does
		while (size > 1) {
			facky = facky * size;
			size = size - 1;
		}
		//clunks the calculated number of times
		clunk(facky);
	}
}

//displays output to the console and the webpage
function display(output) {
	console.log(output);
	document.write(output + "<br />");//<br /> makes a linebreak
	clunkCounter = clunkCounter + 1;//increments the clunkCounter
}

var clunkCounter = 0;

//goes from 1 to 7 and calls thingamajig with the current number
for (i = 1; i <= 7; i++) {
	clunkCounter = 0;
	thingamajig(i);
	display(clunkCounter + " clunks.<br />");
}