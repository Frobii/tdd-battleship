const gameboard = require('../src/gameboard.js');
const player = require('../src/player.js');
const ship = require('../src/ship.js');

const gameloop = () => {
    const p1 = player();
    const p1Board = gameboard();
    const p1PlayArea = p1Board.playArea();
    const p1Objects = {p1, p1Board, p1PlayArea}

    const cpu = player();
    const cpuBoard = gameboard();
    const cpuPlayArea = cpuBoard.playArea();
    const cpuObjects = {cpu, cpuBoard, cpuPlayArea};

    const vsCPU = (playerBoard, cpuBoard) => {

        if (!playerBoard.allSunk && !cpuBoard.allSunk) {

        };
    };

    return {
        p1Objects,
        cpuObjects,
    };
};

module.exports = gameloop;