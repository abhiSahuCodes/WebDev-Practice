//^ Default param is used to give a default value of parameter if the value is not passed while calling the function 

//^ Without default param 
// function rollDie(numSides) {
//     return Math.floor(Math.random() * numSides) + 1
// } //^ This will give error if the numSides parameter value is not defined

//^ The Regular way of defining a default parameter 
// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// } //^ This will take numSides as 6 if the value is not given

//^ New way of defining parameter
// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1;
// }
// console.log(rollDie());

//^ Greet function with default param (using two parameter and putting a default value in one parameter)
// function greet(msg, person) {
//     return `${msg} ${person}`;
// }

//^ Now passing a default param
// function greet(msg = "Hey", person) {
//     return `${msg} ${person}`; //^ This will give an error (David undefined) on putting one value as it will interfere with "Hey" of msg as it is the first value that shouldnot be put as first parameter
// }

function greet(person, msg ="Hey", punc = "!!") {
    return `${msg} ${person} ${punc}`
} //^ This will work if given only one parameter while calling

console.log(greet("Mark"));