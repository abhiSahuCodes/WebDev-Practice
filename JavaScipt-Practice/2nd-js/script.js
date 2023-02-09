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

// var today = new Date();
// var dd = today.getDate();

// var mm = today.getMonth()+1;
// var yyyy = today.getFullYear();
// if (dd<10){
//     dd = '0' +dd;
// }

// if(mm<10){
//     dd= '0' +mm;
// }

// today = dd+'-'+mm+'-'+yyyy;
// console.log(today);

//! This progarm is giving the month and year correctly but the day is incorrect. I think there is problem in '.getDate()'------But I am saving this code for further update.

// ==================================================
// ! To find the leap year

// const year = prompt("Enter the year");

// console.log(year);

// if(year % 4 === 0){
//     console.log("Hey! This is a leap year.")
// }
// else{
//     console.log("This is not a leap year. Reload and try again!")
// }

// ==================================================

//^ To check whether a date is a weekend

// let is_weekend = function(date) {
//     let dt = new Date(date);
//     if (dt.getDay() == 6 || dt.getDay() == 0)
//         {
//             return 'weekend';
//         }
//     else {
//         return 'weekday';
//     }
// }

// console.log(is_weekend('Jan 27, 2023'));

// ==================================================

//^ Merging two arrays and removing duplicate items

//& Using concat() and for loop
function getUniqueAfterMerge(arr1, arr2){

    //? merging two arrays
    let arr = arr1.concat(arr2);
    let uniqueArr = [];

    //? loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 5]

//? calling the function
//? passing array argument
getUniqueAfterMerge(array1, array2); 

