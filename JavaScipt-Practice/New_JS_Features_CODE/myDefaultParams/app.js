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
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}
console.log(rollDie());