// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const lowercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhijklmnopqrstuvwxyz'.split('')
const uppercase = 'abcdefhijklmnopqrstuvwxyz'.split('');
const numeric = '0123456789'.split('');
const specialCharacter = '!@#$%^&*'.split('');
const newList = [lowercase, uppercase, numeric, specialCharacter];

function promptUser(){
  var y = true
  while(y){
    var passwordLength = window.prompt("Please enter a length between 8-128");
    passwordLength = parseInt(passwordLength)
    if (passwordLength >=  8 && passwordLength <= 128){
      var lowercasePrompt = window.confirm("Do you want lowercase?");
      var uppercasePrompt = window.confirm("Do you want uppercase?");
      var numberPrompt = window.confirm("Do you want numbers?");
      var specialCharacterPrompt = window.confirm("Do you want special characters?");
      y = false;
      return [passwordLength, lowercasePrompt, uppercasePrompt, numberPrompt, specialCharacterPrompt]
    }
    else{
      continue;
    }
  }
}
  
function generatePassword (){
  var prompts = promptUser();
  var newBank = [];
  for (i = 0; i < newList.length; i++){
    if (prompts[i]){
      newBank = newBank.concat(newList[i])
    }
  }
  return [newBank, prompts[0]]
}

// Write password to the #password input
function writePassword() {
  var newPassword = '';
  var password = generatePassword();
  var superNewPassword = password[0];
  console.log(password[0]);
  for (i = 0; i < password[1]; i++){
    var random = Math.floor(Math.random() * password[0].length);
    newPassword = newPassword.concat(superNewPassword[random])
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
