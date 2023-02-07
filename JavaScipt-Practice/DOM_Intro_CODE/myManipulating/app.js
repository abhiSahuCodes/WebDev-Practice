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

const allLinks = document.querySelectorAll("a");

for (let link of allLinks) {
  link.innerText = "I AM A LINK!!!!";
}

//^ Also we can change the style of the anchor tags content
for (let link of allLinks) {
  link.style.color = "rgb(0, 108, 134)";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}


//^ Selecting using getAttribute and manipulating using setAttribute
//We want to change the hrefs of anhor tags to go to google.com
// document.querySelector("a").setAttribute("href", "https://www.google.com");
// document.querySelector("a").getAttribute("href");

const h2 = document.querySelector("h2");

h2.getAttribute("class");
h2.setAttribute("class", "purple"); //This can be done to change the class or add a class
//^ Again to change we can do this
h2.setAttribute("class", "border");
