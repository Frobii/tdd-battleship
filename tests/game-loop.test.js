const gameboard = require('../src/gameboard.js');
const ship = require('../src/ship.js');
const player = require('../src/player.js')
const gameloop = require('../src/gameloop.js')

let gameLoop;

beforeEach(() => {
    gameLoop = gameloop();  
});

describe('gameloop', () => {
    it('Initializes with the correct player and cpu variables', () => {
        expect(gameLoop.p1Objects).toBeDefined();
        expect(gameLoop.cpuObjects).toBeDefined()
    });
});
describe('gameloop.placeShipsAtRandom', () => {
    it('Places a ship of every size at random on the given playArea', () => {
        const p1PlayArea = gameLoop.p1Objects.p1PlayArea
        gameLoop.placeShipsAtRandom(p1PlayArea);

        const expectedLengths = [2,3,3,4,5];

        let shipLengths = [];
        for (let x = 0; x <= 9; x++) {
            for (let y = 0; y <= 9; y++) {
                let position = p1PlayArea[x][y]
                if (position !== undefined) {
                    shipLengths.push(position.length);
                };
            };
        };
    
        const sortedShipLengths = shipLengths.slice().sort();
        // console.log('shiplengths',sortedShipLengths)
        const allShipsPlaced = JSON.stringify(expectedLengths) === JSON.stringify(sortedShipLengths);
        expect(allShipsPlaced).toBe(true);
    });
});