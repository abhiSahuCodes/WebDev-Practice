// !===========================================================
//^ In normal scenerio when we make a form, we give an action address, and after clicking submit, the page changes to that address.

// !==========Prevent-Default==============
//^ But sometimes when we fill input and click submit, the page doesnot refreshes or changes. Rather, a new content is loaded only. What to do if we want this to happen rather than the above case. We do this by doing this:

const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats")
form.addEventListener("submit", function (e) {
    e.preventDefault();
    //?console.log(input.value);
    const catName = input.value;
    const newList = document.createElement("li");
    newList.innerText = catName;
    list.append(newList);
    //? To clear the input area after each submit
    input.value = ''; 
});

//^ Second tweetForm events

const tweetForm = document.querySelector("#tweetForm");
//? const userInput = document.querySelectorAll("input")[0]; 
const usernameInput = document.querySelector("#userName");
const tweets = document.getElementById("postTweet");

tweetForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("submitted!!")
    //! Storing and Creating 
    const userValue = usernameInput.value;
    const tweetsValue = tweets.value;
    const postListUser = document.createElement("li");
    const bTag = document.createElement("b");
    const br = document.createElement("br");
    //! Appending 
    bTag.append(userValue);
    postListUser.append(bTag);
    postListUser.append(br);
    postListUser.append(`${tweetsValue}`);
    tweetsList.append(postListUser);
    //! Making the input fields blank 
    usernameInput.value = "";
    tweets.value = "";
})


//^ If making another list, heading will be username and the items will be the tweet
// const postListPost = document.createElement("li");
// postListUser.innerText = userValue;
// postListPost.innerText = tweetsValue;
// tweetsList.append(postListUser);
// postListUser.append(postListPost); 

//^ We can also make another separate function consisting of creating elements and appending them and then calling that function inside the addEventListener.
