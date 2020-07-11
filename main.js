// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll(".like-glyph")

function likeHeart(event) {
  let heart = event.target
  console.log(heart)
  mimicServerCall("URL")
  .then(function(response) {

    heart.innerText = (heart.classList.toggle("activated-heart") ? FULL_HEART : EMPTY_HEART)
    // if (heart.innerText === EMPTY_HEART) {
    //   heart.innerText = FULL_HEART
    // }
    // else {
    //   heart.innerText = EMPTY_HEART
    // }
  })
  .catch(function(error) {
    console.log(error.message)
  })
}

for(const button of likeButtons) {
  button.addEventListener("click", likeHeart)
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}