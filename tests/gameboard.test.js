const gameboard = require('../src/gameboard.js');
const ship = require('../src/ship.js')

let newGame;
let board;
let cruiser;
let battleship;
beforeEach(() => {
    newGame = gameboard();
    board = newGame.board();
    cruiser = ship(3);
    battleship = ship(4);
});

describe('gameboard', () => {
    it('initializes with the correct size board', () => {
        // check the length of the outer array
        expect(board.length).toEqual(10);
        // check the length of the inner arrays
        expect(board.every(row => row.length === 10)).toBe(true);
    })
})

describe('gameboard.placeship', () => {
    it('places a ship in the correct horizontal position', () => {
        newGame.placeShip(cruiser, board, [0,3], 'h');
        expect([board[0][3], board[0][4], board[0][5]]).toEqual([cruiser, cruiser, cruiser]);
    });
    it('places a ship in the correct vertical position', () => {
        newGame.placeShip(cruiser, board, [0,3], 'v');
        expect([board[0][3], board[1][3], board[2][3]]).toEqual([cruiser, cruiser, cruiser]);
    });
    it('wont place a ship out of bounds', () => {
        const placementError = newGame.placeShip(cruiser, board, [0,9], 'h');
        expect(placementError).toBe('Ship placement out of bounds!');
        expect(board[0][9]).toBeUndefined();
    })
});

describe('gameboard.receiveAttack', () => {
    it('increments the hit counter when a ship is attacked', () => {
        newGame.placeShip(cruiser, board, [1,4], 'h');
        newGame.receiveAttack([1,4], board);

        expect(board[1][4].hits).toEqual(1);
    });
    it('places a marker when an attack misses', () => {
        newGame.placeShip(cruiser, board, [1,4], 'h');

        expect(newGame.receiveAttack([2,4], board)).toBe('miss');
    });
    it('returns false if a position has already been missed', () => {

    });
    it('returns false if a position has already been hit', () => {

    });
});

describe('gameboard.misses', () => {

    it('records misses', () => {
        const newGame = gameboard();
    });
});
