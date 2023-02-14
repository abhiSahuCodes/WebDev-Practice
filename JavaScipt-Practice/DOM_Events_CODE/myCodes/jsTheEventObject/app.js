// document.querySelector("button").addEventListener('click', function() {
//     alert("Hey! How are you?")
// })

//^ We can see event properties -"evt" or "e"
document.querySelector("button").addEventListener("click", function (evt) {
  console.log(evt);
}); //& Look at the clientX and clientY coordinates...It says where in the button it was clicked

//^ Event object is very useful like when a key is pressed in a keyboard, which key is pressed is present inside keyboard event object.

//& Lets see keyboard event object----making an input text in html
const input = document.querySelector('input');

// input.addEventListener('keydown', function() {
//     console.log("KEYDOWN");
// })

// input.addEventListener('keyup', function() {
//     console.log("KEYUP");
// })

input.addEventListener('keydown', function(e) {
    console.log(e);
    console.log(e.key);
    console.log(e.code);
})
//^ In gaming while setting macro keys or changing the keys like using wasd instead of arrow keys, we are changing the code for that key.

//^ To see input event performed anywhere, we can use:
// window.addEventListener('keydown', function(e) {
//     console.log(e.code);
// }) 

//^ Changing the letter of the code
window.addEventListener('keydown', function(e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break;
        default:
            console.log("IGNORED!"); 
    }
}) 