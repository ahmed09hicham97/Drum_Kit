const numberOfDrumButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", audio);
}

function audio() {
  let buttonclicked = this.innerHTML;
  makeSounds(buttonclicked);
  buttonAnimetion(buttonclicked);
}

document.addEventListener("keydown", function (event) {
  makeSounds(event.key);
  buttonAnimetion(event.key);
});

function makeSounds(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("/sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("/sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("/sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      let kickBass = new Audio("/sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "k":
      let crash = new Audio("/sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimetion(currentKey) {
  let activeKey = document.querySelector("." + currentKey);
  activeKey.classList.add("pressed");
  setTimeout(function () {
    activeKey.classList.remove("pressed");
  }, 150);
}
