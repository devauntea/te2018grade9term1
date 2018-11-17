const READLINE = require("readline-sync");

console.log("---------------------------------------")
console.log("		Responsibility Bot")
console.log("---------------------------------------")

let home = READLINE.question("Are you at home?");

if(home == "yes") {
	console.log("Great!")
}
if(home =="no"){

let home = READLINE.question("where are you!?");

let talkback = READLINE.question("why aren't you home yet?")

if(talkback == "I'm on my way home."){
 	console.log("okay.");
}

let eat = READLINE.question("Did you eat yet?")

if(eat =="yes") {
  console.log("Great!");
}

else { 
	console.log("Theres left overs in the fridge.");
}
  let work == READLINE.question("Is your homework done?")

  if(work = "yes") {
  	console.log("Okay, study more.");
  }
if(work = "no"){
	console.log("Get it done, please.");
}

let day = READLINE.question("Did you have a good day at school?");
 if(day = "yes") {
 	console.log("Cool!")
 }
  else {
  	let talkback = READLINE.queston("What happened?")
  } 









