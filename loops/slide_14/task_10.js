// Вивести на сторінку повну таблицю множення від 1 до 10

let str = "";

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    str += `${i} * ${j} = ${i * j}<br>`;
  }
  str += "<br>";
}

document.write(str);
