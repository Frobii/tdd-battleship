import './style.css';
import './template.html';
const paintBoard = require('../src/paintBoard.js');
const gameloop = require('../src/gameloop.js');

const newGame = gameloop();
let p1Objects = newGame.p1Objects;
let p1Board = p1Objects.p1Board;
let p1PlayArea = p1Objects.p1PlayArea;
console.log('working')

paintBoard().paintFriendly(p1PlayArea, p1Board.misses, p1Board.hits);
// paintBoard().paintEnemy();

// deploy the DOM tools which paint the grid
