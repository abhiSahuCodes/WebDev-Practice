// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', function () {
//     const newColor = makeRandColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// })

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }


//& Storing the button inside a name 
const button = document.querySelector("button");
//& Storing the h1 inside a name so that it can be modiifed to show the color rgb code
const h1 = document.querySelector("h1"); 

//^ First way-----Note: put body style property below newColor declaration 
// button.addEventListener('click', function () {
//     const r = Math.floor(Math.random() * 255) + 1;
//     const g = Math.floor(Math.random() * 255) + 1;
//     const b = Math.floor(Math.random() * 255) + 1;
//     const newColor = `rgb(${r}, ${g}, ${b})`;
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// })

//^ Second way---- Here the functions will be split

const randomColor = () => {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return`rgb(${r}, ${g}, ${b})`;
}

button.addEventListener('click', function() {
    // const newColor = randomColor(); //^We can save it to newColor and give it in place of randomColor(); or we can simply call the function randomColor().
    document.body.style.backgroundColor = randomColor();
    h1.innerText = randomColor();
})