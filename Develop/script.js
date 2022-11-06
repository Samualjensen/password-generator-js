// Variables
var characterLength;
var choiceArray = [];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password function
function writePassword() {
  var correctPrompts = getPrompts(); //returns true or false 
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var password = generatePassword();
    passwordText.value = password;
  }
  else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = "";
  console.log(choiceArray, "length")
  console.log(characterLength, "character length")
  
  for (var i = 0; i < characterLength; i++) {
    randomIndex = (Math.floor(Math.random() * choiceArray.length));
    console.log(randomIndex, "index")
    password += choiceArray[randomIndex];
    console.log(password, "password")
  }
  return password;
}

// Function to generate password prompt
function getPrompts() {

  // var choiceArray = [];
  characterLength = parseInt(prompt("Hello there, your new password must be 8-128 characters."));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("ALERT: Password must be between 8 - 128 characters.");
    return false;
  }

  if (confirm("Would you like any lower case letters?")) {
    choiceArray = choiceArray.concat(lowerCase);
  }

  if (confirm("Would you like any upper case letters?")) {
    choiceArray = choiceArray.concat(upperCase);
  }

  if (confirm("Would you like any numbers?")) {
    choiceArray = choiceArray.concat(number);
  }

  if (confirm("Would you like any special characters?")) {
    choiceArray = choiceArray.concat(specialCharacter);
  }
  return true;
}
