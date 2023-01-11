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
// let input = prompt("Enter the name of a game")
// let game = input;
// switch(game) {
//     case 'cricket':
//     case 'hockey':
//     case 'football':
//     case 'basketball':
//         console.log(`${game} is a big game.`);
//         break;
//     default:
//         console.log(`${game} is not a big game.`);
//         break;
// }

// -------------------------------------------------------------------


//^ To find the characters inside a string

//^ Using for loop
// let input = prompt('Enter a string')

// for (let i =0; i < input.length; i += 1){
//     console.log(input[i]);
// }

//^ Using for....in....
// let input = prompt('Enter a string')

// for (let x in input){
//     console.log(input[x]);
// }

// //^ Using for....of....
// let input = prompt('Enter a string')

// for (let i of input){
//     console.log(i);
// }

// -------------------------------------------------------------------- node script.js

//^ Javascript array methods

//^ Pop

let movies = ['Hum Tum', 'Hum Dil De Chuke Sanam', 'Hasina Maan Jayegi']

// let newList = movies.pop();
// console.log(newList);


//^ Push

// let newList1 = movies.push('Tum Bin');
// console.log(movies);


//^ Reverse

// let newListrev = movies.reverse();
// console.log(newListrev);

//^Filter

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);

// ----------------------------------------------------------------------------------------

// ! Javascript program to convert celsius to fahrenheit

//^ program to convert celsius to fahrenheit
//^ ask the celsius value to the user 
// const celsius = prompt("Enter a celsius value: ");

//^ calculate fahrenheit
// const fahrenheit = (celsius * 1.8) + 32

//^ display the result
// console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);

// ----------------------------------------------------------------------------------------

// ! Program for a simple calculator 

//^ take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

//^ take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// let result;

//^ using if...else if... else
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }

// display the result
// console.log(`${number1} ${operator} ${number2} = ${result}`);

// --------------------------------------------------------------------------

// ^ Simple calculator using switch 

//^ program for a simple calculator
// let result;

//^ take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

//^ take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//          result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;

//     case '-':
//          result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;

//     case '*':
//          result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;

//     case '/':
//          result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// }

// -----------------------------------------------------------------------------

// !----Javascript program for finding factorial of a number

// ^ input from the user
const number = parseInt(prompt("Enter a positive integer"));

// ^ to check if the input number is negative
if (number < 0) {
    console.log("It's not a positive number. Factorial of negative number can't exist.")
}

// ^ if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}
// ^ if number is positive
else {
    let factorial = 1;
    for (i =1; i <= number; i++) {
        factorial *= i;
    }
    console.log(`Factorial of ${number} is ${factorial}.`);
}
