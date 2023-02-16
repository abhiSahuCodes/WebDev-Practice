const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

const selector = document.querySelector("#playTo");

const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");

let p1Score = 0;
let p2Score = 0;

let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.toggle("has-text-success");
      p2Display.classList.toggle("has-text-info-dark");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add("has-text-success");
      p1Display.classList.add("has-text-info-dark");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p2Display.textContent = p2Score;
  }
});

selector.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset(); //& Here we are calling the function as it is inside a callback function now.
});

resetButton.addEventListener("click", reset); //& Here we are not calling the function as we need it to be called when reset button is clicked.

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("has-text-success", "has-text-info-dark");
  p2Display.classList.remove("has-text-success", "has-text-info-dark");
  p1Button.disabled = false;
  p2Button.disabled = false;
  // location.reload();
}
