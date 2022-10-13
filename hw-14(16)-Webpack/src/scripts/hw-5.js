//4 рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
export function getMedian(...numbers){
    const arrNumbers = numbers.filter((number) => {
        return Number.isInteger(number);
    });    
    arrNumbers.sort((a, b) => {
        return a-b;
    });
    let halfLength = arrNumbers.length / 2;
    if(arrNumbers.length%2){
        return arrNumbers[halfLength - 0.5];
    } else {
        return (arrNumbers[halfLength - 1] + arrNumbers[halfLength]) / 2;
    }
}