let title = "Типы данных, операторы, методы и свойства";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 15;
let rollback = Math.random(0, 100);
let fullPrice = 150000;
let adaptive = true;

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