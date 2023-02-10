//^ I am going to create a bunch of pokemon images using javascript 


// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// const container = document.querySelector('#container');
// const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


// for (let i = 1; i <= 151; i++) {
//     const pokemon = document.createElement('div');
//     pokemon.classList.add('pokemon');
//     const label = document.createElement('span');
//     label.innerText = `#${i}`;
//     const newImg = document.createElement('img');
//     newImg.src = `${baseURL}${i}.png`


//     pokemon.appendChild(newImg);
//     pokemon.appendChild(label);
//     container.appendChild(pokemon)
// }

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png 
//^ For each pokemon variety, there is a number code like 1 (like in the above url), 2, 3, and so on till 151. Just changing the number code in the src will give the corresponding image. 
//^ The number will be dynamically generated using javascript.

//! Storing the container  
const container = document.getElementById("container");
//! Styling container
container.style.display = "flex";
container.style.flexWrap = "wrap";


for (let i = 1; i <= 151; i++) {
    //! Creating elements 
    const pokemonHouse = document.createElement("div");
    const label = document.createElement("span");
    const newImg = document.createElement("img");
    const commonURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    //! Adding class to pokemonHouse
    pokemonHouse.classList.add("pokemon");
    //! Inserting src for newImg and text for label 
    newImg.src = `${commonURL}${i}.png`
    label.innerText = `#${i}`
    //! Appending / inserting the elements 
    pokemonHouse.appendChild(newImg);
    pokemonHouse.appendChild(label);
    container.appendChild(pokemonHouse);
    //! Styling through javascript 
    pokemonHouse.style.display = "inline-block";
    pokemonHouse.style.textAlign = "center";
    newImg.style.display = "block";

}


