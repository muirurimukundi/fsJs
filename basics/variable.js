// code below because node.js doesn't use prompt since it's a browser window method
// prompt( "What is your name?" );

// variables have to be defined and initialized before they're used 

let name = "Jack Robinson";

console.log( name );

// Exercise 

function test() {
  var a = "3";
  var b = "8";

  console.log(`Inside the function, the value of a is ${a} and the value of b is ${b}`)
}

test();

let a = 11,
  b = 6;

console.log( `Outside, initially the value of a is ${a}, while value of b is ${b}` );

// assignment is to swap the values, introduce a third variable to hold one of the values

let c = a;

a = b;
b = c;

console.log( `Now the new value of a is ${a}, whereas the value of b is ${b}` );

// variable naming conventions 

// Give meaningful names for your variables so that others can know what's in them
// Variable names cannot be reserved js keywords e.g. string
// Variables cannot start with numbers or have spaces in between 
// Valid names can only have _, $, letters, 
// Use camelCase for variable naming 

let myName,
  therapistFinder,
  theRapistFinder;