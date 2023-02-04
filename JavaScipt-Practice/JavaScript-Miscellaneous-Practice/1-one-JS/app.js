// ! ----JS-eval---- //

//^ The eval() function in JavaScript is used to evaluate the expression. It is JavaScirpt's global function, which evaluates the specified string as JavaScript code and executes it.

//^ It accepts a single parameter.

//Example-1 Mathematical operations 
let a = 10, b = 20, c = 30, sum, mul, sub;
sum = eval("a + b + c");
mul = eval("a * b * c ");
sub = eval("a - b");
console.log(sum);
console.log(mul);
console.log(sub);

//Example-2 Converting string to object
let str = '({"firstName" : "Abhishek", "lastName" : "Sahu"})';

let obj = eval(str);

console.log(obj.firstName + " " + obj.lastName);



