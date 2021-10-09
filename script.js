'use strict';

let rollback;
let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let service2;
let fullPrice;
let allServicePrices;
let screensArr;
let resulttitle;
let servicePrice;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function () {
    rollback = Math.round((Math.random()) * 100);
    title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    screens = prompt("Какие типы экранов нужно разобрать?", "Простые, Сложные, Интерактивные");

    do {
        screenPrice = Number(prompt("Сколько будет стоить данная работа?", "12000"));
    } while (!isNumber(screenPrice));

    adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        servicePrice = "";
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?");
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?");
        }

        while (!isNumber(servicePrice)) {
            servicePrice = Number(prompt("Сколько это будет стоить?"));
        }
        sum += servicePrice;

        //дебаг работы, проверка на входящий тип
        console.log(typeof (servicePrice));
    }
    return sum;
    // return servicePrice1 + servicePrice2;
};

function getFullPrice() {
    return Number(screenPrice) + Number(allServicePrices);
}

const getTitle = function () {
    title = title.trim().toLowerCase();
    return title[0].toUpperCase() + title.substring(1);
};

const getServicePercentPrices = function () {
    return Math.ceil(getFullPrice() - (getFullPrice() * (rollback / 100)));
};

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

const getRollbackMessage = function () {
    if (fullPrice >= 30000) {
        console.log("Даем скидку в 10%");
    } else if (fullPrice >= 15000 && fullPrice < 30000) {
        console.log("Даем скидку в 5%");
    } else if (fullPrice >= 0 && fullPrice < 15000) {
        console.log("Скидка не предусмотрена");
    } else {
        console.log("Что то пошло не так");
    }
};

asking();

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
getRollbackMessage();

screensArr = screens.split(", ");
console.log(allServicePrices);
console.log(getServicePercentPrices());
console.log(screens);
console.log(screensArr);
console.log(title);