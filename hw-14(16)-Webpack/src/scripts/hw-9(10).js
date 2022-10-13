  function getRandomColor(){
    return `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
  };
  
  export function generateBlocksInterval(parent){
    let container = document.createElement('div');
    parent.append(container);
    container.classList.add('container_blocks');
    for(let i = 0; i < 25; i++){
      let div = document.createElement('div');
      container.append(div);
      div.classList.add('block');
      setInterval(() => {    
        div.style.background = getRandomColor();
      }, 1000);
    }; 
  };

  
  
  