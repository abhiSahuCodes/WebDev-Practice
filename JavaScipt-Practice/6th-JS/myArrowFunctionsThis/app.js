//! this keyword behaves different in regular function and different in arrow function 
// const person = {
//     firstName: "Abhishek",
//     lastName: "Sahu",
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     }, //^ Here this keyword is not limited to the scope, instead it is about how the function is executed
// }
// console.log(person.fullName()); //& Abhishek Sahu

const person = {
  firstName: "Abhishek",
  lastName: "Sahu",
  fullName: () => {
    return `${this.firstName} ${this.lastName}`;
  }, //^ Here this keyword is limited to the scope.
};
console.log(person.fullName()); //& It will show error (undefined undefined)
