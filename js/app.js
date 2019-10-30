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
