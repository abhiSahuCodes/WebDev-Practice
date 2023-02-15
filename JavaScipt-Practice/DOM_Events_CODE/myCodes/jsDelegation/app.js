//!================================================================ 
//! This can be done to remove an li if the li was created and appended inside the ul----but it won't delete new added lis when added through input inside the website 
// const lis = document.querySelectorAll("li");
// for (li of lis) {
//     lis.addEventListener('click', function() {
//         li.remove();
//     })
// }
//!================================================================ 

//^ To solve that problem event delegation is used. 

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

// tweetsContainer.addEventListener('click', function (e) {
//     e.target.nodeName === 'LI' && e.target.remove();
// })

tweetsContainer.addEventListener('click', function (e) {
    // console.log('CLICKED ON UL!');
    // console.log(e);
    // e.target.remove(); //?It will remove the inserted and preinserted lis
    // console.dir(e.target); //? Here, you will find nodeName i.e, "LI"
    e.target.nodeName === "LI" && e.target.remove();  //? It means only and only if the li is clicked then remove it
})