// Дано массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
//   Знайти суму і кількість додатних (положительных) елементів.
//   Знайти мінімальний (найменший) елемент масива і його індекс.
//   Знайти максимальний (найбільший) елемент масива та його індекс
//   Визначити кількість від’ємних (отрицательных) елементів масива
//   Знайти кількість непарних додатних  елементів
//   Знайти кількість парних додатних елементів
//   Знайти суму парних додатних елементів
//   Знайти суму непарних додатних елементів
//   Знайти добуток всіх додатних елементів
//   Змінити на 0 всі елементи масива окрім найбільшого

let arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
let sumPositive = 0;
let countPositive = 0;
let min = arr[0];
let minIndex = 0;
let max = arr[0];
let maxIndex = 0;
let countNegative = 0;
let countPositiveOdd = 0;
let countPositiveEven = 0;
let sumPositiveEven = 0;
let sumPositiveOdd = 0;
let productPositive = 1;
let maxElement = arr[0];
let maxElementIndex = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sumPositive += arr[i];
    countPositive++;
    if (arr[i] % 2 === 0) {
      countPositiveEven++;
      sumPositiveEven += arr[i];
    } else {
      countPositiveOdd++;
      sumPositiveOdd += arr[i];
    }
    productPositive *= arr[i];
  }
  if (arr[i] < 0) {
    countNegative++;
  }
  if (arr[i] < min) {
    min = arr[i];
    minIndex = i;
  }
  if (arr[i] > max) {
    max = arr[i];
    maxIndex = i;
  }
  if (arr[i] > maxElement) {
    maxElement = arr[i];
    maxElementIndex = i;
  }
}

document.write(`Sum of positive elements: ${sumPositive}<br>`);
document.write(`Count of positive elements: ${countPositive}<br>`);
document.write(`Min element: ${min}, index: ${minIndex}<br>`);
document.write(`Max element: ${max}, index: ${maxIndex}<br>`);
document.write(`Count of negative elements: ${countNegative}<br>`);
document.write(`Count of positive odd elements: ${countPositiveOdd}<br>`);
document.write(`Count of positive even elements: ${countPositiveEven}<br>`);
document.write(`Sum of positive even elements: ${sumPositiveEven}<br>`);
document.write(`Sum of positive odd elements: ${sumPositiveOdd}<br>`);
document.write(`Product of positive elements: ${productPositive}<br>`);
