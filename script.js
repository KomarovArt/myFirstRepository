'use strict';


// let screensArr;

const appData = {
     servicePrice: 0,
     rollback: 10,
     title: '',
     screens: '',
     screenPrice: 0,
     adaptive: true,
     service1: '',
     service2: '',
     fullPrice: 0,
     allServicePrices: 0,

     start: function () {
          appData.asking();
          appData.allServicePrices = appData.getAllServicePrices();
          appData.fullPrice = appData.getFullPrice();
          appData.title = appData.getTitle();
          appData.logger();
     },

     asking: function () {
          appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
          appData.screens = prompt("Какие типы экранов нужно разобрать?", "Простые, Сложные, Интерактивные");

          do {
               appData.screenPrice = Number(prompt("Сколько будет стоить данная работа?", "12000"));
          } while (!appData.isNumber(appData.screenPrice));

          appData.adaptive = confirm("Нужен ли адаптив на сайте?");

     },

     isNumber: function (num) {
          return !isNaN(parseFloat(num)) && isFinite(num);
     },

     getAllServicePrices: function () {
          let sum = 0;
          for (let i = 0; i < 2; i++) {

               if (i === 0) {
                    appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
               } else if (i === 1) {
                    appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
               }

               while (!appData.isNumber(appData.servicePrice)) {
                    appData.servicePrice = Number(prompt("Сколько это будет стоить?"));
               }
               sum += appData.servicePrice;

               //дебаг работы, проверка на входящий тип
               console.log(typeof (servicePrice));
          }
          return sum;
          // return servicePrice1 + servicePrice2;
     },

     getFullPrice: function () {
          return Number(appData.screenPrice) + Number(appData.allServicePrices);
     },

     getTitle: function () {
          appData.title = appData.title.trim().toLowerCase();
          return appData.title[0].toUpperCase() + appData.title.substring(1);
     },

     getServicePercentPrices: function () {
          return Math.ceil(appData.getFullPrice() - (appData.getFullPrice() * (appData.rollback / 100)));
     },

     showTypeOf: function (variable) {
          console.log(variable, typeof variable);
     },

     getRollbackMessage: function () {
          if (appData.fullPrice >= 30000) {
               console.log("Даем скидку в 10%");
          } else if (appData.fullPrice >= 15000 && appData.fullPrice < 30000) {
               console.log("Даем скидку в 5%");
          } else if (appData.fullPrice >= 0 && appData.fullPrice < 15000) {
               console.log("Скидка не предусмотрена");
          } else {
               console.log("Что то пошло не так");
          }
     },
     logger: function () {

          appData.showTypeOf(appData.title);
          appData.showTypeOf(appData.fullPrice);
          appData.showTypeOf(appData.adaptive);
          appData.getRollbackMessage();

          for (let consoleOutput in appData) {
               console.log(consoleOutput);
          }
     }

};

appData.start();

// screensArr = appData.screens.split(", ");