// 15
// Дано ціле число. З’ясувати, чи можна це число отримати шляхов возведення числа 3 в деяку ступінь.
//  Наприклад, числа 9, 81 можно отримати, а 13 - ні

const number = parseInt(prompt("Enter your number"));
let isPowerOfThree = false;

for (let i = 0; i <= number; i++) {
  if (Math.pow(3, i) === number) {
    isPowerOfThree = true;
    break;
  }
}

if (isPowerOfThree) {
  document.write("Your number is power of three");
} else {
  document.write("Your number is not power of three");
}
