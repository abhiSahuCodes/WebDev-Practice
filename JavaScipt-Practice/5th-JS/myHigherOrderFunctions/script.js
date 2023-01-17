//!-------------Higher Order Functions----------------

//& Argument

//^ Here one function that is needed is called using another function that can amplify or give other attributes to the needed function.

// function callThrice(func) {
//     func();
//     func();
//     func();
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) +1
//     console.log(roll);
// }

// //todo callThrice(rollDie);

// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f();
//     }
// }

// callTenTimes(rollDie);

//& Returning

// function mysteryFunc() {
//     const random = Math.random();
//     if (random > 0.5) {
//         return function() {
//             console.log(random);
//             console.log("Hey! What's up? I am doing great.")
//             console.log("What about you? Are you enjoying?")
//         }
//     }
//     else {
//         return function() {
//             console.log(random);
//             console.log("This is a phase that's no more now.")
//             console.log("So, cheer up.")
//             console.log("Let's play.")
//         }
//     }
// }

// let mystery = mysteryFunc();

// console.log(mystery());

//^ Making a function to check if the number is between two other numbers

// function isBetween(num) {
//     return num >= 50 && num <= 100; 
// }

// console.log(isBetween(40));

//^ We have to again make the same function for another number set

// function isBetween2(num) {
//     return num >=1 && num <= 10;
// }

// console.log(isBetween2(45));

//^ To avoid such problem we can make an higher order function

function makeInBetween(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

const testRange = makeInBetween(40, 90);
const newRange = makeInBetween(500, 6000);

console.log(testRange(30));
console.log(newRange(5442));