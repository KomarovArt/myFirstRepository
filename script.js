'use strict';

let numHidden = 0;


const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const game = function () {
    let randNumber = Math.round(Math.random() * 100);
    let goGame = confirm("Играем?");

    const gameResult = function () {
        if (goGame) {
            if (isNumber(numHidden)) {
                if (numHidden !== randNumber) {
                    numHidden = Number(prompt(confirm("Угадай число от 1 до 100")));
                    if (numHidden == false) {
                        alert("Игра окончена");
                        game();
                    } else if (numHidden < randNumber) {
                        console.log(numHidden);
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
                numHidden = 0;
                gameResult();
            }
        } else {
            alert("Игра окончена");
        }
    };
    gameResult();
};
game();