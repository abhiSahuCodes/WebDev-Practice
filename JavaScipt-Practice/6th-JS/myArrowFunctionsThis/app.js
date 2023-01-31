//! this keyword behaves different in regular function and different in arrow function 
// const person = {
//     firstName: "Abhishek",
//     lastName: "Sahu",
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     }, //^ Here this keyword is not limited to the scope, instead it is about how the function is executed
// }
// console.log(person.fullName()); //& Abhishek Sahu

// const person = {
//   firstName: "Abhishek",
//   lastName: "Sahu",
//   fullName: () => {
//     return `${this.firstName} ${this.lastName}`;
//   }, //^ Here this keyword is limited to the scope.
// };
// console.log(person.fullName()); //& It will show error (undefined undefined)

// const person = {
//   firstName: "Abhishek",
//   lastName: "Sahu",
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   shoutName: function () {
//         setTimeout(() => {
//             //^ keyword 'this' in arrow functions refers to the value of 'this' when the function is created
//             console.log(this);
//             console.log(this.fullName())
//         }, 3000)
//     }
// };

//^ The above will work : shoutName: this will show the whole person and this.fullName will show "Abhishek Sahu" after 3secs

const person = {
  firstName: "Abhishek",
  lastName: "Sahu",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(function () {
      console.log(this);
      console.log(this.fullName());
    }, 3000);
  },
}; //^ Here the this will show whole person but this.fullName will give error