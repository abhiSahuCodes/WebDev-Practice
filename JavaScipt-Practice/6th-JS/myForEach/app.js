const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//^ To print each number present inside the array

// function print(element) {
//     console.log(element)
// }

// print(numbers[0]);  
// print(numbers[3]);
// //^ The above will take manually to print all the numbers instead we can use forEach as: 

// numbers.forEach(print);

//^ But here forEach and the function is separate
//& Here instead of writing element we are writing el 
// numbers.forEach(function(el) {
//     console.log(el)
// })

//^ The above will do the same thing but here the function is written inside the forEach 

//^ Now I have learned before how to use for of like in this case
// for (let el of numbers) {
//     console.log(el)
// }

//^ Now lets print the even numbers only
numbers.forEach(function(el) {
    if (el % 2 === 0) {
        console.log(el);
    }
})
