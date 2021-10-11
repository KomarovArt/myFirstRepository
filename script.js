'use strict';

let numHidden = 0;
let goGame = confirm("Играем?");

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const game = function () {
    let randNumber = Math.round(Math.random() * 100);
    console.log(randNumber);
    const gameResult = function () {
        if (goGame) {
            numHidden = Number(prompt("Угадай число от 1 до 100"));
            if (isNumber(numHidden)) {
                if (numHidden == randNumber) {
                    alert("Поздравляю, Вы угадали!!!");
                } else if (numHidden !== randNumber) {
                    console.log(numHidden, typeof (numHidden));
                    if (numHidden == 0) {
                        let gameOver = confirm("Хотите окончить игру?");
                        if (gameOver) {
                            alert("Игра окончена");
                        } else {
                            numHidden = 0;
                            gameResult();
                        }
                    } else if (numHidden < randNumber) {
                        alert("Заданное число больше!");
                        gameResult();
                    } else if (numHidden > randNumber) {
                        alert("Загаданное число меньше!");
                        gameResult();
                    }
                }
            } else {
                alert("Введи число!");
                let numHidden = 0;
                gameResult();
            }
        } else {
            alert("Игра окончена");
        }
    };
    gameResult();
};
game();