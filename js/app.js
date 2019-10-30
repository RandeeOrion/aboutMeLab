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
    console.log('Of course! As if there is any other name for a hen.');
} else {
    alert('Thats just rediculous. I am pretty sure everyone has a hen named Darth Vader.');
    console.log('Thats a rediculous answer.');
}

var move = prompt('Am I trying to move to Belltown?');
move.toLowerCase();
if (move === 'no' || move ==='n') {
    alert('Correct! Very little could entice me to Belltown');
    console.log('Correct.');
} else {
    alert('Nope! I want to move to Vashon Island!');
    console.log('Nope!');
}