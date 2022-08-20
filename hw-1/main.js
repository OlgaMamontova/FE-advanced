const BANANAS = 15.678;
const MANGO = 123.965;
const LEMONS = 90.2345;
let sum = +BANANAS + +MANGO + +LEMONS;
//Випадкова знижка
let discount = (Math.random() * 100).toFixed(0);
//Знижка від суми
let discountSum = sum * discount / 100;

let list = `
Банани: ${BANANAS};
Манго: ${MANGO};
Лимони: ${LEMONS};
------------------
Максимальне число: ${Math.max(BANANAS, MANGO, LEMONS)};
Мінімальне число: ${Math.min(BANANAS, MANGO, LEMONS)};
Вартість всіх товарів: ${sum};
Сума цілих частин кожного товару: ${Math.floor(BANANAS) + Math.floor(MANGO) + Math.floor(LEMONS)};
Сума товарів округлена до сотень: ${Math.round(sum / 100) * 100};
Сума всіх товарів непарне число?: ${Math.floor(sum) % 2 === 1};
Сума решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн: ${500 - sum};
Середнє значення цін, округлене до другого знаку після коми: ${ Math.round(sum/3 * 100) / 100};
Випадкова знижка: ${discount}%;
Сума до оплати зі знижкою: ${(sum - discountSum).toFixed(2)};
Чистий прибуток: ${((sum / 2) - discountSum).toFixed(2)};
`
console.log(list);