const randomColor = () => {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`
}

const buttons = document.querySelectorAll("button");

for (let button of buttons) {
    button.addEventListener('click', function() {
        const bgc = button.style.backgroundColor = randomColor();
        button.style.borderColor = bgc;
    })
}

const h1s = document.querySelectorAll("h1");

for (let h1 of h1s) {
    h1.addEventListener('click', function () {
        h1.style.backgroundColor = randomColor();
        h1.style.color = randomColor();
    })
}