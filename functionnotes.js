const READLINE = require("readline-sync");

function sayHello(name) {
	console.log(`yo ${name}! ;( `);
}

sayHello("depression");

function add(x,y){
	let sum = x + y;
	console.log(sum);
}

function findAge(birthyear){
	let birthYear = READLINE.question("what is your age?: ");
	let currentYear = (new Date()).getfullyear();
	console.log(currentYear);
	let age = currentYear - birthYear;
	return age;
}

	getAge();
	console.log(age);
	if(userAge > 17){
	console.log("you can not see R-Rated movies");
}




funtion add(y){
	let x = READLINE.question("enter the value of x:");
	let sum = x + y;
	return sum;
}

let number = add(4);
console.log(number);







let dog = {
	numLegs: 4,
	amputate: function (){
		this.numlegs = this.numLegs -legs;
	}
}

console.log(`This is you new dog`)




let fellow = "Humpty Dumpty";
let len = fellow.lenth;







