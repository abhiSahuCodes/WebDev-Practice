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

//! ----------------Spread in Objects---------------------------
const movie = {Title: "Bahubali", Year: 2015};
const sequel = {Superhit: true, Critics: "Mixed", Year: 2016};

const greatMovie = {...movie, ...sequel}; //^ Upon mixing both, the Year i.e. common between both, the later will be inserted and shown
console.log(greatMovie);


//^ We can add more keys if we want to an previously defined object 
const dataFromForm = {
    email: "simpleElement@gmail.com",
    password: "simplicityIsHere",
    username: "simElement"
}

const newData = {...dataFromForm, id: 5124, isAdmin: false};
console.log(newData);