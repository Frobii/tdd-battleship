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
cpuBoard.misses.push([0,5])
cpuBoard.hits.push([5,4])

paintBoard().paintFriendly(p1PlayArea, p1Board.misses, p1Board.hits);
paintBoard().paintEnemy(cpuBoard, cpuPlayArea, cpuBoard.misses, cpuBoard.hits);
