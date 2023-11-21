// Part 1: Variables and Data Types 

// Exercise A: Variables 

const myName = "Yegeta Eshetu"
let favoriteLanguage = "Python"
let newFavoriteLanguage = "JavaScript"

favoriteLanguage = newFavoriteLanguage
console.log(favoriteLanguage);
console.log(`My name is ${myName} and my favorite programming language is ${favoriteLanguage}.`);

// Exercise B: Strings 

let firstVariable = "Hello World"
firstVariable = 10

let secondVariable = firstVariable
console.log(firstVariable);

let yourName = "Yegeta"
console.log(`Hello, my name is ${yourName}.`);

// Exercise C: Booleans 

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

// Exercise D. The Farm 

let animal = "sheep"
if (animal === "cow") {
    console.log("mooooo");
} else{
    console.log("Hey! You're not a cow.");
}

// Exercise E. Driver's Ed 

let age = 30
if (age >= 16) {
    console.log("Here are the keys!");
} else {
    console.log("Sorry, you're too young");
}

// Part 2: Loops 

//A. The basics 

// for (let i = 0; i <= 10; i++ ) {
//    console.log(i);    
// }

// for (let i = 0; i <= 400; i++ ) {
//     if (i >=10) {
//         console.log(i);    
//     }
//  }

//  for (let i = 12; i <= 4000; i+=3 ) {
//         console.log(i);    
//  }

//B. Get Even 
// for (let i = 1; i <= 100; i++ ) {
//     if (i % 2 === 0) {
//         console.log(`${i} is an even number.`);
//     } else {
//         console.log(i);    
//     }
//      }

//C. Give me five

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(`I found a ${i}. High Five! I found a ${i}. Three is a crowd.`);
    if (i % 5 === 0) {
        console.log(`I found a ${i}. High Five!`);
    } else if (i % 3 === 0){
        console.log(`I found a ${i}. Three is a crowd.`);
    }
}
}

//D. Savings account 
let bank_account = 0 
for (let i = 0; i <= 10; i++ ) {
   bank_account = bank_account + i
}
console.log(`There is $${bank_account} in your bank account`);    

let bank_account2 = 0
console.log(bank_account2);
for (let i = 0; i <= 100; i++ ) {
    bank_account2 = (bank_account2 + (i*2)) 
}
console.log(`There is $${bank_account2} in your bank account`);    
 
