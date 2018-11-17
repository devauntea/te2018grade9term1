const READLINE = require("readline-sync");

// **** Problem 1: R-rated ****
// You cannot see an R-rated movie unless you are at least 18, or you are with
// an adult. Write code that prints whether or not someone can see an
// R-rated movie.
console.log("*** Problem 1: R-rated ***");
let age = READLINE.question("Enter your age: ");
let withAdult = READLINE.question("Are you with an adult? (yes or no): ");

if(age >= 18 || withAdult == "yes") {
	console.log("congratrs you can see the movie");
}
else {
	console.log("sorry, you can't see the movie");
}

// **** Problem 2: Umbrella ****
// You should bring an umbrella when you travel, but only if it is raining.
// However, if it is thunderstorming, you should not bring an umbrella since
// that's bad luck. Write code that prints if someone should bring an umbrella
// with them.
console.log("*** Problem 2: Umbrella ***");
let raining = READLINE.question("Is it raining? (yes or no): ");
let thunderstorming = READLINE.question("Is it thunderstorming? (yes or no): ");

if(raining == "yes"){
	console.log("you should bring an umbrella before proceding to your destination");
}
else {
	console.log("have a good day and safe travels");
}
if(thunderstorming == "yes"){
	console.log("do not take a umbrella with you while you are traveling you might be more likely to get struck by lighting");
}
else{
	console.log("have a good day and safe travels");
 }

// **** Problem 3: Monkey Trouble ****
// There are two monkeys: Bubbles and Spankey. You are in trouble if both of
// them are smiling, or if neither are smiling. Write code that prints if we
// are in trouble.
console.log("*** Problem 3: Monkey Trouble ***");
let bubbles = READLINE.question("Is Bubbles smiling? (yes or no): ");
let spankey = READLINE.question("Is Spankey smiling? (yes or no): ");

if(bubbles && spankey smiling == yes ||  bubbles && spankey smiling == no ){
	console.log("you're are in danger please be very careful");
}
if(bubbles is smiling == yes && spankey is smiling == no){
	console.log("you are safe but proced with costion");
}

// **** Problem 4: First Place ****
// Write code that prints the largest of three scores. If there is a tie for
// first place, simply print one of the tie winners.
console.log("*** Problem 4: First Place ***");
let score1 = READLINE.question("Enter the first score: ");
let score2 = READLINE.question("Enter the second score: ");
let score3 = READLINE.question("Enter the third score: ");

if(score1 > score2 && score3){
	console.log("congratrs score1 wins");
}
if(score1 && score3 < score2){
	console.log("congratrs score2 is the winner");
}
if(score1 && score2 < score3){
	console.log("score3 has come out as the winner");
}{{
if(score1 == score2 > score3){
	console.log("score1 and 2 are tied for first place");
}
if(score1 == score3 > score2){
	console("scores 1 and 3 have tied for first place");	
}
if(score3 == score2 > score1){
	console.log("score2 and score3 have tied for first place sorry for score1 is last");
}
// **** Problem 5: Phone Shopping ****
// At a phone store, you can afford various "tiers" of phones based on how
// much money you have.
//    If you have at least $30 you can buy a prepaid phone.
//    If you have at least $100 you can buy a bottom-tier phone.
//    If you have at least $300 you can buy a middle-tier phone.
//    If you have at least $600 you can buy a top-tier phone.
// Write code that prints all the phone tiers someone can buy based on how much
// money they have.
console.log("*** Problem 5: Phone Shopping ***");
let money = READLINE.question("How much money do you have?: ");

if(money >= $600){
	console.log("you are able to afford the prepaid, bottom-tier, middle-tier and top-tier phones");
}
if($600 > money >= $300){
	console.log("you are able to afford the prepaid, bottom-tier and middle-tier");
}
if($300 > money >= $100){
	console.log("you are able to afford the prepaid and bottom-tier");
}
if($100 > money >= $30){
	console.log("you are able to afford the prepaid");
}
if($30 > money){
	console.log("sorry you are not able to afford any thing please come back another time");
}

// **** Problem 6: Guess My Number ****
// Write code that plays a simple number guessing game with a user. You can
// use any number you like as myNum. If the user guesses the number, print
// a congratulations message. If they guess too low or too high, tell them this.
// If their guess is myNum +/- 3, tell them they are "warm"; otherwise tell
// them they are cold.

console.log("*** Problem 6: Guess My Number ***");
let myNum = 2;
let guess = READLINE.question("I'm thinking of a number from 1 - 10. Guess it: ");

if(number == 1){
	console.log("aw so close your hot");
}

if(number == 2){
	console.log("great you got my number");
}

if(number == 3){
	console.log("aw so close your hot");
}

if(number == 4){
	console.log("almost there your very warm - 2");
}

if(number == 5){
	console.log("aw so close yuor very warm -3");
}

if(number == 6){
	console.log("good guess your warm -4");
}

if(number == 7){
	console.log("good guess your lukewarm -5");
}

if(number == 8){
	console.log("too bad your cold -6");
}

if(number == 9){
	console.log("wow not even close -7");
}

if(number == 10){
	console.log("your freezing -8");
}

