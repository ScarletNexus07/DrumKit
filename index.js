var drum = document.querySelectorAll(".drum");
var numberOfDrumButtons = drum.length;
//for making sound using clicks
for (var i = 0; i < numberOfDrumButtons; i++) {
  drum[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}
//for making sound using the key pressed
document.addEventListener("keydown", function (event) {
  var buttonKeyPressed = event.key;
  makeSound(buttonKeyPressed);
  buttonAnimation(buttonKeyPressed);
});

//function for making sound corresponding to the key passed
function makeSound(key) {
  switch (key) {
    case "w": {
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    }
    case "a": {
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    }
    case "s": {
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    }
    case "d": {
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    }
    case "j": {
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    }
    case "k": {
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    }
    case "l": {
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    }
    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.toggle("pressed");
  setTimeout(function () {
    document.querySelector("." + currentKey).classList.toggle("pressed");
  }, 100);
}
