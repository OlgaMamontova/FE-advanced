//1  яка повертає масив випадкових цілих чисел
function getRandomArray(length, min, max){
    const randomArray = [];
   // randomArray.length = length;
    for(let i = 0; i < length; i++){
        randomArray.push(Math.floor(Math.random() * (max + 1 - min)) + min);
    }   
    return randomArray;
};
//3 рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
function getAverage(...numbers){
    const arrNumbers = numbers.filter((number) => {
        return Number.isInteger(number);
    });
    let sum = 0;
    arrNumbers.forEach(number => sum += number);
    return sum / arguments.length;
}
//5 фільтрує парні числа передані як аргументи функції
function filterEvenNumbers(...numbers){
    const arrOddNumbers = numbers.filter(number => number%2 == 1);
    return arrOddNumbers;
}
//6 рахує кількість чисел більших 0
function countPositiveNumbers(...numbers){
    let count = 0;
    numbers.forEach((number) => {
        if(number > 0){
            count++;
        }
    });
    return count;
}
//7 відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
function getDividedByFive(...numbers){
    return numbers.filter(number => number%5 == 0);
}
//8  замінить погані слова на зірочки (*)
function replaceBadWords(string){
    let badWords = /shit|fuck/gi;
    const arr = string.split(' ');
    const arrCensor = arr.map(word => word = word.replace(badWords, '****'));
    return arrCensor.join(' ');
    //return string.replace(badWords, '****');
    //В цьому завданні працює і без розкладання на масив і збирання назад в строку. Мабуть я не вірно зробила?
}

console.log(getRandomArray(15, 1, 100));
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6,));
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(replaceBadWords("Are you fucking kidding? Holy shit! It's bullshit!"));