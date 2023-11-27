import './style.css';
import './template.html';
const paintBoard = require('../src/paintBoard.js');
const gameloop = require('../src/gameloop.js');

const newGame = gameloop();
let p1Objects = newGame.p1Objects;
let p1Board = p1Objects.p1Board;
let p1PlayArea = p1Objects.p1PlayArea;

let cpuObjects = newGame.cpuObjects;
let cpuBoard = cpuObjects.cpuBoard;
cpuBoard.misses.push([0,5])

paintBoard().paintFriendly(p1PlayArea, p1Board.misses, p1Board.hits);
paintBoard().paintEnemy(cpuBoard.misses, cpuBoard.hits);

// the problem I'm facing with the misses not getting a class is to do with this check:
// if (misses.includes([j,i])) { // THIS IS INSIDE OF paintBoard.js
// includes checks for strict equality, so it's not useful for this purpose