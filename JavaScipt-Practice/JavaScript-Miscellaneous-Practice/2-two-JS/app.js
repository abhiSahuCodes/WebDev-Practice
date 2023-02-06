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

let tvCompanies = ['Sony', 'LG', 'Samsung', 'Hisense', 'Motorola', 'Redmi', 'Realme', 'OnePlus']

function bestTV() {
  for (let names of tvCompanies) {
    console.log(names);
  }
}

bestTV();

