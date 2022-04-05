"use strict";
//When the window loads, go through each image tag and set its onclick to the showAnswer function
window.onload = () => Array.from(document.getElementsByTagName("img")).forEach(i => i.onclick = showAnswer);

//When the user clicks the image, run this function that changes to the unblurred image
function showAnswer(eventObj) {
    let image = eventObj.target;
    let name = image.id;
    name = "pics/" + name + ".jpg";
    image.src = name;
	
	//Wait 20 seconds and reblur
    setTimeout(reblur, 2000, image);
}

//Sets the image to the blurred version
function reblur(image) {
    let name = image.id;
    name = "pics/" + name + "blur.jpg";
    image.src = name;
}