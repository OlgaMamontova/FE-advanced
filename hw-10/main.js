function getRandomColor(){
  return `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
};

function generateBlocks(){
  let blocks = [];
  for(let i = 0; i < 25; i++){
    blocks[i] = document.createElement('div');
    document.body.append(blocks[i]);
    blocks[i].classList.add('block');
    blocks[i].style.background = getRandomColor();
  };
};
generateBlocks();

function generateBlocksInterval(){
  let blocks = [];
  for(let i = 0; i < 25; i++){
    blocks[i] = document.createElement('div');
    document.body.append(blocks[i]);
    blocks[i].classList.add('block');
  };
  setInterval(() => {
    blocks.forEach(block => {
      block.style.background = getRandomColor();
    });
  }, 1000);
}
generateBlocksInterval(); 