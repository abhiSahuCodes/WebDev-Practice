//!----Spread and Rest (denoted by ...)

//^ When spreading the data, it is called Spread.
//^ When accumulating data, it is called Rest.

// function sumone(x, y) {
//     return x+y;
// }

// let vari = [5, 6];
// console.log(sumone(...vari)); //Spread

//^ Rest
function sum(...args) {
    console.log(args);
    let sum = 0;
    for(const x of args) {
        sum += x;
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));