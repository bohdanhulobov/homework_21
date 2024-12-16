// Вивести таблицю множення на 7 (1*7 = 7; 2*7 = 14…)

let str = "";

for (let i = 1; i <= 10; i++) {
  str += `${i} * 7 = ${i * 7}<br>`;
}

document.write(str);
