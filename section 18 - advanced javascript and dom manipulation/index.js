for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //alert("Clicked");
    //this.style.color = "white";

    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);

  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key) {
  switch (key) {
    case 'w': playAudio('./sounds/crash.mp3'); break;
    case 'a': playAudio('./sounds/kick-bass.mp3'); break;
    case 's': playAudio('./sounds/snare.mp3'); break;
    case 'd': playAudio('./sounds/tom-1.mp3'); break;
    case 'j': playAudio('./sounds/tom-2.mp3'); break;
    case 'k': playAudio('./sounds/tom-3.mp3'); break;
    case 'l': playAudio('./sounds/tom-4.mp3'); break;
    default: console.log(key);
  }
}

function playAudio(filepath) {
  var audio = new Audio(filepath);
  audio.play();
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("."+key);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}