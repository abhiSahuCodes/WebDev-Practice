const input = document.querySelector('input');
const h1 = document.querySelector('h1');
// input.addEventListener('change', function (e) {
//     console.log("CHANGE HAPPENED!!!")
// })

//^ Changes the h1 after changing input and hitting enter 
// input.addEventListener('change', function (e) {
//     h1.innerText = input.value;
// }) 


//^ Live change in h1 as the user type 
input.addEventListener("input", function (e) {
  h1.innerText = input.value;
});



//^ input event example
const inputNew = document.querySelector("#guestNames");
const h2 = document.querySelector("h2");

inputNew.addEventListener('input', function (e) {
  if (!inputNew.value) {
    h2.innerText = "Enter names of guests";
  }
  else {
    h2.innerText = inputNew.value;
  }
})
