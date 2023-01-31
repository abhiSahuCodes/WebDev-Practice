const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

//^ The regular way of finding and printing the value of total 
// let total = 0;
// for (let price of prices) {
//     total += price;
// }
// console.log(total);

//^ Using reduce method to find the total  
// const total = prices.reduce((total, price) => {
//     return total + price;
// })
// console.log(total);

//^ The above can be written with implicit return
// const total = prices.reduce((total, price) => total + price) 
// console.log(total);

//^ To find the minimum in the prices array, we can use array
// const minValue = prices.reduce((min, price) => {
//     if (price < min) {
//         return price;
//     }
//     return min
// }) 

// console.log(minValue);

//^ To find the maximum in the prices array, we can use array
const maxValue = prices.reduce((min, price) => {
    if (price > min) {
        return price;
    }
    return min;
})

console.log(maxValue);