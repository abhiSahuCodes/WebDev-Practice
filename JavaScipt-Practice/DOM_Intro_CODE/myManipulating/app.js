//^ If we select h1 and find its fontSize it will show "" in the DOM.
//^ We can see computed style using window.getComputedStyle(h1)-----Note that we have saved h1 into a variable or constant named "h1" through document.querySelector('h1'). Now this will show all the meta styles given to h1

//window.getComputedStyle(h1).color
// 'rgb(128, 128, 0)'-------To see color using that property

//This will be useful if we want to see the style and property of an website that can't be seen in otherwise

//^ Manipulating the content like text, link 
//^ To change the text, we can use innerText while changing the whole element of html we need to use innerHTML

document.querySelector("h1").innerText = "The best Chickens";
// document.querySelector("a").innerText = "hello";
//& This will select and change the first a in the document
//& To select all the a inside the document we can do this.

// const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//   link.innerText = "I AM A LINK!!!!";
// }

//^ Also we can change the style of the anchor tags content
// for (let link of allLinks) {
//   link.style.color = "rgb(0, 108, 134)";
//   link.style.textDecorationColor = "magenta";
//   link.style.textDecorationStyle = "wavy";
// }

//!===========================================================================================
//^ Selecting using getAttribute and manipulating using setAttribute
//We want to change the hrefs of anhor tags to go to google.com
// document.querySelector("a").setAttribute("href", "https://www.google.com");
// document.querySelector("a").getAttribute("href");

// const h2 = document.querySelector("h2");

// h2.getAttribute("class");
// h2.setAttribute("class", "purple"); //& This can be done to change the class or add a class
// //^ Again to change we can do this
// h2.setAttribute("class", "border");

//!===========================================================================================
//^ Creating an element 
// let box = document.createElement('div');
// box.style.backgroundColor = 'red';
// box.style.height = '30px';
// box.style.width = '30px';
// document.body.appendChild(box);

// let h2 = document.createElement('h2');
// h2.textContent = 'Go Goa Gone';
// document.body.appendChild(h2);

//^ Another way of adding and removing class
// const h2 = document.querySelector("h2");
// h2.classList.add("purple");
// h2.classList.add("chickens");
// h2.classList.remove("purple");

//^ To check whether a particular class is present or not, we can use classList.contains('name')
// console.log(h2.classList.contains('chickens')); 
// //& OUTPUT- true

// //& Now adding a new class to h2
// h2.classList.add("exceptional");
// //& Now we can toggle between on and off for the class exceptional----
// h2.classList.toggle("exceptional"); //& First toggle after adding--this will toggle off the class and won't show in classList.contains("exceptional") ----OUTPUT-false
// //& Again using toggle will turn on the class and will show in classList.contains("exceptional") ----OUTPUT-true
// h2.classList.toggle("exceptional");

//!===========================================================================================
//^ To know the parent element (every element can have only and only one direct parent)
// const firstBold = document.querySelector("b"); 
// firstBold; //& OUTPUT = <b> Silkie </b>
// firstBold.parentElement; //& OUTPUT = <p> ... </p>
// firstBold.parentElement.parentElement; //& OUTPUT = <body>... </body>
// firstBold.parentElement.parentElement.parentElement; //& OUTPUT = <html>... </html>
// /* In this way the parent element of an element can be known and it can be targeted also. */

// //^ Likewise we can also find the child and children of an element (an element can have more than one child)
// //^ Let's use the paragraph parent as the element from above
// const paragraph = firstBold.parentElement;
// paragraph.childElementCount; //& OUTPUT = 8

// paragraph.children; //& OUTPUT = HTMLCollection(8) [b, b, a, a, a, a, a, a] --(It can be expanded)

// paragraph.children[0]; //& OUTPUT = <b> Silkie </b>

// //^ Sibling - Let's take an example from the document which doesnot have a parent other than body and which doesnot have any children rather it has siblings

// const squareImg = document.querySelector(".square");
// squareImg.nextElementSibling; //& OUTPUT = next element of the same kind
// squareImg.nextSibling; //& OUTPUT = next element of any kind (only criteria is that should be next to this like node text(browser does it without showing))

// //^ Same for previous sibling
// squareImg.previousElementSibling;
// squareImg.nextSibling;
//!=========================================================================================== 
//^ Append and Append Child
//& Creating and inserting an image directly inside the body 
const newImg = document.createElement("img");
newImg.src = "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=417&q=80" 

//& Now inserting the element inside the body---it will be a direct child of the body and it will be put at the last
document.body.appendChild(newImg);
//& To make it same in size like other images, we can give it the same classname
newImg.classList.add("square");
//^--------------------------------------------------------------------------------------- 
//& Creating and inserting an H3 inside div with id = "toc" 
const newH3 = document.createElement("H3");
//& As the new created h3 won't have any text, we need to insert text
newH3.innerText = "Cute Chickens";
document.querySelector("#toc").appendChild(newH3);
//^---------------------------------------------------------------------------------------- 
//^ ============Using Append & Prepend================
//& It allows to insert more than one things at once 
//& It can be used to insert directly.. While append is used to insert at the last, prepend can be used to insert at the first position inside an element 
const newPar = document.querySelector("p");
newPar.append("Hello, this is using the append property.");
newPar.append(" Now, we can add more than one like this., See, it has been done!!");
//^ Now actual use of both the properties
const newB = document.createElement("b");
newB.append("Hi! Let's dive into chickens now. ");
newPar.prepend(newB); //& Inseting at the starting of the first paragraph stored inside newPar
//^-----------------------------------------------------------------------------------------
//^ Element.insertAdjacentElement()
//& This can be used to insert the item at a more controlled or particular point
const newh2 = document.createElement("h2");
newh2.append("Chickens Variety !!!") ;
//& Let's add it after the h1 at the beginning
const h1 = document.querySelector("h1");
h1.insertAdjacentElement("afterend", newh2);
//& syntax = insert.AdjacentElement("position", element) ==== position---"beforebegin", "afterbegin", "beforeend", "afterend"
//^ Use of before and after
const h3 = document.createElement("h3");
h3.innerText = ("Very Good!");
h1.after(h3);
const newh3 = document.createElement("h3");
newh3.innerText = "It has used before property";
newh2.before(newh3);
//^-----------------------------------------------------------------------------------------
//^ A fun task 
//^ Inserting 10 small circles after contents section

//& Creating a container div 
const newDiv = document.createElement("div");
newDiv.style.width = "100%";
newDiv.style.height = "auto";
newDiv.style.display = "flex";
newDiv.style.padding = "20px";
newDiv.style.gap = "10px";
newDiv.classList.add("circleContainer")
const TOC = document.querySelector("#toc");
TOC.insertAdjacentElement("afterend", newDiv);

//& Now, creating and inserting 10 small circles using for loop
for (let i = 1; i <= 10; i += 1) {
    const circle = document.createElement("div");
    circle.style.border = "4px solid yellow";
    circle.style.width = "50px";
    circle.style.height = "50px";
    circle.style.borderRadius = "50%";
    const cirCont = document.querySelector(".circleContainer");
    cirCont.insertAdjacentElement("beforeend", circle);
}
//^-----------------------------------------------------------------------------------------
//^ Remove and Remove Child (remove(), removeChild()) 
//^ node.removeChild(): 
//& We have to select the parent and call the method to remove their child
const firstLi = document.querySelector("li");
const ul = firstLi.parentElement;
ul.removeChild(firstLi);
//& We can use this to remove an element just without knowing its parent
const b = document.querySelector("b");
b.parentElement.removeChild(b); 

//^ node.remove(): This doesnot support internet explorer
const againh3 = document.createElement("h3");
againh3.innerText = "Practicing remove !";
newh3.after(againh3);

againh3.remove();
