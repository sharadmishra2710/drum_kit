var buttonArray = document.querySelectorAll("button.drum");
var maxButton = buttonArray.length;
var audioList = new Array("crash.mp3","kick-bass.mp3","snare.mp3","tom-1.mp3","tom-2.mp3","tom-3.mp3","tom-4.mp3");
var keyList = new Array("q","w","e","r","t","y","q");
var flag=true;

for (let i=0; i< maxButton; i++){
  buttonArray[i].addEventListener("click", function () {
    this.style.color=(flag)?"red":"white";flag=!flag;
    var audioBox = new Audio("sounds/"+audioList[i]);
    audioBox.play();
  });
}
