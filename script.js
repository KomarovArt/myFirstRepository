'use strict';

// Восстановить порядок книг.
const bookList = document.querySelectorAll('.book');
console.log(bookList);

// Удалить рекламу со страницы
const deleteSpam = document.querySelector('.adv');
deleteSpam.remove();

// Заменить картинку заднего фона на другую из папки image
const backgroundPicture = document.getElementsByTagName('body');
backgroundPicture[0].style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';