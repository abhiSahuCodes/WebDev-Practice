//^ ------NESTED LOOP ITERATION------

// for (let i=1; i<=10; i+=1){
//     console.log(`This is ${i}:`);
//     for (let j=1; j<=4; j+=1){
//         console.log(`   It has ${j}.`);
//     }
// }

//^ ------NESTED ARRAY ITERATION------

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i += 1){
//     const seatingRow = seatingChart[i];
//     console.log(`ROW #${i + 1}`)
//     for (let j= 0; j<seatingRow.length; j += 1){
//         console.log(seatingRow[j]);
//     }
// }

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

const secret = 'Baby';
let guess = prompt.toUpperCase('enter the secret code');
while (guess !== secret){
    guess = prompt('enter the secret code');
}
console.log('Congrats!');
