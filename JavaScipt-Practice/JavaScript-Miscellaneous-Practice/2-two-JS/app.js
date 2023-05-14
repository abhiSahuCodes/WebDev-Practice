//++++++++++++++++++++++++++++++++++++++++++++++
// !----------------Loop in JS-----------------
//+++++++++++++++++++++++++++++++++++++++++++++

//^ -------------for loop---------------------- 

//^ Nested loop 

// let europeCountry = [
//   ["Spain", "Germany", "England"],
//   ["Madrid", "Berlin", "London"],
//   ["Jordi Albas Ramos", 'Manuel Neuer', 'Harry Cane'],
// ];

// for (let i = 0; i < europeCountry.length; i++) {
//     const countryGame = europeCountry[i];
//     console.log(`Row #${i}`);
//     for (let j = 0; j < countryGame.length; j++) {
//         console.log(countryGame[j]);
//     }
// }

//^ Iterating over array

// const birdsIndia = [
//   'Indian Roller',
//   'Asian Koel',
//   'Grey Junglefowl',
//   'Red Knot',
//   'Grey Heron',
//   'Greater Flamingo',
//   'Hornbill'
// ]

// function birds() { 
//     for (let i = 0; i < birdsIndia.length; i++) {
//     console.log(i + 1, birdsIndia[i]); //To print the names along with numbering
//   }
// }

// birds();

// let listBirds = birdsIndia.forEach(birds => console.log(birds)); //using arrow with implicit
// console.log(listBirds);

// let listBirds = birdsIndia.map((birds) => console.log(birds)); //using map

//^ -------------for of loop----------------------

// let tvCompanies = ['Sony', 'LG', 'Samsung', 'Hisense', 'Motorola', 'Redmi', 'Realme', 'OnePlus']

// function bestTV() {
//   for (let names of tvCompanies) {
//     console.log(names);
//   }
// }

// bestTV();

//& Iteration variables: const declarations and for...of loop----

//Pushing elements inside for of loop as array elements were not defined prior to the loop--- 
// const arr = [];
// for (const el of [1, 2, 3]) {
//   arr.push(() => el);
// } 

// console.log(arr.map(f => f()));

//& Iterating with a destructuring pattern
// const map = new Map().set(false, "no").set(true, "yes");
// for (const [a, b] of map) {
//   console.log(`key = ${a}, value = ${b}`);
// }

//Array.prototype.entries(); for iterable objects 
// const arr = ["l", "m", "n", "o", "p"];
// for (const [a, b] of arr.entries()) {
//   console.log(`key = ${a}, value = ${b}`);
// }


// !-------------------------------------------------------------------

//^ Break with for loop
for (let i = 1; i <= 5; i++) {
  // break condition
  if (i == 3) {
    break;
  }
  console.log(i);
} 