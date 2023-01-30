console.log('Hiiii');
setTimeout(() => {
    console.log('...are you still there?');
}, 3000)

console.log('Goodbye');

const id = setInterval(() => {
    console.log(Math.floor(Math.random() *6) + 1);
}, 2000);

clearInterval(id);