// Author: FirstName LastName
const READLINE = require("readline-sync");

// fantasyName Object
let fantasyNameCreator = {
  firstName: '',
  lastName: '',
  momMaidenName: '',
  cityBorn: '',
  dreamCar: '',
  street: '',
  fantasyName: '',
  getNewFirstName: function(){
    /******************************************************************************
      This method returns the user's new first name. To do so, concatenate the
      first 3 letters of their real first name and the first 2 letters of their
      real last name.
    *******************************************************************************/
  
  this.firstName = READLINE.question("what is your first name: ");
  this.firstName.substring(0,3);
  this.lastName = READLINE.question("what is your last name: ");
  this.lastName.substring(0,2);
  let newFirstName = this.firstName + this.lastName.toLowerCase;
  return this.newFirstName;

  },
  getNewLastName: function(){
    /******************************************************************************
      This method returns the user's new last name. To do so, concatenate the
      first 2 letters of their mom's maiden name and the first 3 letters of the
      city where they were born.
    *******************************************************************************/
    
    this.momMaidenName = READLINE.question("what is your mom's maiden name: ");
    this.cityBorn = READLINE.question("what city were you born in: ");
    this.momMaidenName.substring(0,2);
    this.cityBorn.substring(0,3);
    let newLastName = this.momMaidenName + this.cityBorn.toLowerCase;
    return this.newLastName;

  },
  getTitle: function(){
    /******************************************************************************
      This method returns the user's title. To do so, concatenate the last three
      letters of their real last name, reversed, and the model of their dream car.
    *******************************************************************************/
 
    this.dreamCar = READLINE.question("what is your dream car: ");
    this.newlastName.substring(-1,-3);
    let userTitle = this.dreamCar + this.newLastName.toLowerCase;
    return this.userTitle

  },
  getHonorific: function(){
    /******************************************************************************
      This method returns the user's full honorific. To do so, concatenate their
      title, " of ", and the name of the street they live on.
    *******************************************************************************/

    this. street = READLINE.question("please enter the street you live on: ");
    this.fantasyName = this.getTitle() + " of " + this.street;
    return this.fantasyName;

  },

}



/******************************************************************************
                                     run()

  This function runs the program. In order to generate the full Fantasy Name it needs to:
  1. Ask the user to answer a series of questions, each setting one of the fantasyNameCreator's properties
  to what the user typed in.
  2. Call the methods to produce the piece's of the user's Fantasy Name
  3. Create the full Fantasy name by concatenating the new first name, new last name, a comma, and the honorific
  4. Display it for the user to see.
*******************************************************************************/

function run() {

}

// Run the program!
run();