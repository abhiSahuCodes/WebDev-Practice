const p1Button = document.querySelector("#one");
const p2Button = document.querySelector("#two");


const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");

function roll() {
    let rollDiceOne = Math.floor(Math.random() * 6) + 1;

    return rollDice;
}

p1Button.addEventListener("click", function(e) {
    roll();
    let firstScore = 0;
    firstScore += roll();
    console.log(roll());
})


p2Button.addEventListener("click", function(e) {
    roll();
    console.log(roll());
})