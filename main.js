// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// sets listeners for each button
let hearts = document.getElementsByClassName("like-glyph");
let heartsArray = Array.from(hearts)

heartsArray.forEach(heart => {
  heart.addEventListener("click", function(event) {
    event.preventDefault();
    mimicServerCall()
      .then(function() {
        updateHeart(heart);
      })
      .catch(function() {
        raiseError();
      });
  })
})

function updateHeart(heart) {
  if (heart.innerHTML == EMPTY_HEART) {
    heart.innerHTML = FULL_HEART;
    heart.className = "activated-heart";
  }
  else {
    heart.innerHTML = EMPTY_HEART
    heart.className = "like-glyph";
  }
}

function raiseError() {
  let errorMsg = document.getElementById("modal");
  errorMsg.className = "";
  setTimeout(function() {
    errorMsg.className = "hidden";
  }, 5000);
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
