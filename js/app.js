'use strict';

console.log('hello world');

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

if (california === 'yes' || california === 'y') {
  alert("Cool, I'm from there.")
} else if (california === 'no' || california === 'n') {
  alert("Oh well, that's ok.");
} else {
  alert("What?! That's not what I.. nevermind moving on...")
}







/*
// lets ask a question involving numbers
// prompts ALWAYS return strings

let funLevel = prompt('On a scale of 1-3, with 3 being the most fun, how fun was disneyland when you went.');

console.log(typeof funLevel);

let funNumber = parseInt(funLevel);
// let funNumber = Number(funLevel)

// switch statement
switch (funNumber) {
  case 1:
    alert('I am sorry, you should definitely go again');
    break;
  case 2:
    alert('Did you even try a pickle? Shouldn\'t have eaten that Turkey leg!');
    break;
  case 3:
    alert('That is what I like to hear! When are we going back?!');
    break;
  default:
    alert('Let me plan your next trip');
}
*/