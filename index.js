
var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {

// mouse Click event
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  function handleClick() {
      var textOfButton = this.innerHTML;
      playAudio(textOfButton);
      createAnimation(textOfButton);
  }

}

// keypress Event
document.addEventListener("keypress", keyBoardPress );

function keyBoardPress(event){

    var keyPress = event.key;
    playAudio(keyPress);
    createAnimation(keyPress);
}
// When playAudio(keyPress); is called the value will replace with textOfButton of
// playAudio(textOfButton) and switch(textOfButton) and matches with each condition.

function playAudio(inputComesfromMouseClickandkeypress){

   switch (inputComesfromMouseClickandkeypress) {
     case "w":
        var tom1Audio = new Audio("sounds/tom-1.mp3");
        tom1Audio.play();
       break;

      case "a":
        var tom2Audio = new Audio("sounds/tom-2.mp3");
        tom2Audio.play();
        break;

      case "s":
        var tom3Audio = new Audio("sounds/tom-3.mp3");
        tom3Audio.play();
        break;

      case "d":
        var tom4Audio = new Audio("sounds/tom-4.mp3");
        tom4Audio.play();
        break;

      case "j":
        var crashAudio = new Audio("sounds/crash.mp3");
        crashAudio.play();
        break;
      case "k":
        var kickAudio = new Audio ("sounds/kick-bass.mp3");
        kickAudio.play();
        break;

      case "l":
        var snareAudio = new Audio ("sounds/snare.mp3");
        snareAudio.play();
        break;

     default: console.log(textOfButton);

   }
}
function createAnimation(receivedInput){
    var activate = document.querySelector("." + receivedInput);
    activate.classList.add("pressed");

    setTimeout(removeAnimation, 200);
    function removeAnimation(){
        activate.classList.remove("pressed");
    }
}
