// Assignment code here
var lowerCase;
var upperCase;
var numeric;
var specialCharacters;
var passwordLength;
var possiblePassword = [];
var generatedPassword;

function generatePassword() {
  generatedPassword = "";
  //Asks user how long they want the password to be
  passwordLength = window.prompt("Please enter length of password (8-128)", "8");

  //Checks to make sure use entered correct parameters
  if (passwordLength >= 8 && passwordLength <= 128) {
    window.alert("You chose: " + passwordLength);
    questions();
  }
  //Checks to see if users wants to exit0
  else if (!passwordLength) {
    return;
  }
  //Error protection if user enters outside parameters or invalid characters and makes them re-enter or exit0
  else {
    window.alert("Invalid entry");
    return generatePassword();
  }
}

function questions (){
  console.log("Entered Questions Function");
  //Asks user if they want to include lowercase
  lowerCase = window.confirm("Include lowercase?");
  if (lowerCase){
    //Adds lowercase alphabet to the array generatedPassword
    possiblePassword.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    window.alert("You chose to include lowercase");
  }
  else {
    window.alert("You chose to NOT include lowercase");
  }
  //Asks user if they want to include uppercase
  upperCase = window.confirm("Include UPPERCASE?");
  if (upperCase){
    //Adds uppercase alphabet to the array generatedPassword
    possiblePassword.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    window.alert("You chose to include UPPERCASE");
  }
  else {
    window.alert("You chose to NOT include UPPERCASE");
  }
  //Asks user if they want to include numbers
  numeric = window.confirm("Include numbers?");
  if (numeric){
    //Adds numbers to the array generatedPassword
    possiblePassword.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
    window.alert("You chose to include numbers");
  }
  else {
    window.alert("You chose to NOT include numbers");
  }
  //Asks user if they want to include special characters
  specialCharacters = window.confirm("Include special characters?");
  if (specialCharacters){
    //Adds uppercase alphabet to the array generatedPassword
    possiblePassword.push("!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "'", "|", ";", ":", ",", ".", "<", ">", "/", "?", "`", "~");
    window.alert("You chose to include special characters");
  }
  else {
    window.alert("You chose to NOT include special characters");
  }
  //Checks to make sure the user selected at least one criteria and continues to generate the code
  if (lowerCase || upperCase || numeric || specialCharacters){
    window.alert("GENERATING PASSWORD");
    generateItAlready();
  }
  //If user did not select at least one criteria then it sends them baack through the questions
  else {
    window.alert("You must accept at least ONE criteria");
    return questions();
  }
}

function generateItAlready (){
  for (var i = 0; i < passwordLength; i++)
  {
    //Generates random numbers according to all the selected criteria and pulls that criteria to create a random unique password
    var index = Math.floor(Math.random() * possiblePassword.length);
    //Takes array and turns it into a string while adding the new random password criteria
    generatedPassword += possiblePassword[index];
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //takes generated code and passes it to password so it can be displayed
  password = generatedPassword;
  var passwordText = document.querySelector("#password");
  console.log("Button was pushed");
  if (password != null) {
    passwordText.value = password;
  }
  //Added if invalid entries pass error detections above
  else {
    passwordText.value = "Try again!";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);