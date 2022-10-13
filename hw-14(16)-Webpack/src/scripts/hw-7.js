export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

//3 рахує, скільки всього податків платять IT-спеціалісти у кожній країні
export function getTotalTaxes(){
    return this.middleSalary * this.tax * this.vacancies;
};