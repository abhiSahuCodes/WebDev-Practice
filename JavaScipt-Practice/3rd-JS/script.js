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

// JavaScript program to illustrate 
    // calculation of no. of days between two date 
      
    //~ To set two dates to two variables
    var date1 = new Date("06/30/2019");
    var date2 = new Date("07/30/2019");
      
    //^ To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();
      
    //^ To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      
    //^To display the final no. of days (result)
    console.log("Total number of days between dates  <br>"
               + date1 + "<br> and <br>" 
               + date2 + " is: <br> " 
               + Difference_In_Days);
      