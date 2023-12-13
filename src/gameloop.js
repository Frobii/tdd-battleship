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
        paintDOM.paintFriendly(p1Objects.p1Board, p1Objects.p1PlayArea);
        let currentHitsLength = cpuObjects.cpuBoard.hits.length
        while (!p1Board.allSunk() && !cpuBoard.allSunk()) {
            // Highlight & paint the enemy board
            paintDOM.paintEnemy(cpuObjects.cpuBoard, cpuObjects.cpuPlayArea);
            // Enable clicks on the enemy board so the player can take a turn
            paintDOM.toggleEnemyClickable();
            // Wait for the player's turn
            do {
                currentHitsLength = cpuObjects.cpuBoard.hits.length
                await p1.waitForPlayerTurn();
            // Give the player an extra turn if they land a shot
            } while (cpuObjects.cpuBoard.hits.length > currentHitsLength) 
            // Disable clicks on the enemy board during the CPU's turn
            paintDOM.toggleEnemyClickable();
            // Highligh the friendly board
            paintDOM.highlightFriendly();
            // Delay the CPU's turn
            await new Promise(resolve => setTimeout(resolve, 900));
            // Execute CPU's turn
            cpu.cpuTurn(p1PlayArea, p1Board);
            // Paint the player's board
            paintDOM.paintFriendly(p1Objects.p1Board, p1Objects.p1PlayArea);
        };
    };
   
    return {
        p1Objects,
        cpuObjects,
        vsCPU,
    };
};

module.exports = gameloop;