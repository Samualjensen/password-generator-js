//global variable for possible password length
var characterLength;
//global variable for choice array
var choiceArray = [];
//lists possible value for password
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//get references to the #generate element
var generateBtn = document.querySelector("#generate");

//generates intial password prompt
function writePassword() {
  var correctPrompts = getPrompts(); 
  var passwordText = document.querySelector("#password");
  //if statement to ask to ask if user would like to make a password
  if (correctPrompts) {
    var password = generatePassword();
    passwordText.value = password;
  }
  else {
    passwordText.value = "";
  }
}

//add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to generate password
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

//function to generate password prompt
function getPrompts() {

  //prompt asking for length of password
  characterLength = parseInt(prompt("Hello there, your new password must be 8-128 characters."));

  //alert if you type a number that does not meet critria of prompt
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("ALERT: Password must be between 8 - 128 characters.");
    return false;
  }

  //if conirm than will add specialCharcter to choiceArray
  if (confirm("Would you like any special characters?")) {
    choiceArray = choiceArray.concat(specialCharacter);

    //if conirm than will add numbers to choiceArray
    if (confirm("Would you like any numbers?")) {
      choiceArray = choiceArray.concat(number);

      //if conirm than will add upperCase to choiceArray
      if (confirm("Would you like any upper case letters?")) {
        choiceArray = choiceArray.concat(upperCase);

        //if conirm than will add lowerCase to choiceArray
        if (confirm("Would you like any lower case letters?")) {
          choiceArray = choiceArray.concat(lowerCase);
        }

      }

    }

  }
  return true;
}
