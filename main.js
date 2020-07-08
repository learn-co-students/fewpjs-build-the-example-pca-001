// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!

// setup listeners
(function () {
  likes = document.querySelectorAll(".like")
  console.log(likes)
  likes.forEach( like => like.onclick = likeClicked)

})()







function likeClicked(e) {
  targetElem = e.currentTarget

  mimicServerCall()
  .then(resp => {
    toggleLike(targetElem)})
  .catch(error => { displayError(error)})
}

function toggleLike(likeLi) {
  span = likeLi.firstElementChild
  // toggle returns true if added, false if removed
  span.innerText = (span.classList.toggle("activated-heart") ? FULL_HEART : EMPTY_HEART)

}

function displayError(error) {
  errorModal = document.getElementById("modal")
  errorText = document.getElementById("modal-message")

  errorModal.classList.remove("hidden")
  errorText.innerText = error

  function hideError() {
    errorText.innerText = ""
    errorModal.classList.add("hidden")
  }

  setTimeout(hideError, 5000)
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
