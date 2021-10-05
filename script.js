'use strict';

let rollback = Math.round((Math.random()) * 100);
let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разобрать?", "Простые, Сложные, Интерактивные");
let screenPrice = prompt("Сколько будет стоить данная работа?", "12000");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = prompt("Сколько это будет стоить?");
let fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
let servicePercentPrice;



//Объявить функцию getAllServicePrices. Функция возвращает сумму всех дополнительных услуг. Результат сохраняем в переменную allServicePrices. Тип - function expression
const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
};

/*Объявить функцию getFullPrice. 
Функция возвращает сумму стоимости верстки и стоимости дополнительных услуг 
(screenPrice + allServicePrices). Результат сохраняем в переменную fullPrice. Тип - function declaration*/
function getFullPrice() {
    return screenPrice + getAllServicePrices();
}

/*Объявить функцию getTitle. Функция возвращает title меняя его таким образом:
 первый символ с большой буквы, остальные с маленькой". Учесть вариант что строка 
 может начинаться с пустых символов. " КаЛьКулятор Верстки"*/
const getTitle = function () {
    let resulttitle = title.trim();
    resulttitle = resulttitle.toLowerCase();
    resulttitle = resulttitle[0].toUpperCase() + resulttitle.substring(1);
    return resulttitle;
};

/* Объявить функцию getServicePercentPrices. Функция возвращает итоговую стоимость
 за вычетом процента отката. Результат сохраняем в переменную
  servicePercentPrice (итоговая стоимость минус сумма отката)*/
const getServicePercentPrices = function () {
    return Math.ceil(getFullPrice() - (getFullPrice() * (rollback / 100)));
};

console.log(getTitle());



// if (fullPrice >= 30000) {
//     console.log("Даем скидку в 10%");
// } else if (fullPrice >= 15000 && fullPrice < 30000) {
//     console.log("Даем скидку в 5%");
// } else if (fullPrice >= 0 && fullPrice < 15000) {
//     console.log("Скидка не предусмотрена");
// } else {
//     console.log("Что то пошло не так");
// }

/*
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " долларов");
console.log("Стоимость разработки сайта " + (fullPrice) + " рублей");
console.log(screens.toLocaleLowerCase().split(", "));
let percentageForWork = fullPrice * (rollback / 100);
console.log(Math.round(percentageForWork));
*/