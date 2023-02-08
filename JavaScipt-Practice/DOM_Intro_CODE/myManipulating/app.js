//^ If we select h1 and find its fontSize it will show "" in the DOM.
//^ We can see computed style using window.getComputedStyle(h1)-----Note that we have saved h1 into a variable or constant named "h1" through document.querySelector('h1'). Now this will show all the meta styles given to h1

//window.getComputedStyle(h1).color
// 'rgb(128, 128, 0)'-------To see color using that property

//This will be useful if we want to see the style and property of an website that can't be seen in otherwise

//^ Manipulating the content like text, link 
//^ To change the text, we can use innerText while changing the whole element of html we need to use innerHTML

document.querySelector("h1").innerText = "The best Chickens";
// document.querySelector("a").innerText = "hello";
 //This will select and change the first a in the document
//To select all the a inside the document we can do this.

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


//^ Selecting using getAttribute and manipulating using setAttribute
//We want to change the hrefs of anhor tags to go to google.com
// document.querySelector("a").setAttribute("href", "https://www.google.com");
// document.querySelector("a").getAttribute("href");

// const h2 = document.querySelector("h2");

// h2.getAttribute("class");
// h2.setAttribute("class", "purple"); //This can be done to change the class or add a class
// //^ Again to change we can do this
// h2.setAttribute("class", "border");


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


//^ To know the parent element (every element can have only and only one direct parent)
const firstBold = document.querySelector("b"); 
firstBold; //OUTPUT = <b> Silkie </b>
firstBold.parentElement; //OUTPUT = <p> ... </p>
firstBold.parentElement.parentElement; //OUTPUT = <body>... </body>
firstBold.parentElement.parentElement.parentElement; //OUTPUT = <html>... </html>
/* In this way the parent element of an element can be known and it can be targeted also. */

//^ Likewise we can also find the child and children of an element (an element can have more than one child)
//^ Let's use the paragraph parent as the element from above
const paragraph = firstBold.parentElement;
paragraph.childElementCount; //& OUTPUT = 8

paragraph.children; //& OUTPUT = HTMLCollection(8) [b, b, a, a, a, a, a, a] --(It can be expanded)

paragraph.children[0]; //& OUTPUT = <b> Silkie </b>

//^ Sibling - Let's take an example from the document which doesnot have a parent other than body and which doesnot have any children rather it has siblings

const squareImg = document.querySelector(".square");
squareImg.nextElementSibling; //& OUTPUT = next element of the same kind
squareImg.nextSibling; //& OUTPUT = next element of any kind (only criteria is that should be next to this like node text(browser does it without showing))

//^ Same for previous sibling
squareImg.previousElementSibling;
squareImg.nextSibling;