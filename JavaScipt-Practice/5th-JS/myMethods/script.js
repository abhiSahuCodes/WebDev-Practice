//!-------------Defining Methods-------------

//^ We can define our own methods

// const myMath = {
//     PI: 3.14159,
//     square: function(num) {
//         return num * num;
//     },
//     cube: function(num) {
//         return num ** 3;
//     }
// }

// console.log(myMath.PI);
// console.log(myMath.square(5));
// console.log(myMath.cube(19));

//^ There is a shortcut method for the above
//^ changing the const name to avoid error

// const myNewMath = {
//   PI: 3.14159,
//   square(num) {
//     return num * num;
//   },
//   cube(num) {
//     return num ** 3;
//   },
// };

// console.log(myMath.PI);
// console.log(myMath.square(50));
// console.log(myMath.cube(110));

//!--------------this-------------- 

const cat = {
  name: 'Cattiepao',
  color: 'grey',
  breed: 'scottish fold',
  meow() {
    console.log("THIS IS:", this);
    console.log(`${this.name} says Meowww!`);
  }
}

cat.meow();
const meow2 = cat.meow;

