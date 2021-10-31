// Assignment code here
document.getElementById('uppercase');
document.getElementById('lowercase');
document.getElementById('numbers');
document.getElementById('symbols');
document.getElementById('generate');

// will generate an uppercase letter //
function getRandomUpper() {
  console.log(Math.floor(Math.random() * 26) + 65);
}

console.log(getRandomUpper());

// will generate a number //
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

console.log(getRandomNumber());

// this will generate a random symbol //
function getRandomSymbol() {
  var symbols = "!@#$%^&*(){}<>=/.,`";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomSymbol());


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lower = lowercase.checked;
var upper = uppercase.checked;
var numbers = numbers.checked;
var symbol = symbols.checked;
console.log(lower, upper, numbers, symbols);
// generateBtn = window.prompt("Password Criteria: Select one. Type 1 for at least 8 characters and no more than 128 characters, Type 2 for at least 123 characters and no more than 1000 characters, Type 3 for at least 456 characters and no more than 2000 chracters");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  [{lower} , {upper}, {number}, {symbol}]

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);