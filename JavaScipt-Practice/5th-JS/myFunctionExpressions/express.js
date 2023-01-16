//^ The conventional way of defining a function

// function multiply(x, y) {
//     return x * y;
// }

// console.log(multiply(5, 8));

//^ Function can also be defined with different expression and that too without a name

const multiply = function(x, y) {
    return x * y;
}

console.log(multiply(9, 5));

//^ This is same as the first one but here there is no name for the function. 
//! Actually this function is a value of the const multiply. 
//! In JS functions can be passed as an argument, can be inside an array, can be asked as a return value.

//^ Another example of function with no name

let greet = function() {
    console.log('Hello world');
}

greet();

//^ Another example

let item = function(nonLiving){
    console.log('This is', nonLiving);
}

item('napkin');




 


