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

function mysteryFunc() {
    const random = Math.random();
    if (random > 0.5) {
        return function() {
            console.log(random);
            console.log("Hey! What's up? I am doing great.")
            console.log("What about you? Are you enjoying?")
        }
    }
    else {
        return function() {
            console.log(random);
            console.log("This is a phase that's no more now.")
            console.log("So, cheer up.")
            console.log("Let's play.")
        }
    }
}

let mystery = mysteryFunc();

console.log(mystery());

