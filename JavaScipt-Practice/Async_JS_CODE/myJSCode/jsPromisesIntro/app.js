//^ CALLBACK
// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure("Connection Timeout : ")
//         }
//         else {
//             success(`Here is your fake data from ${url}`)
//         }
//     }, delay)
// }

//^ PROMISE 
//^ (here making reject with a delay more than 3500 to get more chances to get error)
const fakeRequestPromise = (url) => {
    return new Promise ((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
          if (delay > 3500) {
            reject("Connection Timeout : ");
          } else {
            resolve(`Here is your fake data from ${url}`);
          }
        }, delay);
    })
}

// makeRequest(() => {
//     //^For success
// }, 
// () => {
//     //^For failure
// })

//! This is callback hell below where we have to nest and nest to go deeper into response
//! Just for three pages, it is already looking conjusted 
// fakeRequestCallback("books.com/page1",
//   function (response) {
//     console.log("IT WORKED!!!!");
//     console.log(response);
//     fakeRequestCallback("books.com/page2", 
//         function (response) {
//             console.log("IT WORKED AGAIN!!!!");
//             console.log(response);
//             fakeRequestCallback("books.com/page3",
//                 function (response) {
//                     console.log("IT WORKED AGAIN (3rd Request)!!!");
//                     console.log(response)
//                 },
//                 function (err) {
//                     console.log("ERROR (3rd Request)!!!", err)
//                 })
//     }, 
//         function (err) {
//             console.log("ERROR (2nd Request)!!", err);
//         })
//   },
//   function (err) {
//     console.log("ERROR!!!", err);
//   }
// );

//! To combat this we need promise
//! Promise is not supported in Internet Explorer

//^ A promise is an object representing the eventual completion or failure of an asynchronous operation.\

//^ A promise is a returned object to which we attach callbacks, instead of passing callbacks into a function.

//!===================================================
//^ For normal syntex 
// const request = fakeRequestPromise('yelp.com/api/coffee');

// request
//     .then(() => {
//         console.log("PROMISE RESOLVED!");
//         console.log("IT WORKED!!!!");
//     })
//     .catch(() => {
//         console.log("PROMISE REJECTED!");
//         console.log("OH NO, ERROR!!!");
//     })
//!=================================================== 
// fakeRequestPromise("yelp.com/api/coffee/page1")
//     .then(() => {
//         console.log("IT WORKED!!!! (page1)");
//         fakeRequestPromise("yelp.com/api/coffee/page2")
//             .then(() => {
//               console.log("IT WORKED!!!! (page2)");
//               fakeRequestPromise("yelp.com/api/coffee/page3")
//                 .then(() => {
//                     console.log("IT WORKED!!!! (page3)");
//                 })
//                 .catch(() => {
//                     console.log("OH NO, ERROR!!! (page3)");
//                 })    
//             })
//             .catch(() => {
//               console.log("OH NO, ERROR!!! (page2)");
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)");
//     });

//! But this above one is kind of same like callback hell. Then why is to use this promise?
//!===================================================

//^ CLEANEST METHOD TO DO THIS

// fakeRequestPromise("yelp.com/api/coffee/page1")
//     .then(() => {
//         console.log("IT WORKED!!!! (page1)");
//         return fakeRequestPromise("yelp.com/api/coffee/page2");
//     })
//     .then(() => {
//         console.log("IT WORKED!!!! (page2)");
//         return fakeRequestPromise("yelp.com/api/coffee/page3");
//     })
//     .then(() => {
//         console.log("IT WORKED!!!! (page3)");
//     })
//     .catch(() => {
//         console.log("OH NO, A REQUEST FAILED!!!");
//     })

//! The above promise then catch method works but they donot have any values. 

//!===================================================
//^  With value 
//^ This "data" and "err" is the value given in resolve and reject in promise making function respectively
fakeRequestPromise("yelp.com/api/coffee/page1")
    .then((data) => {
        console.log("IT WORKED!!!! (page1)");
        console.log(data);
        return fakeRequestPromise("yelp.com/api/coffee/page2");
    })
    .then((data) => {
        console.log("IT WORKED!!!! (page2)");
        console.log(data);
        return fakeRequestPromise("yelp.com/api/coffee/page3");
    })
    .then((data) => {
        console.log("IT WORKED!!!! (page3)");
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
        console.log("OH NO, A REQUEST FAILED!!!");
    })