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
 
// Part 3: Arrays and Control Flow 

/*  A. Talk about it in your group:

Q. What are the things in an array called?
A. Each item in an array is called an element,
and each element is accessed by its numerical index.

Q. Do Arrays guarantee those things will be in order?
A. Yes. This is why they are iterate by character.

What real-life thing could you model with an array?
Any ordered lists such as books at a library, 
contact books, would fit well in an array. 
*/

// B. Easy does it 
const quotes = [
    "Peace of mind is not the absence of conflict from life, but the ability to cope with it.",
    "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
    "I will prepare and some day my chance will come."
]

// C. Accessing elements 
const randomThings = [1, 10, "Hello", true]
//accessing the 1st element 
console.log(randomThings[0]);
//change the value of "Hello" to "World"
randomThings[2] = "World"
console.log(randomThings);

// D. Change values 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// access the third element 
console.log(ourClass[2]);
// change the value of "Github" to "Octocat"
ourClass[4] = "Octocat"
// add an element called "Cloud City"
ourClass.push("Cloud City")
console.log(ourClass);

// E. Mix it up (don't use .splice())
const myArray = [5, 10, 500, 20]
//Adding "Aegon"  and another string 
//to the end of the array
myArray.push("Aegon", "Iron")
console.log(myArray);
// Remove the 5
myArray.shift(0)
console.log(myArray);
// Add "Bob Marley" to the start
myArray.unshift("Bob Marley")
console.log(myArray);
//Remove the last string
myArray.pop()
console.log(myArray);
//reverse using .reverse()
//this would mutate (i.e., change the elements of the 
//array if I hadn't created a new array)
myArray2 = myArray.reverse(myArray)
console.log(myArray2);


// F. Biggie Smalls 
let integer = 6
if (integer >= 100) {
    console.log("Big Number");
} else {
    console.log("Little Number");
}

// G. Money in the Middle
if (integer > 10) {
    console.log("Big Number");
} else if (integer < 5) {
    console.log("Little Number");
} else {
    console.log("Monkey");
}

// H. What's in Your Closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// log the sentence "Kristyn is rocking that " + 
//the third item in Kristyn's closet + " today!".
  console.log(`Kristyn is rocking that ${kristynsCloset[2]} today.`);
// Add "raybans" to Kristyn's closet after "yellow knit hat".
kristynsCloset.splice(6,0,"Raybans")
//modify yellow to read "stained knit hat"
kristynsCloset[5] =  "stained knit hat"
console.log(kristynsCloset);

//log "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]}, and a ${thomsCloset[2][1]}.`);

//Modify the name of Thom's PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas"
console.log(thomsCloset);

// Part 4: Functions 
// A. printGreeting 
// B. printCool 

//Part 5: Objects 

// A. Make a user object 
const user = {
    name: "Jane Doe",
    email: "janedoe@email.com",
    age: 30,
    purchased: []
}

// B. Update the User

//C. Adding keys and Values 