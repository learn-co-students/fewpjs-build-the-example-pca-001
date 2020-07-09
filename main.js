// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

const hideModal = (modal, displayFlag) => modal.className = displayFlag ?  'hidden' : 'show';
const addLikeEvent = (collection) => collection.forEach( el => el.addEventListener('click', changeLike));

const handleServerError = (err) => {
  const modal = document.getElementById('modal');
  modal.innerHTML = "";
  const messageEl = document.createElement('p');
  messageEl.innerHTML = err;
  modal.appendChild(messageEl);
  modal.style.display = hideModal(modal, false);
  setTimeout( () => modal.style.display = hideModal(modal, true), 5000);
}

const addLike = (button) => {
  if(button.innerHTML === EMPTY_HEART){
    button.innerHTML = FULL_HEART;
    button.className = 'like-glyph activated-heart';
  } else {
    button.innerHTML = EMPTY_HEART;
    button.className = 'like-glyph'
  }
}

const changeLike = (e) => {
  const button = e.srcElement;
  mimicServerCall().
    then(res => addLike(button)).
    catch(err => handleServerError(err));
}

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const buttons = [...document.getElementsByClassName('like')];

  hideModal(modal, true);
  addLikeEvent(buttons);
});



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
