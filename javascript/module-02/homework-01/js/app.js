let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число', '');
  numbers.push(Number(input));
} while (input !== null);

for (el of numbers) {
  total += el;
}

const message = `Общая сумма чисел равна ${total}`;

console.log(message);
