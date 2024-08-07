// string concatenation 

console.log( "hello" + "world" );
console.log( "hello" + " " + "world" );
console.log( "hello " + "world");

let message = "hello"
// let name = prompt( "What's your name kind sir?" );
let name = "Jack"; 

console.log( message + " " + name);

// find out number of characters in the string 
console.log( "Your name has " + name.length + " characters" );

let sentence = "Good day to you"
console.log( sentence );

// slice method starts, last argument is exclusive e.g. slice(5,6) from char 5 to 6 exclusive, slice(0,3) - 3 - 0// 3 charcters sliced from 0 to 3(exclusive)

console.log( sentence.slice( 5,8 ) );

// you can change case of the string using toUpperCase() and toLowerCase()
let firstName = "sheila";
let secondName = "anyango";

console.log( `You gave your name as ${firstName} + ${secondName}` );
console.log( `Your full names are ${firstName.toUpperCase()} ${secondName.toUpperCase()} `);

let capitalizedFirstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1,firstName.length),
    capitalizedLastName = secondName.slice(0,1).toUpperCase() + secondName.slice(1,secondName.length);

console.log( `Your capitalized names are ${capitalizedFirstName} ${capitalizedLastName}`)

