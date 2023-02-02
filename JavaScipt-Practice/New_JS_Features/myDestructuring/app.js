//!-----ARRAY DESTRUCTURING-----
//^ Using this we can actually take elements from an array and put it into another variable or constant.

const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

//^ The destructuring here is based on the index inside the array starting from 0.
const highScore = scores[0];
const secondHighScore = scores[1];

//^ We can also write and destructure those into other names 
const [gold, silver, bronze, ...everythingElse] = scores 
//^ The above is destructuring the scores array
//^ We can also check the above destructuring
console.log([gold, silver, bronze, ...everythingElse]);  

//!-----OBJECT DESTRUCTURING-----
const user = {
  email: "harvey@gmail.com",
  password: "sCoTt1948sMiTh",
  firstName: "Harvey",
  lastName: "Milk",
  born: 1930,
  died: 1978,
  bio: "Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors",
  city: "San Francisco",
  state: "California",
};

//^ Here rather than giving random names, we have to give the name of the key
// const firstName = user.firstName
// const lastName = user.lastName
// const email = user.email

// console.log(firstName, lastName, email)
//^ We can destructure it into single like we did it in the array
// const {email, firstName, lastName, bio, city} = user 
// console.log({ email, firstName, lastName, bio, city });

//^ Here we are giving the same name as the key, but to change the name, we can do this: (write the key name: new name)
// const {born: birthYear, died: deathYear} = user
// console.log({born: birthYear, died: deathYear});
//^ Here the birthYear and the deathYear will take the same value of born and died
//^ We cannot change the value and it will give an error and the deathYear will remain unchanged as it has a value already
// const {born: birthYear, died: deathYear = "N/A"} = user
// console.log({born: birthYear, died: deathYear: "N/A"});
//^ But we can actually add a key and it's value if not present
// const user2 = {
//   email: "Stacy@gmail.com",
//   firstName: "Stacy",
//   lastName: "Gonzalez",
//   born: 1987,
//   city: "Tulsa",
//   state: "Oklahoma",
// };

// const {city, state, died = 'N/A'} = user2
// console.log({city, state, died : 'N/A'})

//!-----PARAM DESTRUCTURING-----
//^ Here we are using user2 object for this function
// function fullName(user2) {
//     return `${user2.firstName} ${user2.lastName}`
// }  
// console.log(fullName(user2));

//^ We can destructure the above and can write it as:
// function fullName(user2) {
//     const {firstName, lastName} = user2;
//     return `${firstName} ${lastName}`
// } 
// console.log(fullName(user2));

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

//^ To filter out only the movies with scores above 90
// const aboveNinety = movies.filter((movie) => movie.score >= 90);
//^ By destructuring this also can be written as 
// const aboveNinety = movies.filter(({score}) => score >= 90);
// console.log(aboveNinety);  

//^ Little complicated use 
// const movieByYear = movies.map((movie) => `${movie.title} released in ${movie.year} has got ${movie.score}.`)

// console.log(movieByYear);

//^ Upon destructuring the above can be written as:
const movieByYear = movies.map(({title, score, year}) => `${title} released in ${year} has got ${score}.`)

console.log(movieByYear);