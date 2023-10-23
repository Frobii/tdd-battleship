const gameboard = require('../src/gameboard.js');
const ship = require('../src/ship.js')

describe('gameboard', () => {
    it('initializes with the correct size board', () => {
        const newGame = gameboard();
        const board = newGame.board();

        // check the length of the outer array
        expect(board.length).toEqual(10);
        // check the length of the inner arrays
        expect(board.every(row => row.length === 10)).toBe(true);
    })
})

describe('importing the ship factory function', () => {
    it('allows ships to be created in the gameboard module', () => {
        const battleship = ship(4);

        expect(battleship).toBeDefined();
    });
});

describe('gameboard.placeship', () => {
    it('places a ship in the correct horizontal position', () => {
        const newGame = gameboard();
        const board = newGame.board();
        const cruiser = ship(3);
        
        newGame.placeShip(cruiser, board, [0,3], 'h');
        expect([board[0][3], 
                board[0][4], 
                board[0][5]]).toEqual([cruiser, cruiser, cruiser]);
    });
    it('places a ship in the correct vertical position', () => {
        const newGame = gameboard();
        const board = newGame.board();
        const cruiser = ship(3);
        
        newGame.placeShip(cruiser, board, [0,3], 'v');
        expect([board[0][3], 
                board[1][3], 
                board[2][3]]).toEqual([cruiser, cruiser, cruiser]);

    });
});
