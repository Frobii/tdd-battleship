const gameboard = require('../src/gameboard.js');
const ship = require('../src/ship.js')

let newGame;
let playArea;
let cruiser;
let battleship;
beforeEach(() => {
    newGame = gameboard();
    playArea = newGame.playArea();
    cruiser = ship(3);
    battleship = ship(4);
});

describe('gameboard', () => {
    it('initializes with the correct size board', () => {
        // check the length of the outer array
        expect(playArea.length).toEqual(10);
        // check the length of the inner arrays
        expect(playArea.every(row => row.length === 10)).toBe(true);
    })
})

describe('gameboard.placeship', () => {
    it('places a ship in the correct horizontal position', () => {
        newGame.placeShip(cruiser, playArea, [0,3], 'h');

        expect([playArea[0][3], playArea[1][3], playArea[2][3]]).toEqual([cruiser, cruiser, cruiser]);
    });
    it('places a ship in the correct vertical position', () => {
        newGame.placeShip(cruiser, playArea, [0,3], 'v');

        expect([playArea[0][3], playArea[0][4], playArea[0][5]]).toEqual([cruiser, cruiser, cruiser]);
    });
    it('wont place a ship out of bounds', () => {
        const placementError = newGame.placeShip(cruiser, playArea, [9,0], 'h');
        
        expect(placementError).toBe('Ship placement out of bounds!');
        expect(playArea[0][9]).toBeUndefined();
    });
    it('stores successfully placed ships in the ships array', () => {
        newGame.placeShip(cruiser, playArea, [0,0], 'h');

        expect(newGame.ships[0]).toBe(cruiser);
    });
    it('does not store an unsuccessfully placed ship in the ships array', () => {
        newGame.placeShip(cruiser, playArea, [9,0], 'h')
    });
    it('does not allow ships to be placed directly over others', () => {
        newGame.placeShip(cruiser, playArea, [2,4] , 'h')

        const returnValue = newGame.placeShip(battleship, playArea, [2,4], 'h');

        expect(returnValue).toBe('Cannot place ships over others!');
    });
    it('does not allow ships to be placed indirectly over others', () => {
        newGame.placeShip(cruiser, playArea, [2,4] , 'h')

        const returnValue = newGame.placeShip(battleship, playArea, [3,3], 'v');
        expect(returnValue).toBe('Cannot place ships over others!');
        expect(playArea[3][3]).toBeUndefined();
    });
});

describe('gameboard.receiveAttack', () => {
    it('increments the hit counter when a ship is attacked', () => {
        newGame.placeShip(cruiser, playArea, [1,4], 'h');
        newGame.receiveAttack([1,4], playArea);

        expect(playArea[1][4].hits).toEqual(1);
    });
    it('places a miss string when an attack misses', () => {
        newGame.placeShip(cruiser, playArea, [1,4], 'v');

        expect(newGame.receiveAttack([2,4], playArea)).toBe('miss');
    });
    it('returns false if a position has already been missed', () => {
        newGame.placeShip(cruiser, playArea, [2,4], 'h');
        newGame.receiveAttack([3,8], playArea);

        expect(newGame.receiveAttack([3,8], playArea)).toBe(false);
    });
    it('returns false if a position has already been hit', () => {
        newGame.placeShip(cruiser, playArea, [2,4], 'h');
        newGame.receiveAttack([2,4], playArea);

        expect(newGame.receiveAttack([2,4], playArea)).toBe(false);
    });
    it('records misses', () => {
        newGame.placeShip(cruiser, playArea, [3,4], 'h');
        newGame.receiveAttack([1,2], playArea);
    
        expect(newGame.misses[0]).toStrictEqual([1,2]);
    });
});

describe('gameboard.allSunk', () => {
    it('returns true when all placed ships have been sunk', () => {
        newGame.placeShip(cruiser, playArea, [3,4], 'h');
        newGame.placeShip(battleship, playArea, [1,4], 'v');
        const attacks = [[1,4],[1,5],[1,6],[1,7],[3,4],[4,4],[5,4]]
        for (const attack of attacks) {
            newGame.receiveAttack(attack, playArea);
        };
        expect(newGame.allSunk()).toBe(true);
    });
    it('returns false when any of the placed ships is still floating', () => {
        newGame.placeShip(cruiser, playArea, [3,4], 'h');
        newGame.placeShip(battleship, playArea, [1,4], 'v');
        const attacks = [[1,4],[1,5],[1,6],[1,7],[3,4]]
        for (const attack of attacks) {
            newGame.receiveAttack(attack, playArea);
        };
        expect(newGame.allSunk()).toBe(false);
    });
})
