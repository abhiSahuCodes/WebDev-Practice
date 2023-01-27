
// try {
//     hello.toUpperCase();
// } catch {
//     console.log("ERROR!!!!")
// }
// hello.toUpperCase();

// console.log("AFTER!")

// function yell(msg) {
//     try {
//         console.log(msg.toUpperCase().repeat(3));
//     } catch (e) {
//         console.log("Please pass a string next time!")
//     }
// }

// hello.toUpperCase();

// try {
//     hello.toUpperCase();
// }
// catch {
//     console.log("ERROR!!!")
// }

// console.log("AFTER!")

// function yell(msg) {
//     console.log(msg.toUpperCase().repeat(3));
// }
// yell('hello');
// yell(1234); //^ This will show error 

//^ We can use try and catch
function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3))
    } catch (e) {
        console.log(("Please pass a string next time!"))
    }
}

yell(1234);