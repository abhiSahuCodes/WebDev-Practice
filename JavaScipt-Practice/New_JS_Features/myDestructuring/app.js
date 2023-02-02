//!-----ARRAY DESTRUCTURING-----
//^ Using this we can actually take elements from an array and put it into another variable or constant.

const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

//^ The destructuring here is based on the index inside the array starting from 0.
const highScore = scores[0];
const secondHighScore = scores[1];

//^ We can also write and destructure those into other names 
const [gold, silver, bronze, ...everythingElse] = scores 
//^ The above is destructuring the scores array
//^ We can also check the above destructuring
console.log([gold, silver, bronze, ...everythingElse]);  