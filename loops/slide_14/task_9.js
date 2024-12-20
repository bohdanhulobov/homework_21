// Дано натуральне число (>0). Знайти і вивести на сторінку всі його дільники
//  Визначити кількість його парних дільників
//  Знайти суму його парних дільників

const number = parseInt(prompt("Enter your number"), 10);

let divisorsCount = 0;
let evenDivisorsCount = 0;
let evenDivisorsSum = 0;
let divisors = "";

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    divisors += i + " ";
    divisorsCount++;
    if (i % 2 === 0) {
      evenDivisorsCount++;
      evenDivisorsSum += i;
    }
  }
}

document.write(`Divisors: ${divisors}<br>`);
document.write(`Number of even divisors: ${evenDivisorsCount}<br>`);
document.write(`Sum of even divisors: ${evenDivisorsSum}`);
