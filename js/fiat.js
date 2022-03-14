"use strict";
//basic car object
var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000,
	fuel: 0,
	started: false,

	//starts the car
	start: function () {
		(this.fuel == 0) ? alert("The car is on empty, fill up before starting!") : this.started = true;//uses ternary operator instead of if-else statement
	},

	//stops the car
	stop: function () {
		this.started = false;
	},

	//moves the car and consumes fuel
	drive: function () {
		//this is the normal if funtion, and is the one that makes sense to use
		if (this.started) {
			if (this.fuel > 0) {
				//if the car is started and has fuel, move it and consume 1 fuel
				alert(this.make + " " +
					this.model + " goes zoom zoom!");
				this.fuel = this.fuel - 1;
			} else {
				//otherwise, say there is no fuel and stop the car
				alert("Uh oh, out of fuel.");
				this.stop();
			}
		} else {
			//if the car isn't started, alert the user that they must start it
			alert("You need to start the engine first.");
		}

		//just for fun, this is the ternary version of that if block
		//this.started ? this.fuel > 0 ? (alert(this.make + " " + this.model + " goes zoom zoom!"), this.fuel = this.fuel - 1) : (alert("Uh oh, out of fuel."), this.stop()) : alert("You need to start the engine first.");
		//if (this.started) {if (this.fuel > 0) {alert(this.make + " " + this.model + " goes zoom zoom!"); this.fuel = this.fuel - 1;} else {alert("Uh oh, out of fuel."); this.stop();}} else {alert("You need to start the engine first.");}
		//horizontal length comparison of the if block ^^^
	},

	//This is how you would use an arrow function as a method. The Mozilla documentations says not to do this, because you cannot use the this keyword as these functions are anonomous
	/*addFuel: (car, amount) => {
		car.fuel = car.fuel + amount;
	}*/

	//Adds fuel
	addFuel: function (amount) {
		this.fuel = this.fuel + amount;
	}
};

//test all the methods
fiat.start();
fiat.drive();
//fiat.addFuel(fiat, 2); This line is for use with the arrow funciton. It must be supplied with the car object as it does not have the ability to use the this keyword
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();