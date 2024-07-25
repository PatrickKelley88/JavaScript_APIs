console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let searchBtn = document.querySelector("#submitSearch");
let searchInput = document.querySelector("#searchWord");
let gifEle = document.querySelector("#imageContainer > img");
let feedbackEle = document.querySelector("#feedback");

const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "dDiB2TbsVlgYtU3itSJwjhR5dM6PUZXj";
searchBtn.addEventListener("click", (event) => {
    getGif(searchInput.value);
});

async function getGif(searchTerm) {
    try {
      let res = await fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchTerm}`);
      console.log(res);
      let body = await res.json();
  
      if (body.meta.status === 200) {
        // Show the gif on the DOM
        gifEle.src = body.data.images.original.url;
        searchInput.value = "";
        feedbackEle.textContent = "";
      } else {
        feedbackEle.textContent = body.meta.msg;
      }
    } catch (err) {
      console.error(err);
      // Show the error message on the DOM
      feedbackEle.textContent = err.message;
    }
  }