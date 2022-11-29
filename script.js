// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
//Global Variable:
  var options = [];
  var passLength = 0;

// Function to prompt user for password options
  function getPasswordOptions() {  

    passLength = prompt('How many characters would you like your password to contain?'); 
    
    if (passLength == null)  {
      alert('Click generate password button to create password');
      return null;
    } 
     else if (passLength < 10 || passLength > 64 || passLength == NaN) {
       alert('Enter numerical value between 10 - 64 characters'); {
       return;
     }
    }
      var confirms = {
        specialC: confirm ('Password will include a special character'),
        number: confirm ('Password will include a number'),
        lowerC: confirm ('Password will include a lower cased character'),
        upperC: confirm ('Password will include an upper-cased character'),
      };
    
      
      if (confirms.specialC === true) 
        options += options.concat(specialCharacters); 

      if (confirms.number === true) 
        options += options.concat(numericCharacters);

      if (confirms.lowerC === true) 
        options += options.concat(lowerCasedCharacters);

      if (confirms.upperC === true)
        options += options.concat(upperCasedCharacters);

    return true;
  }  

// Function for getting a random element from an array
  function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  } 

// Function to generate password with user input
  function generatePassword() {
     getPasswordOptions();
  
  }

// Get references to the #generate element
  var generateBtn = document.querySelector('#generate');

// Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);