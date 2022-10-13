export function getMaxDigit(number){
    let digits = number.toString().split('');
    let maxDigit = digits[0];
    for(let i = 0; i < digits.length; i++){
        if(maxDigit < digits[i]){
            maxDigit = digits[i];
        }        
    }
    return maxDigit;
};
