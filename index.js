/*
CIS 124: Intro to Javascript
Passenger Counter (Scrimba)
https://scrimba.com/learn/learnjavascript/setting-up-our-javascript-file-co8c8428fa88013351d68c967
Dominique Tepper, v2.24OCT2022, v1.15OCT2022
*/

/* Scrimba Lessons 9, 15 - 17. Tepper, 15OCT2022
9. Onclick event listener. 
15 - 17. Display the count. 
*/

// Scrimba L17. grab the count-el element, store value in countEl var
let countEl = document.getElementById("count-el"); 
let saveEl = document.getElementById("save-el");

let count = 0; // 7.1 Initialize count as 0

console.log(saveEl);

// 9.3 Increment count var when button is clicked
function increment() {
    count++;
    countEl.textContent = count; 
}

// Set count to 0. Tepper, 15OCT2022.
function clearCount() {
    count = 0;
    countEl.textContent = count;
}

/* Scrimba Lessons 18, 26. Tepper, 15OCT2022.
// 18.Create a save() function.
// 26. Create the save feature
*/
function save() {
    //26.1 create string var that contains the count and a "-" separator
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    console.log(count);
    
    clearCount(); // resets the people entered counter
}

//save(); // calls the save() function


/* 
CIS 124: Intro to Javascript
Passenger Counter (Scrimba)
https://scrimba.com/learn/learnjavascript/setting-up-our-javascript-file-co8c8428fa88013351d68c967

Scrimba Challenge Exercises
Dominique Tepper. v1 15OCT2022, v2 24OCT2022
*/

/* Scrimba Lessons 21, 23 - 24. Tepper, 24OCT2022.

// Lesson 24. Improve the message with string concatenation.
// Lesson 23. Render a welcome message.
// Lesson 21. Log a greeting to the console.

*/

// 21.1 & 23.2 Create 2 vars: name - stores student's name; greeting - stores a salutation
let playerName = "Vault Hunter";
let greeting = "Thank you for using Catch-A-Riiiiiiide, ";

// 23.1 Grab the welcome-el paragraph and store it in var welcomeEl
let welcomeEl = document.getElementById("welcome-el"); 

// 21.2 Create a 3rd var myGreeting that concats name + greeting
// 21.3 log concat string to console

let myGreeting = greeting + playerName + "!";
console.log("Lesson 21 Challege: \n" + myGreeting);

// 23.3 Render the welcome message using welcome.innerText
welcomeEl.innerText = myGreeting;

// 24.1 Add an emoji at the end of the greeting without modifying code for Lessons 21-23
welcomeEl.innerText += "🚂🚋🚋";

// Scrimba Lesson 20. Write your first string. Tepper, 24OCT2022.
// 20.1 Create a variable, message, that stores the string: "You have three new notifications"

let username = "tepper-d";
let message = "You have three new notifications";
console.log("Testing concat strings for Lesson 20:")
console.log(message + ", " + username + "!");

// 20.2 Create a variable, messageToUser, that contains the message logged
let messageToUser = message + ", " + username + "!";

console.log("Lesson 20 Challenge. The string below contains the value of var messageToUser:");
console.log(messageToUser);


/* // Scrimba Lessons 11 - 13. Write first function. Tepper, 15OCT2022.

// 11.1 create a function that logs the number 42 to the console
function myLog() {
    console.log("My log: " + 42);
}

// 11.2 call the function
myLog();

// Scrimba Lesson 12. A function the logs the sum. Tepper, 15OCT2022.
// Challenge: Lap times sum
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

// 12.1 function that logs all lap times
function logLapTime() {
    let totalTime = lap1 + lap2 + lap3;
    console.log("The total lap time is: " + totalTime);
}

logLapTime();

// Scrimba Lesson 13. Function that increments. Tepper, 15OCT2022.
let lapsCompleted = 0;

// 13.1 lapsCompleted + 1 each time function is called
function lapsIncrement() {
    lapsCompleted++;
}

// 13.2 call the increment function 3 times
lapsIncrement();
lapsIncrement();
lapsIncrement();

console.log("Total laps completed: " + lapsCompleted);

*/

/* // Scrimba Lesson 10. Using functions to write less code. Tepper, 15OCT2022.

// L10. Challenge: Setting up a race.
function countdown() {
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}

// 10.1 Race 1 setup
console.log("Race 1 starting in...")
countdown();

// 10.2 Race 2 setup
console.log("Race 2 starting in...")
countdown();

*/

/* // Scrimba Lesson 7. Reassigning and incrementing. Tepper, 15OCT2022

let count = 5;
count++;
console.log(count);

// <!> console.log after each step
// 7.1 Create var bonusPoints. Init @ 50. Increase to 100
let bonusPoints = 50;
console.log(bonusPoints); //50

bonusPoints += 50;
console.log(bonusPoints); //100

// 7.2 bonusPoints decrease to 25, then increase to 70
bonusPoints -= 75;
console.log(bonusPoints); //25

bonusPoints += 45;
console.log(bonusPoints); //70

*/

/* // Scrimba Lessons 4 & 5

// L4. Write the first JS var. Tepper, 15OCT2022
// L5. Basic mathematical operations. Tepper, 15OCT2022
let firstBatch = 5;
let secondBatch = 7;

let count = firstBatch + secondBatch;

console.log(count);

// 4.1 Create a variable named myAge and set its value to student's age
// 5.1 Create vars myAge and humanDogRatio
let myAge = 35;
let humanDogRatio = 7;

// 4.2 Log the myAge variable to the console
console.log(myAge);

// 5.2 myAge * humanDogRatio; store in var myDogAge
let myDogAge = myAge * humanDogRatio;

// 5.3 Log myDogAge to the console
console.log(myDogAge);

*/

/* // Scrimba Lesson 3. Setup JS file. Tepper, 15OCT2022
// document.getElementByID("count-el").innerText = 0;
*/