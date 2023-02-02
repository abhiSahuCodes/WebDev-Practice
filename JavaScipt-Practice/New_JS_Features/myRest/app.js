//!------------Rest Params---------------
//^ It will look like spread but it isn't like that.
//^ Like in the function of Math.min and Math.max, we cannot always say how many arguments will be there.

//^ To make a function that will accept arguments without defining the number of arguments:
// function sum() {
//     return arguments.reduce((total, el) => total + el)
// } //^ But this will give error as the "arguments" must be an array but the argument that will be passed will not be array rather arguments.

//^ Lets use rest param for this
// function sum(num)---- This will mean only one parameter i.e. num and so we need to do this instead, and that will not only 
// convert the arguments into an array but also now it can use reduce method as everything put will be inside an array now not an argument (only)
//^ Rest params means collect the rest of the parameters like in "nums"
function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}

console.log(sum(5, 8, 48, 324, 24))
console.log(sum(10, 23, 456, 657, 48, 99, 232));

function raceResults(gold, silver, bronze, ...everyoneELse) {
    console.log(`Gold medal goes to: ${gold}`);
    console.log(`Silver medal goes to: ${silver}`);
    console.log(`Bronze medal goes to: ${bronze}`);
    console.log(`And thanks everyone else: ${everyoneELse}`)
}
raceResults(
  "Mukesh",
  "Abhishek",
  "Rahul",
  "Deepika",
  "Rajesh",
  "Neha",
  "Aryan"
);
