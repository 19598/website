function makePhrases() {
    //creates arrays of words to put together
    var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
    var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
    var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

    //picks a word from each list
    //does this randomly and adjusts to the length of the lists
    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);

    var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
    display(phrase);
}
makePhrases();

//displays output
function display(text) {
    //alert(text);//the alert gets annoying
    console.log(text);
    document.getElementById("target").innerHTML = text;
}