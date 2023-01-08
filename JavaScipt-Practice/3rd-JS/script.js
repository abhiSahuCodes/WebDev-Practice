// !--------Problem-1---------- //
// Number of vowels in a input string

let input = prompt("Enter the word or words");

function getVowels(string){
    var Vowels = ('AaEeIiOoUu');
    var vowelsCount = 0;
    for (var i = 0; i < string.length; i++){
        if (Vowels.indexOf(string[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}

console.log(`The total vowels count in the input is: ${getVowels(input)}`);

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

