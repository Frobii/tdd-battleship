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

        const shipLengths = [2,3,3,4,5];
        let expectedLengths = [];
        let foundLengths = [];

        // Build the array of expected ship lengths 
        shipLengths.forEach((length) => {
            for (i = 0; i < length; i += 1) {
                expectedLengths.push(length)
            }
        });
        console.log(expectedLengths)

        // search every position on the board for a ship object
        for (let x = 0; x <= 9; x++) {
            for (let y = 0; y <= 9; y++) {
                let position = p1PlayArea[x][y]
                if (position !== undefined) {
                    // if a ship is found push it's length attribute to an array
                    foundLengths.push(position.length);
                };
            };
        };
    
        // sort the arrays so their JSON string is in the same alphanumeric order
        const sortedExpectedLengths = expectedLengths.slice().sort();
        const sortedFoundLengths = foundLengths.slice().sort();

        const allShipsPlaced = JSON.stringify(sortedExpectedLengths) === JSON.stringify(sortedFoundLengths);
        expect(allShipsPlaced).toBe(true);
    });
});