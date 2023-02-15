const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

//^ When the button will be clicked the entire div background color will be changed to a random color
// button.addEventListener('click', function() {
//     container.style.backgroundColor = randomColor();
// })
//& Making the above codes comment as below at the last is the required code
//^ If we want to hide the entire div upon clicking on the div...and that will also includes the button to hide as it is inside the div.....
container.addEventListener("click", function () {
  container.classList.add("hide");
});
//^ But the above code will also hide the div even if only the button is clicked. Though it will also get the random color as background color but that can only be known if the elements section in developer tools is checked.

//!-----TO STOP THE BUBBLING EFFECT, WE HAVE TO ADD (e.stopPropagation();) inside the button as the upper event comes after the button click event.
button.addEventListener("click", function (e) {
  container.style.backgroundColor = randomColor();
  e.stopPropagation();
});

const randomColor = () => {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;
  return `rgb(${r}, ${g}, ${b})`;
};
