'use strict';

// Восстановить порядок книг.
const bookList = document.querySelectorAll('.book');
bookList[5].after(bookList[2]);
bookList[1].after(bookList[0]);
bookList[4].after(bookList[3]);


// Удалить рекламу со страницы
const deleteSpam = document.querySelector('.adv');
deleteSpam.remove();

// Заменить картинку заднего фона на другую из папки image
const backgroundPicture = document.getElementsByTagName('body');
backgroundPicture[0].style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
const titleBook = bookList[4].querySelector('h2');
titleBook.textContent = 'Книга 3. this и Прототипы Объектов';
titleBook.style.color = 'darkkhaki';


// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
const secondBook = bookList[0].querySelectorAll('li');
secondBook[3].after(secondBook[8]);
secondBook[3].after(secondBook[6]);
secondBook[9].after(secondBook[2]);

const fifthBook = bookList[5].querySelectorAll('li');
fifthBook[1].after(fifthBook[9]);
fifthBook[4].after(fifthBook[2]);
fifthBook[7].after(fifthBook[5]);

// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

const sixthBook = bookList[2].querySelectorAll('ul');
const elem = document.createElement('li');
elem.textContent = 'Глава 8: За пределами ES6';
sixthBook[0].append(elem);
const newsixthBook = bookList[2].querySelectorAll('li');
newsixthBook[8].after(newsixthBook[10]);