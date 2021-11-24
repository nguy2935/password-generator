// Assignment code here
// declare user input variables that will be used
var characters = '`~!@#$%^&*()_+-=[]{}\:;,.<>/';
var length;
var numbs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperCase;
var lowerCase;
var strings = 'abcdefghijklmnopqrstuvwxyz';

// need a function here to generate a random password


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
