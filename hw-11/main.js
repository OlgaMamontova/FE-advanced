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
    audio.src = "audio/keyA.mp3";
  };
  if ((e.code == "KeyS") || (e.target.classList.contains("keyS"))) {
    audio.src = "audio/keyS.mp3";
  };
  if ((e.code == "KeyD") || (e.target.classList.contains("keyD"))) {
    audio.src = "audio/keyD.mp3";
  };
  if ((e.code == "KeyF") || (e.target.classList.contains("keyF"))) {
    audio.src = "audio/keyF.mp3";
  };
  if ((e.code == "KeyG") || (e.target.classList.contains("keyG"))) {
    audio.src = "audio/keyG.mp3";
  };
  if ((e.code == "KeyH") || (e.target.classList.contains("keyH"))) {
    audio.src = "audio/keyH.mp3";
  };
  if ((e.code == "KeyJ") || (e.target.classList.contains("keyJ"))) {
    audio.src = "audio/keyJ.mp3";
  };
  if ((e.code == "KeyK") || (e.target.classList.contains("keyK"))) {
    audio.src = "audio/keyK.mp3";
  };
  if ((e.code == "KeyL") || (e.target.classList.contains("keyL"))) {
    audio.src = "audio/keyL.mp3";
  };
};