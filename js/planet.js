"use strict";//puts the interpreter into strict mode

//function to change the DOM
function init() {
	let planet = document.getElementById("greenplanet");//gets the element with the ID "greenplanet" and assigns it to the planet variable
	planet.innerHTML = "Red Alert: hit by phaser fire!";//changes that element's text/inner HTML
	planet.setAttribute("class", "redtext");//assigns it to the "redtext" class so that it recieves different styling
}

//tells the browser to call the init function when it loads
window.onload = init;