const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const goodMarks = numbers.filter(marks => marks > 10);
// console.log(goodMarks);

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]


//^ For finding bad movies 
// const badMovies = movies.filter(titleName => titleName.score < 70)
// console.log(badMovies);

//^ For finding recent movies 
// const recentMovies = movies.filter(titleName => titleName.year > 2000)
// console.log(recentMovies);

//^ For finding good movies 
// const goodMovies = movies.filter(titleNames => titleNames.score > 70)
// console.log(goodMovies);

//^ For finding good movies titles (Here it requires first to find good movies and then mapping all of them for title) 
// const goodTitles = goodMovies.map(titleNames => titleNames.title)
// console.log(goodTitles);

//^ Combining above two functions into one to get good movies titles
const goodTitlesOnly = movies.filter(titleNames => titleNames.score > 70).map(titleNames => titleNames.title)
console.log(goodTitlesOnly);

