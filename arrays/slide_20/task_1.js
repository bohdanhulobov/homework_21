// Створити масив, довжину та елементи якого задає користувач.
// Після цього, відсортувати масив за зростанням.
// Далі, видалити з масива елементи з 2-го по 4-й елемент.
// По мірі змін масива - виводити його вміст на сторінку.

let arr = [];
let arrLength;

do {
  arrLength = parseInt(prompt("Enter array length (at least 5)"));
} while (isNaN(arrLength) || arrLength < 5 || arrLength > 100);

for (let i = 0; i < arrLength; i++) {
  arr.push(prompt("Enter array element"));
}

document.write(arr + "<br>");

arr.sort((a, b) => a - b);

document.write(arr + "<br>");

arr.splice(1, 3);

document.write(arr + "<br>");
