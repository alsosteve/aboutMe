'use strict';

console.log('hello world');

// this is a counter for the number of correct answers a user gets
let correctCounter = 0;

function question1() {
  // ask some yes or no questions 

  // Prompt user for question answer
  let californiaOriginal = prompt('Have you ever been to California?');
  console.log(californiaOriginal);
  let california = californiaOriginal.toLowerCase();

  // if they say yes lets say: Cool, I'm from there.
  // - yes is ok in any case, y is ok in any case
  // if no than say: Oh well, that's ok.
  // no or n
  // if they don't give yes or no lets say: What?! That's not what I.. nevermind moving on...

  //Repeat format up to question 5

  if (california === 'yes' || california === 'y') {
    alert("Cool, I'm from there.");
    // call counter to check if it works
    correctCounter++;
    console.log(correctCounter);

  } else if (california === 'no' || california === 'n') {
    alert("Oh well, that's ok.");
  } else {
    alert("What?! That's not what I.. nevermind moving on...")
  }
  }
  // Question 2
  function question2(){
  let colorOrigin = prompt("Is Steve's favorite color black?");
  console.log(colorOrigin);
  let color = colorOrigin.toLowerCase();

  console.log(color);


  if (color === 'yes' || color === 'y') {
    alert("That is the correct answer, he will be pleased.");
    correctCounter++;
    console.log(correctCounter);
  } else if (color === 'no' || color === 'n') {
    alert("Wrong! He is displeased.");
  } else {
    alert("Your response was insuficient, do you lack an organic central processing unit?");
  }
  }
  // Question 3
  function Question3(){
  let schoolOrigin = prompt('Was High School fun?');
  console.log(schoolOrigin);
  let school = schoolOrigin.toLocaleLowerCase();

  console.log(school);

  if (school === 'yes' || school === 'y') {
    alert("No, high school was lame! Wrong answer.");
  } else if (school === 'no' || school === 'n') {
    alert("You are correct! High school was such a drag.");
    correctCounter++;
    console.log(correctCounter);
  } else {
    alert("You didn't answer correctly.")
  }
  }
  // Question 4
  function Question4() {
  let armyOrigin = prompt('Steve did 5 years in the army. Yes or no?');
  console.log(armyOrigin);
  let army = armyOrigin.toLocaleLowerCase();

  console.log(army);

  if (army === 'yes' || army === 'y') {
    alert("Actually, Steve did 3 years in the army.");
  } else if (army === 'no' || army === 'n') {
    alert("Correct! Hey, are you Steve in disguise?");
    correctCounter++;
    console.log(correctCounter);
  } else {
    alert("Only 1 more question after this and you messed up answering this one? Come on man!");
  }
  }
  // Question 5
  function Question5() {
  let enjoyOriginal = prompt('Did you enjoy the questions?');
  console.log(enjoyOriginal);
  let enjoy = enjoyOriginal.toLocaleLowerCase();

  console.log(enjoy);

  if (enjoy === 'yes' || enjoy === 'y') {
    alert('Great! Come back soon for more!');
    correctCounter++;
    console.log(correctCounter);
  } else if (enjoy === 'no' || enjoy === 'n') {
    alert("Yes you did! Don't lie!");
  } else {
    alert('This is the last question and you answered it weird...')
  }
  }


// Question 6
// This code generates a random number and allows 4 tries to guess the number

// generates random number
let randomNumber = Math.floor(Math.random() * 100 +1);

function numGame(){
  // this logs correct answer
  console.log(randomNumber);
  // define variables for entry
  let attempts = 0;
  let correctAnswer = false;
  
  // outer loop for keeping track
  while (correctAnswer === false && attempts < 4) {
    // propmt guess
    let userGuess = parseInt(prompt('Guess a number from 1 to 100.'));
    console.log(userGuess);

    
    if (userGuess === randomNumber) {
      // return true
      alert('You are worthy');
      correctAnswer = true; // flag
      // counter
      correctCounter++;
      console.log(correctCounter)

      // test
      //console.log(attempts);
      //console.log(correctAnswer)
      }
    

    // missed attempts
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
  // guess counter
  let attempts =0;
  // how to know if they got it right
  let correctAnswer = false;
  // create array of possible answers
  let array = ['the suicide squad', 'kill bill', 'gone with the wind', 'the godfather', 'the good, the bad, and the ugly'];

  // outer loop keeps track of how many times they have attempted to answer our question and it will stop if they run out of guesses OR if they get it right
  while (attempts < 5 && correctAnswer === false) {
    // each time we start the loop I will allow them a new guess
    // user prompt
    let movieGuess = prompt('What is a movie Steve would rewatch?');

    // check array for answer
    for (let i = 0; i < array.length; i++) {
      let currentMovie = array[i];

      if (movieGuess.toLowerCase() === currentMovie) {
        alert('yes that movie');
        correctAnswer = true; // flag
        correctCounter++;
      }
    }
    //false attempt
    attempts++;
    //tell user their movie choice is horrible
    if (correctAnswer === false) {
      alert('Your movie choice is wrong! Here are the correct answers, try not to choose something horrible again... the suicide squad, kill bill, gone with the wind, the godfather, the good, the bad, and the ugly');
    }
  }
}
// call function

question1();
question2();
question3();
question4();
question5();
numGame();

arrayQuestion();

alert('You got ' + correctCounter + ' answers correct.');
