//===============================
// ! ----JS-eval---- //
//===============================

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

//===============================
// ! ----JS-Dates---- //
//===============================

//Example-1 Current Date

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
console.log("Date is: " + day + "/" + month + "/" + year);  

//Example-2 

let today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();
console.log (h + ":" + m + ":" + s);


//Current week number in javascript
//defining a date object variable that will take the current system date
todaydate = new Date();

//finding the year of the current date
let oneDay =  new Date(todaydate.getFullYear(), 0, 1); 
  
//calculating number of days in given year before a given date 
let numberOfDays =  Math.floor((todaydate - oneDay) / (24 * 60 * 60 * 1000)); 
  
//adding 1 since to current date and returns value starting from 0 
let result = Math.ceil(( todaydate.getDay() + 1 + numberOfDays) / 7);   

//display the calculated result       
console.log("Week Numbers of current date (" + todaydate + ") is: " + result); 

//===============================
// ! ----while loop----//  
//===============================

//^ Sum of Positive Numbers Only
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

let newSum = 0;

// taking input from the user
let number = parseInt(prompt('Enter a number: '));

while(number >= 0) {

    // adding all positive numbers
    newSum += number;

    // taking input again if the number is positive
    number = parseInt(prompt('Enter a number: '));
}

// display the sum
console.log(`The sum is ${newSum}.`); 