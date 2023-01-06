//! ----To find HCF----  //

// =====================================================================
//todo-- To find HCF using for loop

// let hcf;

// const number1 = prompt("Enter the first positive integer: ");
// const number2 = prompt("Enter the second positive integer: ");

// for (let i = 1; i <= number1 && i <= number2; i++) {
//     if (number1 % i === 0 && number2 % i === 0){
//         hcf = i;
//     }
// }

// console.log(`The HCF of ${number1} and ${number2} is ${hcf}`);

// ======================================================================
// todo-- To find HCF using while loop

const number1 = prompt("Enter the first positive integer: ");
const number2 = prompt("Enter the second positive integer: ");

while (number1 != number2){
    if(number1 > number2){
        number1 -= number2;
    }
    else {
        number2 -= number1;
    }
}

console.log(`HCF is ${number1}`)
