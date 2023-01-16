// //^ Function scope

// let totalEggs = 0;
// function collectEggs() {
//     totalEggs = 6;
// }

// console.log(totalEggs);
// //^ Only writing the above would print only totalEggs = 0, as 6 is inside the function and we haven't called the function.
// collectEggs();
// console.log(totalEggs);
// //^ Now we will get both the values. The first log gives 0 and the second gives 6.

const bird = 'Pigeon'
function birdName() {
    const bird = 'Starling'
    console.log(bird);
}

console.log(bird);
birdName();
console.log(bird);
//^ In both the cases the bird is giving pigeon.
//^ What to do? Answer- We have to put a consol.log inside the birdName function.
//^ Answer came----- Pigeon, Starling, and Pigeon. So, both the console.log(bird), outside the function scope printed pigeon while birdName() printed Starling as it has one console.log inside.
