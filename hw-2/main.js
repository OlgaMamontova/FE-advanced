let N = +prompt("Введіть, будь ласка, перше ціле додатне число");
while (!Number.isInteger(N) || N == "" || N < 0){
    N = +prompt("Введіть, будь ласка, перше ціле додатне число");
}

let M = +prompt("Введіть, будь ласка, друге ціле додатне число, більше першого");
while (!Number.isInteger(M) || M == "" || M < 0 || M < N){
    M = +prompt("Введіть, будь ласка, друге ціле додатне число, більше першого");
}

let checkEven = confirm('Потрібно пропускати парні числа?');
let result = 0;
if(checkEven){
    for(i = N; i <= M; i++){
        (i%2) ? result += i: result;
    }
    console.log("Сума чисел від " + N + " до " + M + ", без парних чисел = " + result);
} else {
    for(i = N; i <= M; i++){
        result += i;
    }
    console.log("Сума чисел від " + N + " до " + M + " = " + result);
}

