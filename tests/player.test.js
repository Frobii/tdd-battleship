const gameboard = require('../src/gameboard.js');
const ship = require('../src/ship.js');
const player = require('../src/player.js')

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

    cpuBoard.placeShip(cruiser, cpuPlayArea, [4,4], 'h')
});

describe('player.cpuTurn', () => {
    it('Cannnot make the same move twice when all moves are misses', () => {
        let everythingHit = false;
        for (i = 1; i <= 100; i += 1) {
            cpu.cpuTurn(p1PlayArea, p1Board);
        };
        if (p1Board.hits.length + p1Board.misses.length === 100) {
            everythingHit = true
        };
        expect(everythingHit).toBe(true);
    });
    it('Cannnot make the same move twice when some moves are hits', () => {
        p1Board.placeShip(cruiser, p1PlayArea, [4,4], 'h')
        let everythingHit = false;
        let coordArray = []
        for (i = 1; i <= 100; i += 1) {
            coordArray.push(cpu.cpuTurn(p1PlayArea, p1Board));
        };
        if (p1Board.hits.length + p1Board.misses.length === 100) {
            everythingHit = true
        };
        expect(everythingHit).toBe(true);
    });
});
