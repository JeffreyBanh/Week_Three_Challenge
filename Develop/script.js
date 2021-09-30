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
  

