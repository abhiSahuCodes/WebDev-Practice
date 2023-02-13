const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("YOU CLICKED ME!");
  console.log("I HOPE IT WORKED!!");
};

const btn2 = document.querySelector("#v3");

btn2.onclick = function () {
    console.log("Oh thats the problem!!!!")
}

function scream() {
    console.log("HEY! HEY! HEY! HEY! HEY! HEY!");
    console.log("STOP! TOUCHING ME!!!");
}

btn2.onmouseenter = scream;  //^ I am not calling the function, it will be called once the event is performed.

//^ OR THE ABOVE CAN BE WRITTEN AS THIS ALSO LIKE THE TRADITIONAL METHOD
// btn2.onmouseenter = function scream() {
//     console.log("This is working")
// }

//^ We can also use h1 or any other element for that purpose
document.querySelector('h1').onclick = function () {
    alert("You have clicked the h1. Kindly click the buttons!!!");
}


