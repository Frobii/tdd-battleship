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
