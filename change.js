// import readline-sync module, don't touch!
const READLINE = require("readline-sync");
let change = READLINE.question(" type the amount of change incerted")
// fill in object below with all relevant properties (see instructions)

let changeMachine = {

	inputCents: "undifined"
	quarters: "undifined",
	dimes: "undifined",
	nickels: "undifined",
	pennys: "undifined",
	greeting: "hello would you like to enter any change ",
	farewell: "thank you and have a good day!",
};

let change = (change.Machinegreeting)
changeMachine.inputCents = READLINE.question(changeMachine.greeting);

let cents = changeMachine.inputCents;

let q = Math.floor(cents/25);
let remainder = cents % 25;
let d = Math.floor(remainder/10);
remainder = remainder % 10;
let n = Math.floor(remainder/5);
remainder = remainder % 5;
let p = Math.floor(remainder / 1);

changeMachine.quarters = q;
changeMachine.dimes = d;
changeMachine.nickels = n;
changeMachine.pennys = p;

console.log(`${changeMachine.inputCents} makes:
	${changeMachine.quarters} q
	${changeMachine.dimes} d
	${changeMachine.nickels} n
	${changeMachine.pennys} p
	`)

// write code below that simulates the change machine in action!



let totalchange = quarter + dime + nickel + penny