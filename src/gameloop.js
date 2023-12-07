const gameboard = require('../src/gameboard.js');
const player = require('../src/player.js');
const paintBoard = require('../src/paintBoard.js');

const gameloop = () => {
    const p1 = player();
    const p1Board = gameboard();
    const p1PlayArea = p1Board.playArea();
    const p1Objects = {p1, p1Board, p1PlayArea}

    const cpu = player();
    const cpuBoard = gameboard();
    const cpuPlayArea = cpuBoard.playArea();
    const cpuObjects = {cpu, cpuBoard, cpuPlayArea};

    const paintDOM = paintBoard();

    async function vsCPU() {
        cpuBoard.placeShipsAtRandom(cpuObjects.cpuPlayArea, cpuObjects.cpuBoard);
        p1Board.placeShipsAtRandom(p1Objects.p1PlayArea, p1Objects.p1Board);
        while (!p1Board.allSunk() && !cpuBoard.allSunk()) {
            paintDOM.paintFriendly(p1Objects.p1Board, p1Objects.p1PlayArea);
            
            // Wait for the player's turn
            await p1.waitForPlayerTurn();
            
            paintDOM.paintEnemy(cpuObjects.cpuBoard, cpuObjects.cpuPlayArea);
            
            // Execute CPU's turn
            cpu.cpuTurn(p1PlayArea, p1Board);
        };
    };
   
    return {
        p1Objects,
        cpuObjects,
        vsCPU,
    };
};

module.exports = gameloop;