const randomColor = () => {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`
}

const buttons = document.querySelectorAll("button");
const h1s = document.querySelectorAll("h1");

// for (let button of buttons) {
//     button.addEventListener('click', function() {
//         const bgc = button.style.backgroundColor = randomColor();
//         button.style.borderColor = bgc;
//     })
// } //This way we can give border color 

// for (let button of buttons) {
//   button.addEventListener("click", function () {
//     const bgc = (button.style.backgroundColor = randomColor());
//     button.style.color = randomColor();
//   });
// }


// for (let h1 of h1s) {
//     h1.addEventListener('click', function () {
//         h1.style.backgroundColor = randomColor();
//         h1.style.color = randomColor();
//     })
// }

//^ Now using "this" keyword
//& Here this keyword will refer to the very same object that has been clicked (button and h1)
// for (let h1 of h1s) {
//     h1.addEventListener('click', function () {
//         this.style.backgroundColor = randomColor();
//         this.style.color = randomColor();
//     })
// }  //See the h1 is replaced by this. Here the result will be the same

//^ "this" keyword can be used to actually merge both of them in a unique way:

for (let button of buttons) {
    button.addEventListener('click', colorize);
}

for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}

//^ Here "this" links itself to the name of the function and it links itself wherever that function is used. Ex- "this" linked itself to "colorize" and then when "colorize" is used in for loop of buttons and h1s... "this" referred to button and h1 respectively. 