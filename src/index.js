import './style.css';
import './template.html';
const paintBoard = require('../src/paintBoard.js');
const gameloop = require('../src/gameloop.js');

const newGame = gameloop();
let p1Objects = newGame.p1Objects;
let p1Board = p1Objects.p1Board;
let p1PlayArea = p1Objects.p1PlayArea;
p1Board.misses.push([2,8])
p1Board.hits.push([2,9])

let cpuObjects = newGame.cpuObjects;
let cpuBoard = cpuObjects.cpuBoard;
let cpuPlayArea = cpuObjects.cpuPlayArea;

paintBoard().paintFriendly(p1Board, p1PlayArea);
paintBoard().paintEnemy(cpuBoard, cpuPlayArea);
newGame.placeShipsAtRandom(cpuPlayArea, cpuBoard);