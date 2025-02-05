// First Function:
// no return, just accepting a text as an input with two or three parameter/arguments and print it by concatenating it with labels/other text.
export function helloMessage(name, city) {
    console.log(`Hello ${name} from ${city}! Have a wonderful day!`);
}

// Second Function: 
// return a double value for converting a measurement unit to another one, it can accept a double single value as parameter for the initial measurement unit.
export function km2miles(kilometers) {
    return (kilometers * 0.621371).toFixed(2);
}

// Third Function:
// to do any math operation against a numeric value(s), it can accept one, or more than one value (argument), up to you, and then return the result of applying a math formula
export function circleArea(radius) {
    if (radius < 0) return "Radius cannot be negative.";
    return (Math.PI * radius * radius).toFixed(2);
}

// Fourth Function: 
// any advanced function of your choice
export function passwordGenerator(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}