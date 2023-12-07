import './style.css';
import './template.html';
const gameloop = require('../src/gameloop.js');

const newGame = gameloop();

newGame.vsCPU();