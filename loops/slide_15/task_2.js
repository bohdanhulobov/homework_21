// Один доллар коштує 42 гривні. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

let str = "";
const exchangeRate = 42;

for (let i = 10; i <= 100; i += 10) {
  str += `${i} dollars = ${i * exchangeRate} UAH<br>`;
}

document.write(str);
