"use strict";

var visitorName = prompt('What is your name?');
//console.log (visitorName);

alert('Welcome ' + visitorName + '!');
//console.log('Welcome ' + visitorName);

var underGrad = prompt('Did I get my BA from UW?');
underGrad.toLowerCase();
if (underGrad === 'yes' || underGrad === 'y') {
    alert('Correct!');
    //console.log('Correct!');
} else {
    alert('I surely did go to UW for undergrad!');
    //console.log('I surely did go to UW for undergrad!');
    //console.log(underGrad);
}

var chickenName = prompt('Do I have a chiken named Darth Vader?');
chickenName.toLowerCase();
if (chickenName === 'yes' || chickenName === 'y'){
    alert('Of course! As if there is any other name for a hen.');
    //console.log('Of course! As if there is any other name for a hen.');
} else {
    alert('Thats just rediculous. I am pretty sure everyone has a hen named Darth Vader.');
   // console.log('Thats a rediculous answer.');
}

var move = prompt('Am I trying to move to Belltown?');
move.toLowerCase();
if (move === 'no' || move ==='n') {
    alert('Correct! Very little could entice me to Belltown');
    //console.log('Correct.');
} else {
    alert('Nope! I want to move to Vashon Island!');
    //console.log('Nope!');
}

var cow = prompt('Will I one day milk my own dairy cow, daily?')
cow.toLowerCase();
if (cow === 'yes' || cow==='y') {
    alert('Duh.');
    //console.log('Duh.');
} else {
    alert('Incorrect. One day I WILL have a dairy cown and she will need to be milked daily.');
    //console.log('Incorrect.');
}

var sheepDogContest = prompt('Will I one day compete in the Sheep Dog Classic?');
sheepDogContest.toLowerCase();
if (sheepDogContest === 'yes' || sheepDogContest === 'y') {
    alert('Obvi. I expect you to be there cheering me on.');
    //console.log('Correct.');
} else {
    alert('Wrong. Wrong. Wrong.');
    //console.log('Nope.');
}

alert('Hey, ' + visitorName + ' thanks for playing!');