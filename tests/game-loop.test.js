const gameboard = require('../src/gameboard.js');
const ship = require('../src/ship.js');
const player = require('../src/player.js')
const gameloop = require('../src/gameloop.js')

let p1;
let p1Board;
let p1PlayArea;

let cpu;
let cpuBoard;
let cpuPlayArea;

let cruiser;
let battleship;

beforeEach(() => {
    p1 = player();
    p1Board = gameboard();
    p1PlayArea = p1Board.playArea();
    
    cpu = player();
    cpuBoard = gameboard();
    cpuPlayArea = cpuBoard.playArea();

    cruiser = ship(3);
    battleship = ship(4);
});

describe('gameloop.', () => {
    it('', () => {

    });
});