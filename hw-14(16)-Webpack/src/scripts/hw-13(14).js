//генератор, який буде регулювати розміри шрифту
let text = document.querySelector('.text');
document.querySelector('.up').addEventListener('click', function(){
    text.style.fontSize = fontGenerator.next("up").value + 'px';
});
document.querySelector('.down').addEventListener('click', function(){
    text.style.fontSize = fontGenerator.next("down").value + 'px';
});

function* newFontGenerator(size){
    let calcSize;
    while(true){
        if (calcSize === 'up') {
            size += 2;
        };
        if (calcSize === 'down') {
            size -= 2;
        };
        calcSize = yield size;
    };
};
export const fontGenerator = newFontGenerator(14);


