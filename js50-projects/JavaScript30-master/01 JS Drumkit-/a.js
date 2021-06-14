function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip if it's not a transform
  e.target.classList.remove("playing");
}
function playSound(e) {
  const key = document.querySelector(`div[data-key=${e.key}]`);
  const audio = document.querySelector(`audio[data-key=${e.key}]`);
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0; // rewind to the start of audio.
  audio.play();
 
}

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(key => 
  key.addEventListener("transitionend", removeTransition)); // when you called the event console log to check what it gives; here it gives the events that changed or those
// from which we have to choose what to alter , what to not.
window.addEventListener("keydown", playSound);
