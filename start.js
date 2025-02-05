import * as myUtilities from './utilities.js';

console.log(myUtilities);

// Runing Function 1
let name = "Matias";
let city = "Toronto"
myUtilities.helloMessage(name,city);

// Running Function 2
let circleRad = 10;
let circleArea = myUtilities.circleArea(circleRad);
console.log(`The area of a circle with radius ${circleRad} is ${circleArea}!`);

// Running Function 3
let kms = 1000 
let miles = myUtilities.km2miles(kms);
console.log(`${kms} kilometers is equal to ${miles} miles!`);

// Running Function 4
let passwordSize = 14 
let pass = myUtilities.passwordGenerator(passwordSize);
console.log(`Your new password with size ${passwordSize} is ${pass}!`);