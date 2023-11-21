// Variables and Data Types 

// Exercise A. Variables 

const myName = "Yegeta Eshetu"
let favoriteLanguage = "Python"
let newFavoriteLanguage = "JavaScript"

favoriteLanguage = newFavoriteLanguage
console.log(favoriteLanguage);
console.log(`My name is ${myName} and my favorite programming language is ${favoriteLanguage}.`);

// Exercise B. Strings 

let firstVariable = "Hello World"
firstVariable = 10

let secondVariable = firstVariable
console.log(firstVariable);

let yourName = "Yegeta"
console.log(`Hello, my name is ${yourName}.`);

// Exercise C. Booleans 

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log( c > d);
console.log("Name" == "Name");

//For the next two, use && or ||
console.log(true || false);
console.log(false && false && false && false && false || true);

console.log(false === false);
console.log(e === "Kevin");
console.log(a <= b <= c);
console.log((a * a) == d);
console.log(48 == "48");

//D. The Farm 

let animal = "sheep"
if (animal === "cow") {
    console.log("mooooo");
} else{
    console.log("Hey! You're not a cow.");
}

// E. Driver's Ed 

let age = 30
if (age >= 16) {
    console.log("Here are the keys!");
} else {
    console.log("Sorry, you're too young");
}