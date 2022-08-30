//1
function getMaxDigit(number){
    let digits = number.toString().split('');
    let maxDigit = digits[0];
    for(let i = 0; i < digits.length; i++){
        if(maxDigit < digits[i]){
            maxDigit = digits[i];
        }        
    }
    return maxDigit;
};

//2
function getPowerOfNumber(number, power){
    let result = 1;
    for(i = 1; i <= power; i++){
        result *= number;
    }
    return result;
};

//3
function getName(name){
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
};

//5
function getRandomNumber(minNumber, maxNumber){
    let randomNumber = Math.floor((minNumber) + Math.random()*(maxNumber-minNumber)); 
       return randomNumber;
}

//6
function countLetter(letter, word){
    let counter = 0;
    let arrWord = word.toLowerCase().split('');
    for(let i = 0; i < arrWord.length; i++){
        if(arrWord[i] === letter){
            counter++;
        }
    }
    return counter;
}
//10
function getRandomPassword(size = 8){
    let password = Math.random();
    while(Math.floor(password).toString().length < size){
        password *= 10;
    }   
    return Math.floor(password);
}



document.writeln(`Найбільша цифра у числі 876 = ${getMaxDigit(876)}<br>`);
document.writeln(`3 в степені 5 = ${getPowerOfNumber(3,5)}<br>`);
document.writeln(`Правильне написання імені oLGa - ${getName('oLGa')}<br>`);
document.writeln(`Ціле число в діапазоні від 2 до 15 - ${getRandomNumber(2, 15)}<br>`);
document.writeln(`Буква "а" повторюється в слові "Асталавіста" ${countLetter("а", "Асталавіста")} разів <br>`);
document.writeln(`Випадковий 4-значний пароль - ${getRandomPassword(4)}<br>`);
