// Знайти середнє арифметичне всіх цілих чисел від 1 до 500

let sum = 0;
const number = 500;

for (let i = 1; i <= number; i++) {
  sum += i;
}

document.write(sum / number);
