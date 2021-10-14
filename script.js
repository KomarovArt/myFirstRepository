'use strict';


// let screensArr;

const appData = {
     servicePrice: 0,
     rollback: 10,
     title: '',
     screens: [],
     screenPrice: 0,
     adaptive: true,
     services: {},
     fullPrice: 0,
     allServicePrices: 0,
     ServicePercentPrices: 0,

     start: function () {
          appData.asking();
          appData.addPrices();
          appData.getFullPrice();
          appData.getTitle();
          appData.logger();
     },

     asking: function () {



          do {
               appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
               appData.showTypeOf(appData.title);
          } while (appData.isNumber(appData.title));

          for (let i = 0; i < 2; i++) {
               let price = 0;
               let name = '';

               do {
                    name = prompt("Какие типы экранов нужно разобрать?");
                    appData.showTypeOf(name);
               } while (appData.isNumber(name));

               do {
                    price = Number(prompt("Сколько будет стоить данная работа?", "12000"));
                    appData.showTypeOf(price);
               } while (!appData.isNumber(price));

               appData.screens.push({
                    id: i,
                    name: name,
                    price: price
               });
          }

          for (let i = 0; i < 2; i++) {

               let name = '';

               do {
                    name = prompt("Какой дополнительный тип услуги нужен?");
                    appData.showTypeOf(name);
               } while (appData.isNumber(name));

               do {
                    appData.servicePrice = prompt("Сколько это будет стоить?");
                    appData.showTypeOf(appData.servicePrice);
               } while (!appData.isNumber(appData.servicePrice));

               appData.services[name] = Number(appData.servicePrice);


          }

          appData.adaptive = confirm("Нужен ли адаптив на сайте?");
     },
     addPrices: function () {
          for (let screen of appData.screens) {
               appData.screenPrice += Number(screen.price);
          }
          for (let key in appData.services) {
               appData.allServicePrices += appData.services[key];
          }
     },
     isNumber: function (num) {
          return !isNaN(parseFloat(num)) && isFinite(num);
     },


     getFullPrice: function () {
          appData.fullPrice = Number(appData.screenPrice) + Number(appData.allServicePrices);
     },

     getTitle: function () {
          appData.title = appData.title.trim().toLowerCase();
          appData.title = appData.title[0].toUpperCase() + appData.title.substring(1);
     },

     getServicePercentPrices: function () {
          appData.ServicePercentPrices = Math.ceil(appData.getFullPrice() - (appData.getFullPrice() * (appData.rollback / 100)));
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
          appData.showTypeOf(appData.screens);
          appData.showTypeOf(appData.services);
          appData.getRollbackMessage();

     }

};

appData.start();

// screensArr = appData.screens.split(", ");