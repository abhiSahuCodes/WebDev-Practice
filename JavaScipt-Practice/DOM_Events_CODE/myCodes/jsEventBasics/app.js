const btn2 = document.querySelector("#v2");

btn2.onclick = function () {
  console.log("YOU CLICKED ME!");
  console.log("I HOPE IT WORKED!!");
};

const btn3 = document.querySelector("#v3");

btn3.onclick = function () {
    console.log("Oh thats the problem!!!!")
}

function scream() {
    console.log("HEY! HEY! HEY! HEY! HEY! HEY!");
    console.log("STOP! TOUCHING ME!!!");
}

btn3.onmouseenter = scream;  //^ I am not calling the function, it will be called once the event is performed.

//^ OR THE ABOVE CAN BE WRITTEN AS THIS ALSO LIKE THE TRADITIONAL METHOD
// btn2.onmouseenter = function scream() {
//     console.log("This is working")
// }

//^ We can also use h1 or any other element for that purpose/ we can use arrow function also
// document.querySelector('h1').onclick = function () {
//     alert("You have clicked the h1. Kindly click the buttons!!!");
// }
// OR-----
document.querySelector("h1").onclick = () => {
  alert("You have clicked the h1. Kindly click the buttons!!!");
};

// & -----------Event Listner------------

//^ This way is better than the above mentioned ways, I can use this for anykind of events. Here the word with prefix on- is not used....

const btn4 = document.querySelector("#v4");

btn4.addEventListener('dblclick', function() {
    console.log("You have now clicked BUTTON 4!! ENJOY")
})

//^ mouseup means when the button is clicked and the click is released inside the button ====This also works and it works with arrow function
// btn4.addEventListener("mouseup", () => {
//   console.log("You have now clicked BUTTON 4 and released it there!! ENJOY NOW");
// });

//^ We can callback a function--------remember the scream function above
btn4.addEventListener('mouseenter', scream); 

//!!!!!!!!!!============NOW THE REASON FOR USING THE addEventListener=======

const tasButton = document.querySelector("#tas");

function twist() {
    console.log('TWIST');
}

function shout() {
    console.log('SHOUT');
}


// tasButton.onclick = twist; //^This will perform twist function but after this if I write :
// tasButton.onclick = shout; //^ Only now the shout function will be performed as it will overwrite the twist function call as it is called after that.

//& Now lets use addEventListener
tasButton.addEventListener('click', twist);
// tasButton.addEventListener('click', twist, {once: true}); //^twist only runs first time after that shout only
tasButton.addEventListener('click', shout);
//^ Now both the functions can be performed. 
