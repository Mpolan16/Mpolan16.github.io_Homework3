//VARIABLES
  //7a create all the variables that hold my charaters
  var charatersUPPER ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var characterLower ="abcdefghijklmnopqrstuvwxyz"
  var characterSpecial="!@#$%^&*()"
  var characterNumber="1234567890"

  var charaterSet=""
//FUNCTIONS

//characterSet select random charaters from this set for as long as the chosen charaterLength.


//EVENTS
document.getElementById("generate").onclick = function() {clickGeneratePopup()}; //not sure if this goes with the other piece.

//THE PROGRAM I AM RUNNING

//1. I want to user to click the "generate" button and for a popup to alert them.

function clickGeneratePopup() {
document.getElementById("generate").innerHTML = confirm ("Click 'OK' to generate random password");

//2. I want when the user clicks ok for them to put in how long they want their password to be 8-128.
  //2a.I want to store the answer in charaterLengthand alert what they chose.
var charaterLength = prompt("How many characters long would you like your password to be? (enter only whole numbers between 8 and 128");
if (charaterLength != null) {
  alert("OK, your password will be " + charaterLength + " charaters long.");
  }
//3. I want user to choose if they want uppercase letters.
    //a. store the answer!and alert what they chose.
var chooseCharaterUppercase = confirm ("Would you like: Uppercase Letters?");
if (chooseCharaterUppercase ===true) {
  //addcharatersUPPER to a pool of charaters...
  charaterSet = characterSet+characterUPPER
  alert ("Uppercase letters will be added.")
} else {
  alert ("No uppercase letters will be added.");
  }
//4. I want user to choose if they want lowercase letters.
    //a. store the answer!and alert what they chose.
var chooseCharaterLowercase = confirm ("Would you like: Lowercase Letters?");
if (chooseCharaterLowercase ===true) {
  charaterSet = characterSet+characterLower
  alert ("Lowercase letters will be added.")
} else {
  alert ("No lowercase letters will be added.");
  }
//5. I want user to choose if they want special characters.
    //a. store the answer!and alert what they chose.
var chooseSpecialCharater = confirm ("Would you like: Special Characters?");
if (chooseSpecialCharater ===true) {
  charaterSet = characterSet+characterSpecial
  alert ("Special characters will be added.")
} else {
  alert ("No special characters will be added.");
  }
//6. I want user to choose if they want numbers.
    //a. store the answer!and alert what they chose.
var chooseNumbers = confirm ("Would you like: Numbers?");
if (chooseNumbers ===true) {
  charaterSet = characterSet+characterNumber
  alert ("Numbers will be added.")
} else {
  alert ("No Number will be added.");
}
//7. I want to create the password

  //characterSet select random charaters from this set for as long as the chosen charaterLength.
  var finalPass = ""

for(var numberOfCharaters=0;numberOfCharaters<characterLength;numberOfCharaters++) {
  var randomCharater=characterSet[math.floor(math.random()* charaterSet.length)];
  finalPass=finalPass+randomCharater

  console.log(finalPass)
}
}


//8. I want the password to appear on the screen, not a popup.






