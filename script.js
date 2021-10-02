let num = 266219;
let numString = String(num);
let numConsoleLog = 1;


/*Вывести в консоль произведение (умножение) цифр этого числа
Например: число 123, при помощи javaScript получить каждую цифру ( 1, 2, 3 ) и перемножить их. Правильно использовать цикл или методы перебора.*/

for (let x = 0; x < numString.length; x++) {
    numConsoleLog = numConsoleLog * numString[x];
}

console.log(numConsoleLog);

//Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
numConsoleLog = (numConsoleLog ** 3);
console.log(numConsoleLog);

//Вывести в консоль первые 2 цифры полученного числа
numString = String(numConsoleLog);
console.log(numString.substr(0, 2));