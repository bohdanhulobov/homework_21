// Дано ціле число. З’ясувати, чи є воно простим
//  Простим називається число, яке більше 1 та яке не має жодних інших дільників окрім 1 і самого себе). Наприклад, 5, 7, 13…

const number = parseInt(prompt("Enter your number"));
let isPrime = true;

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  document.write("Your number is prime");
} else {
  document.write("Your number is not prime");
}
