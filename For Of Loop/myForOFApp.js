
//! EXAMPLE-1

// let moviesAlltime = ['Mother India', 'Pyasa', 'Godfather', 'Titanic', 'Avatar', 'Tumbadd']

//~ ++++++USING FOR LOOP TO PRINT++++++
// for (let i = 0; i < moviesAlltime.length; i++){
//     //* console.log(i+1, moviesAlltime[i]);
//     console.log(`Visit imdb.com/moviesofalltime/${i, moviesAlltime[i]}`)
//     document.getElementById('words').innerHTML = (`Visit imdb.com/moviesofalltime/${moviesAlltime[i]}`)
// }

//~ This can also be written by using For Of-----------

// for (let movies of moviesAlltime){
//     console.log(`Visit imdb.com/moviesofalltime/${movies}`);
// }

//! EXAMPLE-2 FIRST WITH FOR LOOP AND THEN WITH FOR OF---------

let series = [['Breathe', 'LOTR', 'Peripheral'],
               ['Daredevil', 'Big Bang', 'Blockbuster'],
                ['Undekhi', 'Avrodh', 'Rocket Boys']
]

// ~ -----------Using For Loop---------------
// for (let i = 0; i < series.length; i++){
//     let OTT = series[i];
//         for (let j = 0; j < OTT.length; j++ ){
//             console.log(j+1,OTT[j])
//         }
// }

//~ ------------Using For Of Loop------------

// for (let OTT of series){
//     //? let goodShows = series[OTT];----------We donot need this here-------
//         for (let shows of OTT){
//             console.log(shows);
//         }
// }

//! EXAMPLE- 3 

// for (let char of 'Abhishek'){
//     console.log(char);
// }

//! EXAMPLE-4

// const numbers = [1,2,3,4,5,6,7,8,9];

// for (let value of numbers){
//     console.log(Math.pow(value, 2));
// }

