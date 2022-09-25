async function getRandomChinese(length){
  let word = '';
  while(word.length < length) {
    let sign = new Promise((resolve, reject) => {
      setTimeout(() => resolve(String.fromCharCode(Date.now().toString().slice(-5))), 50);
    });
    word += await sign;    
  };
  return word;
};

getRandomChinese(4).then(res => console.log(res));