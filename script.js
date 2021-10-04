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
let fullPrice;
let servicePercentPrice;

//-Спрашиваем у пользователя “Как называется ваш проект?” и результат сохраняем в переменную title
//-Спросить у пользователя “Какие типы экранов нужно разработать?” сохранить в переменную screens (пример: "Простые, Сложные, Интерактивные")
//-Спросить у пользователя “Сколько будет стоить данная работа?” и сохранить в переменную screenPrice (пример: 12000)
//-Спросить у пользователя “Нужен ли адаптив на сайте?” и сохранить данные в переменной adaptive (булево значение true/false)
/*-Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 
1. “Какой дополнительный тип услуги нужен?” (например service1, service2) 
2. “Сколько это будет стоить?” (например servicePrice1, servicePrice2) в итоге 4 вопроса и 4 разные переменных,
вопросы задаются в такой последовательности Название - Стоимость - Название - Стоимость */

/*Вычислить итоговую стоимость работы учитывая стоимость верстки экранов и дополнительных услуг
 (screenPrice + servicePrice1 + servicePrice2) и результат занести в переменную fullPrice */

fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
console.log(fullPrice);
console.log(rollback);
/*Объявить переменную servicePercentPrice и занести в нее итоговую стоимость за вычетом процента отката 
(fullPrice - Процент отката за работу), округляя в большую сторону (методы объекта Math в помощь) и вывести ее в консоль*/
servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
console.log(servicePercentPrice);

/*Написать конструкцию условий (расчеты приведены в рублях) (вывести в консоль)
  - Если fullPrice больше 30000, то “Даем скидку в 10%” 
  - Если fullPrice больше 15000 и меньше 30000, то сообщение “Даем скидку в 5%” 
  - Если fullPrice меньше 15000 и больше 0 то в консоль вывести сообщение “Скидка не предусмотрена” 
  - Если отрицательное значение то вывести “Что то пошло не так” 
  - Учесть варианты 0, 15000 и 30000(к какому уровню не важно) */

if (fullPrice >= 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice >= 0 && fullPrice < 15000) {
    console.log("Скидка не предусмотрена");
} else {
    console.log("Что то пошло не так");
}

/*
//Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

//Вывести в консоль длину строки screens
console.log(screens.length);

//Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” и “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”
console.log("Стоимость верстки экранов " + screenPrice + " долларов");
console.log("Стоимость разработки сайта " + (fullPrice) + " рублей");

//Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(screens.toLocaleLowerCase().split(", "));

//Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
let percentageForWork = fullPrice * (rollback / 100);
console.log(Math.round(percentageForWork));
*/