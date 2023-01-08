// !--------Problem-1---------- //
// Number of vowels in a input string

// let input = prompt("Enter the word or words");

// function getVowels(string){
//     var Vowels = ('AaEeIiOoUu');
//     var vowelsCount = 0;
//     for (var i = 0; i < string.length; i++){
//         if (Vowels.indexOf(string[i]) !== -1) {
//             vowelsCount += 1;
//         }
//     }
//     return vowelsCount;
// }

// console.log(`The total vowels count in the input is: ${getVowels(input)}`);

// -----------------------------------------------

// Program to generate a multiplication table

// take input from the user
// const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
// for(let i = 1; i <= 10; i++) {

    //^ multiply i with number
    // const result = i * number;

    //^ display the result
//     console.log(`${number} * ${i} = ${result}`);
// }

// ---------------------------------------------------------

// Find the of no. of days between two date 
      
// //~ To set two dates to two variables
// var date1 = new Date("06/30/2019");
// var date2 = new Date("07/30/2019");
  
// //^ To find the time difference between two dates
// var Difference_In_Time = date2.getTime() - date1.getTime();
  
// //^ To find the no. of days between two dates
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  
// //^To print the final no. of days (result)
// console.log("Total number of days between dates  <br>"
//            + date1 + "<br> and <br>" 
//            + date2 + " is: <br> " 
//            + Difference_In_Days);
      
// -------------------------------------------------------------------

// multiple case switch program
let input = prompt("Enter the name of a game")
let game = input;
switch(game) {
    case 'cricket':
    case 'hockey':
    case 'football':
    case 'basketball':
        console.log(`${game} is a big game.`);
        break;
    default:
        console.log(`${game} is not a big game.`);
        break;
}