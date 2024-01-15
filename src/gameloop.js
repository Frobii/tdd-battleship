const gameboard = require('../src/gameboard.js');
const player = require('../src/player.js');
const paintBoard = require('../src/paintBoard.js');

const gameloop = () => {
    const p1 = player();
    let p1Board = gameboard();
    let p1PlayArea = p1Board.playArea();

    const cpu = player();
    let cpuBoard = gameboard();
    let cpuPlayArea = cpuBoard.playArea();

    const paintDOM = paintBoard();

    const gameOverScreen = document.querySelector('.game-over-screen');
    const gameOverText = document.querySelector('.game-over-text');
    const randomizeButton = document.querySelector('.randomize-placement');
    const resetPlacementButton = document.querySelector('.reset-placement');
    const confirmButton = document.querySelector('.confirm-placement');
    const resetGameButton = document.querySelector('.reset-game');
    const enemyFrame = document.querySelector('.enemy-frame');

    let orientation = 'h'

    const orientationEvent = (() => {
        changeOrientation = (event) => {
            if (event.key.toUpperCase() === 'R') {
                if (orientation === 'h') {
                    orientation = 'v'
                } else {
                    orientation = 'h'
                }
            }
        }
        document.addEventListener('keydown', changeOrientation)
    })();

    const shipPlacementEvent = () => {
        let friendlyCells = document.querySelectorAll('.friendly-cell')
        let cellNumber = 0;
        
        function getCoordinates(cellNumber) {
            let gridColumns = 10;
            let row = Math.ceil(cellNumber / gridColumns);
        
            let column = cellNumber % gridColumns;
            if (column === 0) {
                column = gridColumns;  // If column is 0, set it to the last column
            }
        
            return [row, column];
        }
        const placeShips = (coordinates) => {
            console.log(coordinates)
            switch (p1Board.ships.length) {
                case 1:
                    console.log(p1Board.ships.length)
                    break;
                case 2:
                    console.log(p1Board.ships.length)
                    break;
                case 3:
                    console.log(p1Board.ships.length)
                    break;
                case 4:
                    console.log(p1Board.ships.length)
                    break;
                case 5:
                    console.log(p1Board.ships.length)
                    break;
            }
        }
        friendlyCells.forEach((cell) => {
            cellNumber += 1
            let coordinates = getCoordinates(cellNumber);
            cell.addEventListener('click', () => {
                placeShips(coordinates)
            });
        });
    };

    const centerFriendly = () => {
        enemyFrame.style.display = 'none';
    }

    const setRandomizeButton = () => {
        randomizeButton.addEventListener('click', () => {
            p1Board.ships.length = 0;
            p1PlayArea = p1Board.playArea();
            p1Board.placeShipsAtRandom(p1PlayArea, p1Board);
            paintDOM.paintFriendly(p1Board, p1PlayArea);
        });
    };
    
    const setResetPlacementButton = () => {
        resetPlacementButton.addEventListener('click', () => {
            p1Board.ships.length = 0;
            p1PlayArea = p1Board.playArea();
            paintDOM.paintFriendly(p1Board, p1PlayArea);
        });
    }
    
    const setConfirmPlacementButton = () => {
        confirmButton.addEventListener('click', () => {
            if (p1Board.ships.length === 5) {
                randomizeButton.style.display = 'none'
                resetPlacementButton.style.display = 'none'
                confirmButton.style.display = 'none'
                enemyFrame.style.display = 'flex';
                vsCPU();
            }
        });
    };
    
    const setResetGameButton = () => {
        resetGameButton.addEventListener('click', () => {
            gameOverScreen.style.display = 'none';
            p1Board = gameboard();
            p1PlayArea = p1Board.playArea();
            cpuBoard = gameboard();
            cpuPlayArea = cpuBoard.playArea();
            paintDOM.paintFriendly(p1Board, p1PlayArea);
            centerFriendly();
            randomizeButton.style.display = 'inline'
            resetPlacementButton.style.display = 'inline'
            confirmButton.style.display = 'inline'
        });
    };

    const checkForP1Win = () => {
        if (cpuBoard.allSunk()) {
            gameOverScreen.style.display = 'flex';
            gameOverText.innerHTML = 'You Won! <br> Would you like to play again?'
            paintDOM.toggleEnemyClickable();
            return 'win'
        };
    };

    const checkForCPUWin = () => {
        if (p1Board.allSunk()) {
            gameOverScreen.style.display = 'flex';
            gameOverText.innerHTML = 'The CPU Won! <br> Would you like to play again?'
            return 'win'
        };
    };

    async function vsCPU() {
        cpuBoard.placeShipsAtRandom(cpuPlayArea, cpuBoard);

        // used for testing
        // cpuBoard.ships[0].hits = 5; 
        // cpuBoard.ships[1].hits = 4; 
        // cpuBoard.ships[2].hits = 3; 
        // cpuBoard.ships[3].hits = 3; 

        // used for testing
        // p1Board.ships[0].hits = 5; 
        // p1Board.ships[1].hits = 4; 
        // p1Board.ships[2].hits = 3; 
        // p1Board.ships[3].hits = 3; 

        paintDOM.paintFriendly(p1Board, p1PlayArea);
        let currentCPUHitsLength = cpuBoard.hits.length;
        let currentP1HitsLength = p1Board.hits.length;
        while (!p1Board.allSunk() && !cpuBoard.allSunk()) {
            // Highlight & paint the enemy board
            paintDOM.paintEnemy(cpuBoard, cpuPlayArea);
            // Enable clicks on the enemy board so the player can take a turn
            paintDOM.toggleEnemyClickable();

            do { // Wait for the player's turn
                currentCPUHitsLength = cpuBoard.hits.length
                await p1.waitForPlayerTurn();

                // used for testing
                // cpuBoard.ships[4].hits = 2; 

                if (checkForP1Win() === 'win') {
                    return
                }; // Check if the player made a winning move
            // Give the player an extra turn if they land a shot
            } while (cpuBoard.hits.length > currentCPUHitsLength)

            // Delay the time between turn swaps
            await new Promise(resolve => setTimeout(resolve, 30)); 
            // Disable clicks on the enemy board during the CPU's turn
            paintDOM.toggleEnemyClickable();
            // Highligh the friendly board
            paintDOM.highlightFriendly();

            do { // Execute CPU's turn
                await new Promise(resolve => setTimeout(resolve, 900)); // Delay the CPU's turn
                currentP1HitsLength = p1Board.hits.length
                cpu.cpuTurn(p1PlayArea, p1Board);
                paintDOM.paintFriendly(p1Board, p1PlayArea);

                // used for testing
                // p1Board.ships[4].hits = 2; 

                checkForCPUWin(); // Check if the CPU made a winning move
            } while (p1Board.hits.length > currentP1HitsLength)

            // Paint the player's board
            paintDOM.paintFriendly(p1Board, p1PlayArea);
            // Delay the time between turn swaps
            await new Promise(resolve => setTimeout(resolve, 30));
        };
    };

    const establishGame = (() => {
        centerFriendly();
        paintDOM.paintFriendly(p1Board, p1PlayArea);
        paintDOM.highlightFriendly();
        shipPlacementEvent();
        setRandomizeButton();
        setResetPlacementButton();
        setConfirmPlacementButton();
        setResetGameButton();
    })();
};

module.exports = gameloop;