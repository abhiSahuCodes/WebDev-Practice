// !==============JavaScript Functions===============
//^ JavaScript parsFloat
let p1 = parseFloat("18.147656");
console.log('Using parseFloat("18.147656") = ' + p1);

//^ JavaScript parsInt
let p2 = parseInt("18great");
console.log(`${p2}`);

//^ JavaScript String match() Function
// function matchString() {
//   let string = "Welcome to my JS study in my HOME";
//   let result = string.match(/me/g);
//   console.log("Output : " + result);
// }
// matchString(); 

//^ Date parse()
let date = "February 18, 2018 12:30 PM";
let msec = Date.parse(date);
console.log(msec);

//^ JavaScript Replace() Method
//& string.replace(searchVal,newVal)
let stringReplace = document.getElementById("jkl").innerHTML;
let result = stringReplace.replace(/JavaScript/gi, "jS");
document.getElementById("jkl1").innerHTML = "New string: " + result;  