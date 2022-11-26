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

// Function to prompt user for password options
  function getPasswordOptions() {  

  var passLength = prompt('How many characters would you like your password to contain?'); 
    
      if (passLength < 10 || passLength > 64 || passLength == NaN)  {
        alert('Enter numerical value between 10 - 64 characters'); 
        return
      }

        var specialC = confirm ('Password will include a special character');
        var number = confirm ('Password will include a number');
        var lowerC = confirm ('Password will include a lower cased character');
        var upperC = confirm ('Password will include an upper-cased character');

      return {
        passLength: passLength,
        specialC: specialC, 
        number: number,
        lowerC: lowerC,
        upperC: upperC
    };
  }  

// Function for getting a random element from an array
  function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  } 

// Function to generate password with user input
  function generatePassword() {
    var finalPass = '';
    var options = getPasswordOptions();
    console.log(options);
    
    if (true) {
      
    }
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