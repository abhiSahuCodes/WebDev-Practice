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
// const number = parseInt(prompt("Enter a positive integer"));

// ^ to check if the input number is negative
// if (number < 0) {
//     console.log("It's not a positive number. Factorial of negative number can't exist.")
// }

// ^ if number is 0
// else if (number === 0) {
//     console.log(`The factorial of ${number} is 1.`);
// }
// ^ if number is positive
// else {
//     let factorial = 1;
//     for (i =1; i <= number; i++) {
//         factorial *= i;
//     }
//     console.log(`Factorial of ${number} is ${factorial}.`);
// }

// ----------------------------------------------------------------------------------------------------

// !----Javascript program to shuffle a deck of cards

// ^ declaring card elements

// const suits = ["Spades", "Diamonds", "Club", "Hearts"];
// const values = [
//     "Ace",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "Jack",
//     "Queen",
//     "King",
// ];

// ^ empty array to contain the cards
// let deck = [];

// ^ creating a deck of cards
// for (let i = 0; i < suits.length; i++) {             //~To loop around the suits
//   for (let x = 0; x < values.length; x++) {         //~To loop around values that is inside suits
//     let card = { Value: values[x], Suit: suits[i] };//~card variable to contain the combination
//     deck.push(card);                                //~each value produced through loop is pushed into deck array
//   }
// }

// ^ shuffle cards
// for (let i = deck.length - 1; i > 0; i--){
//     let j = Math.floor(Math.random() * i);
//     let temp = deck[i];
//     deck[i] = deck[j];
//     deck[j] = temp;
// }

// console.log("The first five cards are:");

//  ^ for 5 results
// for (let i = 0; i < 5; i++){
//     console.log(`${deck[i].Value} of ${deck[i].Suit}`);
// }


// !-----------------------------------------------------------
// ^----Javascript program to check occurances of a character

// ^ Input taking

// const str = prompt('Enter a string: ');
// const letter = prompt('Enter any letter to check: ');

// function countString(str, letter) {            
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {      //& looping through the string
//         if (str.charAt(i) == letter) {          //& checking whether letter wanted is present at the place of index in the string
//             count += 1;
//         }
//     }
//     return count;
// }

// //^ Parameter mentioning and calling the function
// let result = countString(str, letter);

// console.log(result);

// !-------------------------------------------------------------------------

// ^ program to remove duplicate value from an array

// function getUnique(arr){
    
//     let uniqueArr = [];

//     for(let i of arr) {
//         if(uniqueArr.indexOf(i) === -1) {
//             uniqueArr.push(i);
//         }
//     }
//     console.log(uniqueArr);
// }

// const array = [1, 2, 3, 2, 3];
// getUnique(array);

// !-------------------------------------------------------------------------

// ^ JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".


// for (let i = 1; i <= 100; i++){
//     if(i % 3 === 0) {
//         console.log('Fizz');
//     }

//     else if(i % 5 === 0){
//         console.log('Buzz');
//     }

//     else if(i % 3 === 0 && i % 5 === 0){
//         console.log('FizzBuzz');
//     }

//     else{
//         console.log(i);
//     }
// }

// !-------------------------------------------------------------------------

// ^ Javascript program for printing stars in ascending order till five stars in row number 5 in a column manner.


// ^ Simple way of doing it. It requires manual '*' addition for each row.

// for (let i = 1; i <= 5; i++) {
//     if (i === 1) {
//       console.log("*");
//     } else if (i === 2) {
//       console.log("* *");
//     } else if (i === 3) {
//       console.log("* * *");
//     } else if (i === 4) {
//       console.log("* * * *");
//     } else if (i === 5) {
//       console.log("* * * * *");
//     }
// }

// !------------------------------------------------------------------------------------

// ^ Javascript program to generate random strings

// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// function generateString(length) {
//     let result = ' ';
//     const charactersLength = characters.length;
//     for (let i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }

// console.log(generateString(10));

// ^ Using Built-in Methods

const result = Math.random().toString(36).substring(2,10); //^ Add 2 to desired character length and write at x on the substring(2, x)
console.log(result);
