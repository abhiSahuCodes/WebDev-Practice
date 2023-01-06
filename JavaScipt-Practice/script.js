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

//! ----To write a program to get the currrent date

var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if (dd<10){
    dd = '0' +dd;
}

if(mm<10){
    dd= '0' +mm;
}

today = dd+'-'+mm+'-'+yyyy;
console.log(today);

