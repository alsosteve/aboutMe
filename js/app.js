'use strict';

console.log('hello world');

function questionList() {
  // ask some yes or no questions 

  let californiaOriginal = prompt('Have you ever been to California?');
  console.log(californiaOriginal);
  let california = californiaOriginal.toLowerCase();

  console.log(california);
  // if they say yes lets say: Cool, I'm from there.
  // - yes is ok in any case, y is ok in any case
  // if no than say: Oh well, that's ok.
  // no or n
  // if they don't give yes or no lets say: What?! That's not what I.. nevermind moving on...

  //Repeat format up to question 5

  if (california === 'yes' || california === 'y') {
    alert("Cool, I'm from there.")
  } else if (california === 'no' || california === 'n') {
    alert("Oh well, that's ok.");
  } else {
    alert("What?! That's not what I.. nevermind moving on...")
  }

  // Question 2

  let colorOrigin = prompt("Is Steve's favorite color black?");
  console.log(colorOrigin);
  let color = colorOrigin.toLowerCase();

  console.log(color);


  if (color === 'yes' || color === 'y') {
    alert("That is the correct answer, he will be pleased.")
  } else if (color === 'no' || color === 'n') {
    alert("Wrong! He is displeased.");
  } else {
    alert("Your response was insuficient, do you lack an organic central processing unit?")
  }

  // Question 3

  let schoolOrigin = prompt('Was High School fun?');
  console.log(schoolOrigin);
  let school = schoolOrigin.toLocaleLowerCase();

  console.log(school);

  if (school === 'yes' || school === 'y') {
    alert("No, high school was lame! Wrong answer.")
  } else if (school === 'no' || school === 'n') {
    alert("You are correct! High school was such a drag.");
  } else {
    alert("You didn't answer correctly.")
  }

  // Question 4

  let armyOrigin = prompt('Steve did 5 years in the army. Yes or no?');
  console.log(armyOrigin);
  let army = armyOrigin.toLocaleLowerCase();

  console.log(army);

  if (army === 'yes' || army === 'y') {
    alert("Actually, Steve did 3 years in the army.")
  } else if (army === 'no' || army === 'n') {
    alert("That's a bit off by 2 years. Sorry, you're wrong.");
  } else {
    alert("Only 1 more question after this and you messed up answering this one? Come on man!")
  }

  // Question 5

  let enjoyOriginal = prompt('Did you enjoy the questions?0');
  console.log(enjoyOriginal);
  let enjoy = enjoyOriginal.toLocaleLowerCase();

  console.log(enjoy);

  if (enjoy === 'yes' || enjoy === 'y') {
    alert('Great! Come back soon for more!')
  } else if (enjoy === 'no' || enjoy === 'n') {
    alert("Yes you did! Don't lie!")
  } else {
    alert('This is the last question and you answered it weird...')
  }

}

// Question 6
// This code generates a random number and allows 4 tries to guess the number

// generates random number
let randomNumber = Math.floor(Math.random() * 100 +1);
console.log(randomNumber);

// create function numGame
function numGame(){

  // define variables
  let attempts = 0;
  let correctAnswer = false;
  
  // outer loop for keeping track
  while (correctAnswer === false && attempts < 4) {
    // new loop to propmt guess
    let userGuess = parseInt(prompt('Guess a number from 1 to 100.'));
    console.log(userGuess);

    for (let i = 0; i < 4; i++) {
      if (userGuess === randomNumber) {
        // return true
        alert('You are worthy');
        correctAnswer = true; // flag
      }
    }

    // missed attempt
    attempts++;
    // incorrect try again alert
    if (correctAnswer === false && userGuess > randomNumber){
      alert('Go lower. Try again.');
    }
    if (correctAnswer === false && userGuess < randomNumber){
      alert('Go higher. Try again.');
    }
  }
}


// Question 7

function arrayQuestion() {
  // create array of possible answers
  let array = ['the suicide squad', 'kill bill', 'gone with the wind', 'the godfather', 'the good, the bad, and the ugly'];
  // user prompt
  let movieGuess = prompt('What is a movie I would rewatch?');
  for (let index = 0; index < array.length; index++) {
    let currentMovie = array[index];

    if (movieGuess === currentMovie) {
      alert('yes that movie');
    }
  }

}

// call function


questionList();
numGame();

arrayQuestion();