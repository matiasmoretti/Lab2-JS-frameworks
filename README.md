# Lab2 - JavaScript Frameworks: Node.js & Modules

## 📋 Project Description
This project demonstrates the use of **Node.js** with **custom ES modules**. It includes some utility functions.  

## 🚀 Functions
- **Hello Message:** Displays a custom greeting message.  
- **Converter:** Converts kilometers to miles.  
- **Area:** Calculates the area of a circle based on the provided radius.  
- **Password Generator:** Creates a secure random password of a specified length.  


##🔍 Code Examples

**Greet User Function**
import { greetUser } from './utils.js';
greetUser('Matias', 'Toronto');
// Output: Hello Matias from Toronto! Hope you’re having an awesome day!

**Convert Kilometers to Miles**
import { convertKilometersToMiles } from './utils.js';
const miles = convertKilometersToMiles(10);
console.log(`10 kilometers is equal to ${miles} miles.`);
// Output: 10 kilometers is equal to 6.21 miles.

**Calculate Circle Area**
import { calculateCircleArea } from './utils.js';
const area = calculateCircleArea(5);
console.log(`The area of a circle with radius 5 is ${area} square units.`);
// Output: The area of a circle with radius 5 is 78.54 square units.

**Generate Random Password**
import { generateRandomPassword } from './utils.js';
const password = generateRandomPassword(12);
console.log(`Your secure password is: ${password}`);
// Output: Your secure password is: Ab7#d9Gh!Lm2 (Example output)
