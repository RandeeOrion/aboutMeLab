"use strict";

var visitorName = prompt('What is your name?');
console.log (visitorName);

var correctAnswers = 0


function containq1 () {

alert('Welcome ' + visitorName + '!');
// console.log('Welcome ' + visitorName);

var underGrad = prompt('Did I get my BA from UW?');
underGrad = underGrad.toLowerCase();
// console.log('underGrad', underGrad);
if (underGrad === 'yes' || underGrad === 'y') {
    alert('Correct!');
    correctAnswers++;
    //console.log('Correct!');
} else {
    alert('I surely did go to UW for undergrad!');
    //console.log('I surely did go to UW for undergrad!');
    //console.log(underGrad);
}
}
containq1();


function containq2 () {
var chickenName = prompt('Do I have a chicken named Darth Vader?');
chickenName = chickenName.toLowerCase();
if (chickenName === 'yes' || chickenName === 'y') {
    alert('Of course! As if there is any other name for a hen.');
    correctAnswers++;
    //console.log('Of course! As if there is any other name for a hen.');
} else {
    alert('Thats just ridiculous. I am pretty sure everyone has a hen named Darth Vader.');
   // console.log('Thats a rediculous answer.');
}
}
containq2();


function containq3() {
var move = prompt('Am I trying to move to Belltown?');
move = move.toLowerCase();
if (move === 'no' || move ==='n') {
    alert('Correct! Very little could entice me to Belltown');
    correctAnswers++;
    //console.log('Correct.');
} else {
    alert('Nope! I want to move to Vashon Island!');
    //console.log('Nope!');
}
}
containq3


function containq4 (){
var cow = prompt('Will I one day milk my own dairy cow, daily?')
cow = cow.toLowerCase();
if (cow === 'yes' || cow==='y') {
    alert('Duh.');
    correctAnswers++;
    //console.log('Duh.');
} else {
    alert('Incorrect. One day I WILL have a dairy cow and she will need to be milked daily.');
    //console.log('Incorrect answer.');
}
}
containq4 ();

function containq5 (){
var sheepDogContest = prompt('Will I one day compete in the Sheep Dog Classic?');
sheepDogContest = sheepDogContest.toLowerCase();
if (sheepDogContest === 'yes' || sheepDogContest === 'y') {
    alert('Obvi. I expect you to be there cheering me on.');
    correctAnswers++;
    //console.log('Correct answer.');
} else {
    alert('Wrong. Wrong. Wrong.');
    //console.log('Nope.');
}
}
containq5();

// first loop. too high or too low, four chances

var answer = 5
var howManyChickensPrompt = parseInt( prompt('How many chickens do I have?'));

var howManyChickens = howManyChickensPrompt;
for ( var i = 0; i < 3; i++){
    //console.log('Type of answer: ' typeof howManyChickens);
    if (howManyChickens === answer) {
        alert('Correct! I have five chickens!');
        correctAnswers++;
    break;
} else if (howManyChickens < answer) {
    howManyChickens = parseInt( prompt('Too Low! Seriously, everyone needs more chickens than that. Try Again!'));
} else {
    howManyChickens = parseInt( prompt('Too high! Try Again!'));
}

}

// second loop with an array

var realChickenName = ['Darth Vader', 'Rosabelle', 'Commander Leia', 'Rey', 'Chewbacca', 'BB8']
//console.log ('The array contents: ' realChickenName);
//console.log ('Length of array: ' realChickenName.length);

var guessChickenName = prompt('Can you guess the name of one of my chickens? Hint: my then four year old daughter was mildly obsessed with Star Wars when she named our day old hatchlings.');
//console.log('Visitor answers: ' guessChickenName); 

for ( var i = 0; i < realChickenName.length - 1; i++) {
    console.log('[i]',realChickenName[i]);
    if (realChickenName[i] === guessChickenName) {
        alert ('Well done you.');
        correctAnswers++;
        i = 6;
    } else {
        prompt ('try again'); 
    }
}



//alert('Hey ' + visitorName + ', thanks for playing!');
alert(`Hey ${visitorName}, you got ${correctAnswers} correct. Well done!`);