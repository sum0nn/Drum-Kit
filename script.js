// Function to generate a random color
function getRandomColor() {
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  return randomColor;
}

// Function to change the button's text color to a random color
function changeButtonColor(button) {
  button.style.color = getRandomColor();
}

// Get the number of elements with class "drum"
var numberOfDrums = document.querySelectorAll(".drum").length;

// Add click event listeners to all elements with class "drum"
for (var i = 0; i < numberOfDrums; i++) {
  var button = document.querySelectorAll(".drum")[i];
  button.addEventListener("click", function() {
    changeButtonColor(this); // Change text color when clicked
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detect keyboard press
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
  var button = document.querySelector(`.${event.key}`);
  if (button) {
    changeButtonColor(button); // Change text color when a corresponding key is pressed
  }
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "j":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log("Unknown key: " + key);
  }
}

// Adding animations
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
