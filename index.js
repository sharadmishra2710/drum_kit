var buttonArray = document.querySelectorAll("button.drum");
var maxButton = buttonArray.length;
var audioList = new Array("crash.mp3","kick-bass.mp3","snare.mp3","tom-1.mp3","tom-2.mp3","tom-3.mp3","tom-4.mp3");
var keyList = new Array("w","a","s","d","j","k","l");
var flag=[true,true,true,true,true,true,true];

// Click event listener
for (let i=0; i< maxButton; i++){
  buttonArray[i].addEventListener("click", function () {
    this.style.color=(flag[i])?"white":"#DA0463";flag[i]=!flag[i];
    var audioBox = new Audio("sounds/"+audioList[i]);
    audioBox.play();
    whenPressed(this.innerHTML);
  });
}

// Press event listener
document.addEventListener("keypress", function (event){
      var keyVal = event.key;
      var tempi = keyList.indexOf(keyVal);
      if(tempi !== -1){
      var audioBox = new Audio("sounds/"+audioList[tempi]);
      audioBox.play();
      whenPressed(keyVal);
      }
  });

function whenPressed(myClass){
    document.querySelector("."+myClass).classList.add("pressed");
  setTimeout(function (){
    document.querySelector("."+myClass).classList.remove("pressed");
  }, 100);

}
