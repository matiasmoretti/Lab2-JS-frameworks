# Lab2 - JavaScript Frameworks: Node.js & Modules

## 📋 Project Description
This project demonstrates the use of **Node.js** with **custom ES modules**. It includes some utility functions.  

## 🚀 Functions
- **Hello Message:** Displays a custom greeting message.  
- **Converter:** Converts kilometers to miles.  
- **Area:** Calculates the area of a circle based on the provided radius.  
- **Password Generator:** Creates a secure random password of a specified length.  


## 🔍 Code Examples

```
import * as myUtilities from './utilities.js';

console.log(myUtilities);

// Hello Message Function
let name = "Matias";
let city = "Toronto"
myUtilities.helloMessage(name,city);
// Output: Hello Matias from Toronto! Have a wonderful day!

// Calculate Circle Area Function
let circleRad = 10;
let circleArea = myUtilities.circleArea(circleRad);
console.log(`The area of a circle with radius ${circleRad} is ${circleArea}!`);
// Output: The area of a circle with radius 10 is 314.16!

// Convert Kilometers to Miles Function
let kms = 1000 
let miles = myUtilities.km2miles(kms);
console.log(`${kms} kilometers is equal to ${miles} miles!`);
// Output: 1000 kilometers is equal to 621.37 miles! 

// Generate Random Password Function
let passwordSize = 14 
let pass = myUtilities.passwordGenerator(passwordSize);
console.log(`Your new password with size ${passwordSize} is ${pass}!`);
// Output: Your new password with size 14 is O@6T2q)6q@#Ug2!
```
