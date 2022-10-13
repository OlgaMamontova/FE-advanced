import keyA from "../assets/audio/keyA.mp3";
import keyS from "../assets/audio/keyS.mp3";
import keyD from "../assets/audio/keyD.mp3";
import keyF from "../assets/audio/keyF.mp3";
import keyG from "../assets/audio/keyG.mp3";
import keyH from "../assets/audio/keyH.mp3";
import keyJ from "../assets/audio/keyJ.mp3";
import keyK from "../assets/audio/keyK.mp3";
import keyL from "../assets/audio/keyL.mp3";

let audio = new Audio();

document.body.addEventListener("keydown", function (e){
  removeActive();        
  let classCurrentKey = "key" + e.code.substr(-1);
    if (document.querySelector(`.${classCurrentKey}`)) {
      document.querySelector(`.${classCurrentKey}`).classList.add("active");
      getAudioSrc(e);  
      audio.play();
    };       
});

document.querySelector('.container').addEventListener('click', function(e){
    removeActive();    
    if (e.target.classList.contains('key')) {
      e.target.classList.add("active");
      getAudioSrc(e);
      audio.play();
    }
});

function removeActive() {
  document.querySelectorAll('div').forEach(div => div.classList.remove("active"));   
};

function getAudioSrc(e) {
  if ((e.code == "KeyA") || (e.target.classList.contains("keyA"))) {
    audio.src = keyA;
  };
  if ((e.code == "KeyS") || (e.target.classList.contains("keyS"))) {
    audio.src = keyS;
  };
  if ((e.code == "KeyD") || (e.target.classList.contains("keyD"))) {
    audio.src = keyD;
  };
  if ((e.code == "KeyF") || (e.target.classList.contains("keyF"))) {
    audio.src = keyF;
  };
  if ((e.code == "KeyG") || (e.target.classList.contains("keyG"))) {
    audio.src = keyG;
  };
  if ((e.code == "KeyH") || (e.target.classList.contains("keyH"))) {
    audio.src = keyH;
  };
  if ((e.code == "KeyJ") || (e.target.classList.contains("keyJ"))) {
    audio.src = keyJ;
  };
  if ((e.code == "KeyK") || (e.target.classList.contains("keyK"))) {
    audio.src = keyK;
  };
  if ((e.code == "KeyL") || (e.target.classList.contains("keyL"))) {
    audio.src = keyL;
  };
};