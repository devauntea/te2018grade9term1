const READLINE = require("readline-sync");

let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "fists",
  item: "flashlight",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");

if(enterHouse == "y" || enterHouse == "yes"){
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door, you see a boy on the floor crying.`);
  let approachBoy = READLINE.question("do you decide to approach the boy? (yes or no)");
  if(approachBoy == "y" || approachBoy == "yes"){
    player.charm++;
    console.log("as you approach the boy he starts to cry louder and he starts to get up he lunges at you tring to grab you.");
    let choice = READLINE.question("do you fight back or run?");
    if(choice == "run" || choice == "r"){
      player.intellect++;
      console.log("you decide to run as try to approach the door to escape you possible fate it shuts in a grasps reach.");
      let panic = READLINE.question("as you start to panic the boy crales closer what do you do? do you stand your ground and fight or run past him?");
      if(panic == "fight" || panic == "f"){
        player.strength++
        console.log("you kick him back and swing your weapon randomly and you knock the boy ou.");      
        let whereTo = READLINE.question("while the boy falls slowly to the ground you see a basement do you go in? yes or no?");
        if(whereTo == "yes" || whereTo == "y"){
          player.courage++;
          console.log("as you enter the base ment you see a blinding light. Then you notice that you have subbled on the hidden paradise called forbidden place. your eyes slowly agest and you see all of the things you've ever wanted.");
          console.log("----------------------------------------");
          console.log("-----------------The End----------------");
          console.log("----------------------------------------");
        }
        else {
          console.log("you don't enter the basement and die from thinking that the basement is a trap.");
          console.log("----------------------------------------");
          console.log("-----------------The End----------------");
          console.log("----------------------------------------");
        }
      }
      else {
        player
        console.log("you dash past him like sonic. Then you turn to the boy and tant him by shacking that booty in the air.");
        let die = READLINE.question("the boy did nothing. Do you tant again or run even faster past a random.");
        if(die == "tant"){
          player.intellect--;
          console.log("you tant your enemy even more by tea bagging a random black ball that seems to be making a strang noise. It's a boom it explodes and you die.");
          console.log("why were you tea bagging a ball in the first place you ask your self as your soul leaves your body.");
          console.log("----------------------------------------");
          console.log("-----------------The End----------------");
          console.log("----------------------------------------");
        }
        else{
          console.log("you run even faster than you did last time and you past a door. In that second of looking away you run into a door and get knocked out.");
          console.log("----------------------------------------");
          console.log("-----------------The End----------------");
          console.log("----------------------------------------");
        }
      }
      
    }
    else{
      player.strength++;
      console.log("you decide to stand your ground and fight. you swing at the boy with all your force and slay the boy.");
      let door = READLINE.question("as the boy slowly fades you see the door remembering that you might want to leave. do you leave or stay?");
      if(door == "leave"){
        console.log("the door shuts in frount of you and then you hear a sound. It's a trap door you fall in and your legs break from the fall you bleed out and die.");
        console.log("----------------------------------------");
        console.log("-----------------The End----------------");
        console.log("----------------------------------------");
      }
      else{
        player.courage+++
        console.log("you decide to stay thinking that you can handle it, but then you get jump scared by a clown and died of shock. Sadly you die from a clown millyrocking on your dead corsp.");
      }
    }
  }
  else{
    console.log("you decide to leave the boy alone because he looks a littel mentell. As you walk to the door you see a basement that looks very scary.");
    let leave = READLINE.question("do you enter the basement or leave?");
    if(leave == "enter"){      
      console.log("as you enter the base ment you see a blinding light. Then you notice that you have subbled on the hidden paradise called forbidden place. your eyes slowly agest and you see all of the things you've ever wanted.");
      console.log("----------------------------------------");
      console.log("-----------------The End----------------");
      console.log("----------------------------------------");
    }
    else{
      console.log("you leave the basement alone, but while walking away you trip and fall on a splinter filled plank of wood. you died from the unbearable pain.");
      console.log("----------------------------------------");
      console.log("-----------------The End----------------");
      console.log("----------------------------------------"); 
    }
  }
} 
else{
  player.intellect++;
  console.log(`${player.name} decides not to open the door and instead decides to go home.`);
  console.log("as you reach home your tummy starts to growl.");
  let food = READLINE.question("what should you eat a bowl of  cereal or ramen noodles?");
  if(food == "ramen noodles" || food == "rm"){
    player.intellect++;
    console.log("you sit down and relax knowing that you will never be alone when ramen is by your side.");
    console.log("----------------------------------------");
    console.log("-----------------The End----------------");
    console.log("----------------------------------------");
  }
  else{
    player.intellect--;
    console.log("you chose cereal knowing that your life will complete.");
    console.log("----------------------------------------");
    console.log("-----------------The End----------------");
    console.log("----------------------------------------");
  }
}
 
console.log("Thanks for playing!");
