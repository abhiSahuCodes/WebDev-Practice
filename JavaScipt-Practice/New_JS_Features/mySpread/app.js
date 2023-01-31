//^ Spread in function
const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];

//^ The constant nums is an array
// const maximum = Math.max(nums);   //^ This Math.max() takes arguments not array. Here it will take num as an argument but it is not an argument, it is an array. This will give an error i.e. NaN. 

//^ To make it work we can convert that to individual argument by spread method
const maximum = Math.max(...nums);
console.log(maximum);

const minimum = Math.min(...nums);
console.log(minimum);

//! ----------------Spread in Array literals---------------------------
const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"]

// const catDog = cats.concat(dogs) //^ This can be written as this
const catDog = [...cats, ...dogs];