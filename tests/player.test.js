const gameboard = require('../src/gameboard.js');
const ship = require('../src/ship.js');

let playerBoard;
let cpuBoard;
let cruiser;
let battleship;
beforeEach(() => {
    player = gameboard();
    playerBoard = player.board();

    cpu = gameboard();
    cpuBoard = cpu.board();

    cruiser = ship(3);
    battleship = ship(4);
});

