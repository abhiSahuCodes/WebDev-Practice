// !===========================================================
//^ In normal scenerio when we make a form, we give an action address, and after clicking submit, the page changes to that address.

// !==========Prevent-Default==============
//^ But sometimes when we fill input and click submit, the page doesnot refreshes or changes. Rather, a new content is loaded only. What to do if we want this to happen rather than the above case. We do this by doing this:

const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats")
form.addEventListener("submit", function (e) {
    e.preventDefault();
    //?console.log(input.value);
    const catName = input.value;
    const newList = document.createElement("li");
    newList.innerText = catName;
    list.append(newList);
    //? To clear the input area after each submit
    input.value = ''; 
});

