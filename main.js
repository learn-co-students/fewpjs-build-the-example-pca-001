// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeBtns = document.querySelectorAll(".like")
const modal = document.getElementById("modal")

for (const likeBtn of likeBtns) {
  listenToLike (likeBtn)
}

function listenToLike (likeBtn) {
  likeBtn.addEventListener("click", function(event) {
    mimicServerCall()
    .then(() => {likePost(event.target)})
    .catch((error) => {showErrorModal(error)})
  })
}

function showErrorModal(error) {
  modal.classList = ""
  modal.innerHTML = error
  setTimeout(hideErrorModal, 5000)
}

function hideErrorModal() {
  modal.classList = "hidden"
}

function likePost(target) {
  let glyph
  if (target.querySelector("span")) {
    glyph = target.querySelector("span")
  } else {
    glyph = target
  }
  if (glyph.innerHTML == EMPTY_HEART) {
    glyph.innerHTML = FULL_HEART
    glyph.classList = "activated-heart"
  } else {
    glyph.innerHTML = EMPTY_HEART
    glyph.classList = ""
  }
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
