const gameboard = require('../src/gameboard.js');
const ship = require('../src/ship.js');

let playerBoard;
let cpuBoard;
let cruiser;
let battleship;
beforeEach(() => {
    let gameBoard = new gameBoard();


    cpu = gameboard();
    cpuBoard = cpu.board();

    cruiser = ship(3);
    battleship = ship(4);
});

describe('player.takeTurn', () => {
    it('Does not allow the same player to take two turns in a row', () => {
    
    });
});