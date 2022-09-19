const keyA = new Audio("audio/keyA");
const keyS = new Audio("audio/keyS");
const keyD = new Audio("audio/keyD");
const keyF = new Audio("audio/keyF");
const keyG = new Audio("audio/keyG");
const keyH = new Audio("audio/keyH");
const keyJ = new Audio("audio/keyJ");
const keyK = new Audio("audio/keyK");
const keyL = new Audio("audio/keyL");



document.body.addEventListener("keydown", function (e){
    switch(e.code) {
        case "KeyA":
            keyA.play();
          break;
          case "KeyS":
            keyS.play();
          break;
          case "KeyD":
            keyD.play();
          break;
          case "KeyF":
            keyF.play();
          break;
          case "KeyG":
            keyG.play();
          break;
          case "KeyH":
            keyH.play();
          break;
          case "KeyJ":
            keyJ.play();
          break;
          case "KeyK":
            keyK.play();
          break;
          case "KeyL":
            keyL.play();
          break;
      }
});