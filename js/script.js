'use strict';

// Получить заголовок "Калькулятор верстки" через метод getElementsByTagName. (тэг h1, получить именно элемент, а не коллекцию)
const titleСalculator = document.getElementsByTagName('h1');
console.log(titleСalculator[0].textContent);

// Получить кнопки "Рассчитать" и "Сброс" через метод getElementsByClassName. (класс handler_btn)
const buttonStartReset = document.getElementsByClassName('handler_btn');
console.log(buttonStartReset);

// Получить кнопку "+" под выпадающим списком через метод querySelector. (класс screen-btn)
const buttonPlus = document.querySelector('.screen-btn');
console.dir(buttonPlus);

// Получить все элементы с классом other-items в две разные переменные.
//  В первую элементы у которых так же присутствует класс percent,
//  во вторую элементы у которых так же присутствует класс number через метод querySelectorAll.

const otherItemPercent = document.querySelectorAll('.percent');
const otherItemNumber = document.querySelectorAll('.number');
console.log(otherItemPercent);
console.log(otherItemNumber);

// Получить input type=range через его родителя с классом rollback одним запросом через метод querySelector.
const stripeRollback = document.querySelector('.rollback');
console.dir(stripeRollback.children[0].children[0]);

// Получить span с классом range-value через его родителя с классом rollback одним запросом через метод querySelector.
console.dir(stripeRollback.children[0].children[1]);

// Получить все инпуты с классом total-input справа через метод getElementsByClassName. (класс total-input, получить именно элементы, а не коллекции)
const totalInput = document.getElementsByClassName('total-input');
//Первый вариант
const totalInputChildren1 = totalInput[0];
console.log(totalInputChildren1);
const totalInputChildren2 = totalInput[1];
console.log(totalInputChildren2);
const totalInputChildren3 = totalInput[2];
console.log(totalInputChildren3);
const totalInputChildren4 = totalInput[3];
console.log(totalInputChildren4);
const totalInputChildren5 = totalInput[4];
console.log(totalInputChildren5);

// второй вариант
for (let key of totalInput) {
    console.log(key);
}

// Получить все блоки с классом screen в изменяемую переменную ( let ) через метод querySelectorAll (далее мы будем переопределять ее значение)
let blocksScreens = document.querySelectorAll('.screen');
console.dir(blocksScreens[0].children[0].children[0]);