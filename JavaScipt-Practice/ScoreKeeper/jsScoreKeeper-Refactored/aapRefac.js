//! This is a refactored version of previously made game i.e, present in the same PARENT FOLDER. 

p1 = {
    score: 0,
    display: document.querySelector("#p1Display"),
    button: document.querySelector("#p1Button"),
}

p2 = {
    score: 0,
    display: document.querySelector("#p2Display"),
    button: document.querySelector("#p2Button"),
}

const selector = document.querySelector("#playTo");
const resetButton = document.querySelector("#reset");

let winningScore = 3;
let isGameOver = false;

selector.addEventListener('change', function() {
    winningScore = parseInt(selector.value); //& parseInt(selector.value) can be written as parseInt(this.value)
    reset(); //& Here we are calling the function as it is inside a callback function now.
})

function keepingScore (player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-info-dark");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

//! If there are more players then, in place of p2, p2, p4, ...everyoneelse can be used and other things changed accordingly. 

p1.button.addEventListener('click', function() {
    keepingScore(p1, p2);
})

p2.button.addEventListener('click', function() {
    keepingScore(p2, p1);
})

resetButton.addEventListener('click', reset); //& Here we are not calling the function as we need it to be called when reset button is clicked.

function reset () {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove("has-text-success", "has-text-info-dark");
        p.button.disabled = false;
    }
}