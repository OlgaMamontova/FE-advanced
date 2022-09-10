const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1 рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн
function getMyTaxes(salary){
    return salary * this.tax;
};

//2 рахує скільки у середньому податків платять IT-спеціалісти у кожній країні
function getMiddleTaxes(){
    return this.middleSalary * this.tax;
};

//3 рахує, скільки всього податків платять IT-спеціалісти у кожній країні
function getTotalTaxes(){
    return this.middleSalary * this.tax * this.vacancies;
};

//4
function getMySalary(){
    let salary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
    let taxes = +(salary * this.tax).toFixed(2);
    let mySalary = {
        salary,
        taxes,
        profit: +(salary - taxes).toFixed(2),
    };
    console.log(mySalary);
};

console.log(`${getMyTaxes.call(ukraine, 1550)}$ - податки з зарплатні 1550$ в Україні`);
console.log(`${getMiddleTaxes.call(latvia)}$ - середні податки в Латвії`);
console.log(`${getTotalTaxes.call(litva)}$ - всього податків в Литві`);
setInterval(getMySalary.bind(ukraine), 10000);