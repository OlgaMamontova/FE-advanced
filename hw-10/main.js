function getRandomColor(){
  return `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
};

function generateBlocks(){
  for(let i = 0; i < 25; i++){
    let div = document.createElement('div');
    document.body.append(div);
    div.classList.add('block');
    div.style.background = getRandomColor();
  };
};
generateBlocks();

function generateBlocksInterval(){
  for(let i = 0; i < 25; i++){
    let div = document.createElement('div');
    document.body.append(div);
    div.classList.add('block');
    setInterval(() => {    
      div.style.background = getRandomColor();
    }, 1000);
  };  
}
generateBlocksInterval(); 