// //& =============Function Scope=============

//^ {} inside a function is called a functional scope.

// let totalEggs = 0;
// function collectEggs() {
//     totalEggs = 6;
// }

// console.log(totalEggs);
// //^ Only writing the above would print only totalEggs = 0, as 6 is inside the function and we haven't called the function.
// collectEggs();
// console.log(totalEggs);
// //^ Now we will get both the values. The first log gives 0 and the second gives 6.

//^ This second example will behave differently. It won't print the inside bird till it has a console.log in the function scope.

// const bird = 'Pigeon'
// function birdName() {
//     const bird = 'Starling'
//     console.log(bird);
// }

// console.log(bird);
// birdName();
// console.log(bird);
// //^ In both the cases the bird is giving pigeon.
// //^ What to do? Answer- We have to put a consol.log inside the birdName function.
// //^ Answer came----- Pigeon, Starling, and Pigeon. So, both the console.log(bird), outside the function scope printed pigeon while birdName() printed Starling as it has one console.log inside.

//& ================Block Scope===================

//^ {} inside other than function is called a block scope.

// let cinema = 'Avatar';

// if (cinema === 'Titanic'){
//     let action = 'very negligible';
//     let product = 'very good';
// }
// console.log(product);

// console.log(action);

//^ Anything defined inside won't print outside the block scope.
//^ To print product it should be inside the parenthesis or the block.  

// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'HIII!'
// }
// console.log(radius);
// console.log(msg)
//^ It will only print radius as the value of variable radius is defined outside the scope. It won't print msg.

// for (let i = 0; i < 5; i++) {
//     let msg = "ASKLDJAKLSJD";
//     console.log(msg)
// }
// console.log(msg)  //^ The msg won't be printed as it is outside. It can only be printed if the let is replaced with var.
// console.log(i) //^ This i can't be printed as the it is defined inside the for loop. But it can be printed if let i = 0 is replaced by var i = 0. 

//& ==============Lexical Scope==================

//^ An inner child function inside a parent function can access the variables defined outside that child function which is defined inside the parent function.

// function bankRobbery() {
//     const heros = ['Shaktiman', 'Superman', 'Batman'];
//     function cryForHelp() {
//         for (let hero of heros) {
//             console.log(`Please, come and help us ${hero.toUpperCase()}.`)
//         }
//     }
//     cryForHelp();
// }

// bankRobbery();

//^ This will print the console.log contents with required variable value. This shows that the console.log inside the cryForHelp can actually access the values inside the variable heros.


//^ This also can be said if there are two levels i.e, parent, child, grandchild. 

// function bankRobbery() {
//     const heros = ['Shaktiman', 'Superman', 'Batman'];
//     //todo console.log(color); 
//     //^ This console.log(color) can't access what's inside its child and will give an error.
//     function cryForHelp() {
//         let color = 'milkygray';
//         function grandChild() {
//             for (let hero of heros) {
//                 console.log(`Please, come and help us ${hero.toUpperCase()}.`)
//                 console.log(color); //^ This can be accessed by grandChild.
//             }
//         }
//         grandChild();
//     }
//     cryForHelp();
// }

// bankRobbery();

//!------------this------------------------------------------------
 


