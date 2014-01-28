


/////// CONSTRUCTOR ONE /////////
/////////////////////////////////



function Camper(name, age){
	this.name = name || 'nameless';
	this.hike = true;
	this.cook = false;
	this.fish = false;
	this.age = age;

	this.addAge = function(){
		this.age = this.age + 1;
		console.log(this.age);
	};
}

var tomoe = new Camper ('Tomochan', 28)
var jeremy = new Camper ('Jeremy', 29)
var sakura = new Camper ('Sakurachan', 6)



/////// CONSTRUCTOR TWO /////////
/////////////////////////////////



function Car(make, model, year, wheels){
	this.make = make || 'nomake';
	this.model = 'honda';
	this.year = year;
	this.wheels = wheels;

	this.addWheels = function(){
		this.wheels = this.wheels * 2;
		console.log(this.wheels);
	};

	this.addYears = function(){
		this.year = this.year + 1;
		console.log(this.year);
	};
}

var toyota = new Car ('Toyota', 'Corolla', 2003, 4)
var honda = new Car ('Honda', 'Accord', 2001, 4)
var peterbuilt = new Car ('Peterbuilt', 'Semi', 2007, 18)



/////// CONSTRUCTOR THREE /////////
///////////////////////////////////



console.log('Seattle vs. Denver. Call the different score options to get end result.')

function Team(team, score){
	this.team = team || 'team name';
	this.score = score;
	this.championship = true;

	this.touchdown = function(){
		this.score = this.score + 6;
		console.log(this.score);
	};

	this.extraPoint = function(){
		this.score = this.score + 1;
		console.log(this.score);
	};

	this.fieldGoal = function(){
		this.score = this.score + 3;
		console.log(this.score);
	};

	this.touchBack = function(){
		this.score = this.score + 2;
		console.log(this.score);
	};
}

var seattle = new Team ('Seahawks', 0)
var denver = new Team ('Broncos', 0)


