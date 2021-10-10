'use strict';

let numHidden = 0;
let goGame = confirm("Играем?");

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const game = function () {
    let randNumber = Math.round(Math.random() * 100);
    const gameResult = function () {
        if (goGame) {
            if (isNumber(numHidden)) {
                if (numHidden !== randNumber) {
                    numHidden = Number(prompt("Угадай число от 1 до 100", "88"));
                    if (numHidden < randNumber) {
                        alert("Заданное число больше!");
                    } else if (numHidden > randNumber) {
                        alert("Загаданное число меньше!");
                    }
                    gameResult();
                } else {
                    alert("Поздравляю, Вы угадали!!!");
                }
            } else {
                alert("Введи число!");
                gameResult();
            }
        } else {
            alert("Игра окончена");
        }
    };
    gameResult();
};
game();