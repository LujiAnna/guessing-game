// TODO: Generate (secret) number between 1 and 15(class learners) 
let getRandomInt = max => Math.floor(Math.random() * max) + 1;

const verouTeam = 15;
// console.log(getRandomInt(verouTeam)); //important to check
let secretNumber = getRandomInt(verouTeam);
console.log(secretNumber); //important to check

// TODO: Title
document.getElementById('title').innerHTML = `We have selected a random number between 1 and ${verouTeam}.`

// TODO: Grab guessed number from user after being submitted by button
let submitBtn = document.getElementById('submitBtn');
let userGuess = document.getElementById('userGuess');
let messageBoard = document.getElementById('messageBoard');

submitBtn.addEventListener('click', getMessage);

// TODO: Compare numbers secret vs generated
let compareValues = () => {
  let userGuessNumber = userGuess.value;
  // console.log(userGuessNumber); 
  return secretNumber == userGuessNumber;
}

// TODO: Generate and show message in an alert
//  - Awesome! You number (actual number) was correct. You can be named many things, hungry not being one of them.
// - Bummer... You guessed (guess) and the secret number was (secret number).

function getMessage() {
  compareValues() ? messageBoard.innerHTML = 'yeyy' : messageBoard.innerHTML = 'nooo';
}

