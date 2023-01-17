//!-------------Higher Order Functions----------------

//& Argument

//^ Here one function that is needed is called using another function that can amplify or give other attributes to the needed function.

function callThrice(func) {
    func();
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) +1
    console.log(roll);
}

// callThrice(rollDie);

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}

callTenTimes(rollDie);
