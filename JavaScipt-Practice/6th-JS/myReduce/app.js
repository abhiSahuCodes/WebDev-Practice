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
// const maxValue = prices.reduce((min, price) => {
//     if (price > min) {
//         return price;
//     }
//     return min;
// })

// console.log(maxValue);

const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "13 Going On 30",
    score: 70,
    year: 2004,
  },
  {
    title: "Stand By Me",
    score: 85,
    year: 1986,
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1995,
  },
  {
    title: "Jingle All The Way",
    score: 71,
    year: 1996,
  },
  {
    title: "Parasite",
    score: 95,
    year: 2019,
  },
  {
    title: "Notting Hill",
    score: 77,
    year: 1999,
  },
  {
    title: "Alien",
    score: 90,
    year: 1979,
  },
];

const highRated = movies.reduce((currentMovie, bestMovie) => {
    if (currentMovie.score > bestMovie.score) {
        return currentMovie
    }
    return bestMovie
})

console.log(highRated);

//^ To give an initial value, we pass that value as an extra argument into reduce
const evens = [2, 6, 8, 14];
const sum = evens.reduce((sum, num) => sum + num); //30
console.log(sum); 
const sumAgain = evens.reduce((sum, num) => sum + num, 110);
console.log(sumAgain);