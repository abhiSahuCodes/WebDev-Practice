//! Changing colors randomly after clicking the button

//^ Storing 

const h1 = document.querySelector("h1");
const button = document.querySelector("button");

//^ Generating random hex colors

function randomColors() {
    let codeElements = "0123456789ABCDEF";
    let colorsCode = "#";
    for (let i = 0; i < 6; i++) {
        colorsCode += codeElements[(Math.floor(Math.random() * 16))];
    }
    return colorsCode;
}

button.addEventListener("click", function () {
    document.body.style.backgroundColor = randomColors();
    h1.textContent = randomColors();
})