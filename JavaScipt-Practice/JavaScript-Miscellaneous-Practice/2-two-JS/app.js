//++++++++++++++++++++++++++++++++++++++++++++++
// !----------------Loop in JS-----------------
//+++++++++++++++++++++++++++++++++++++++++++++

//^ -------------for loop---------------------- 

//^ Nested loop 

let europeCountry = [
  ["Spain", "Germany", "England"],
  ["Madrid", "Berlin", "London"],
  ["Jordi Albas Ramos", 'Manuel Neuer', 'Harry Cane'],
];

for (let i = 0; i < europeCountry.length; i++) {
    const countryGame = europeCountry[i];
    console.log(`Row #${i}`);
    for (let j = 0; j < countryGame.length; j++) {
        console.log(countryGame[j]);
    }
}

