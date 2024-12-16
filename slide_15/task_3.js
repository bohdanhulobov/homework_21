// Дано ціле число (N). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

const number = parseInt(prompt("Enter your number"));
let str = "";

for (let i = 1; i <= 100; i++) {
  if (i * i <= number) {
    str += i + " ";
  }
}

document.write(str);
