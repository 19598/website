word = "bottles";
for (i = 99; i > 0; i--) {
	output(i + " " + word + " of pop on the wall");
	output(i + " " + word + " of pop,");
	if (i - 1 == 1) {
		word = "bottle";
	}
	if (i - 1 > 0) {
		output("Take one down, pass it around,");
		output((i - 1) + " " + word + " of pop.");
	}
	else {
		output("Take one down, pass it around</p><p>No more bottles of pop.");
	}
}

function output(text) {
	console.log(text);
	document.writeln("<p>" + text + "</p>");
}