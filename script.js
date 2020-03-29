//VARIABLES
//Valiables that hold characters
var charatersUPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var characterLower = "abcdefghijklmnopqrstuvwxyz"
var characterSpecial = "!@#$%^&*()"
var characterNumber = "1234567890"

var passwordOnScreen = document.querySelector("#password");

var charaterArray = []
//FUNCTIONS

//when used clicks "Generate" popup asks quesitons.
function clickGeneratePopup() {
    console.log("test")
    //Popup 1 how long they want their password to be 8-128.
    //store password.
    var characterLength = prompt("How many characters long would you like your password to be? (enter only whole numbers between 8 and 128");

    if (characterLength > 8 && characterLength < 128) {
        alert("OK, your password will be " + characterLength + " charaters long.");
    } else {
        alert("invalid length");
        //return if invalid
        return;
    }
    //Popup 2 choose if they want uppercase letters.
    var chooseCharaterUppercase = confirm("Would you like: Uppercase Letters?");
    if (chooseCharaterUppercase === true) {
        //store answer + send to CharaterArray
        charaterArray.push("upper")
        alert("Uppercase letters will be added.")
    } else {
        alert("No uppercase letters will be added.");
    }
    //Popup 3 choose if they want lowercase letters.
    var chooseCharaterLowercase = confirm("Would you like: Lowercase Letters?");
    if (chooseCharaterLowercase === true) {
        //store answer + send to CharaterArray
        charaterArray.push("lower")
        alert("Lowercase letters will be added.")
    } else {
        alert("No lowercase letters will be added.");
    }
    //Popup 4 choose if they want special characters.
    var chooseSpecialCharater = confirm("Would you like: Special Characters?");
    if (chooseSpecialCharater === true) {
        //store answer + send to CharaterArray
        charaterArray.push("special")
        alert("Special characters will be added.")
    } else {
        alert("No special characters will be added.");
    }
    //Popup 5 choose if they want numbers.
    var chooseNumbers = confirm("Would you like: Numbers?");
    if (chooseNumbers === true) {
        charaterArray.push("number")
        //store answer + send to CharaterArray
        alert("Numbers will be added.")
    } else {
        alert("No Number will be added.");
    }
    console.log("array", charaterArray)
    //select random charaters from all the selected user criteria and put in finalPass.
    var finalPass = "";
    var charaterType = "";
    for (var i = 0; i < characterLength; i++) {
        //charaterArray=["upper","number"]
        if (charaterArray[i]) {
            charaterType = charaterArray[i]; //upper,number- this assures you will get at least one of chosen.
        } else {
            charaterType = charaterArray[Math.floor(Math.random() * charaterArray.length)];
        }
        if (charaterType === "upper") {
            finalPass = finalPass + charatersUPPER[Math.floor(Math.random() * charatersUPPER.length)]
        } else if (charaterType === "lower") {
            finalPass = finalPass + characterLower[Math.floor(Math.random() * characterLower.length)]
        } else if (charaterType === "number") {
            finalPass = finalPass + characterNumber[Math.floor(Math.random() * characterNumber.length)]
        } else if (charaterType === "special") {
            finalPass = finalPass + characterSpecial[Math.floor(Math.random() * characterSpecial.length)]
        }
        console.log(finalPass)
    }
    //The password appears on HTML
    passwordOnScreen.value = finalPass;
}
//Events
document.getElementById("generate").onclick = function() {
    clickGeneratePopup()
};




