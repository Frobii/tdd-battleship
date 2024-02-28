const gameboard = require('../src/gameboard.js');
const player = require('../src/player.js');
const paintBoard = require('../src/paintBoard.js');
const ship = require('../src/ship.js');

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
    const bothFrames = document.querySelectorAll('.frame');
    const enemyFrame = document.querySelector('.enemy-frame');
    const controlsDialogue = document.querySelector('.controls-dialogue');
    const placementOptions = document.querySelector('.placement-options-container');

    const carrierIcon = document.querySelector('.friendly-carrier');
    const battleshipIcon = document.querySelector('.friendly-battleship');
    const destroyerIcon = document.querySelector('.friendly-destroyer');
    const submarineIcon = document.querySelector('.friendly-submarine');
    const patrolIcon = document.querySelector('.friendly-patrol');
    const friendlyIcons = [carrierIcon, battleshipIcon, destroyerIcon, submarineIcon, patrolIcon];

    const enemyCarrierIcon = document.querySelector('.enemy-carrier')
    const enemyBattleshipIcon = document.querySelector('.enemy-battleship');
    const enemyDestroyerIcon = document.querySelector('.enemy-destroyer');
    const enemySubmarineIcon = document.querySelector('.enemy-submarine');
    const enemyPatrolIcon = document.querySelector('.enemy-patrol');
    const enemyIcons = [enemyCarrierIcon, enemyBattleshipIcon, enemyDestroyerIcon, enemySubmarineIcon, enemyPatrolIcon];

    let orientation = 'h'

    const clearHighlight = () => {
        let friendlyCells = document.querySelectorAll('.friendly-cell')
        friendlyCells.forEach((cell) => {
            cell.classList.remove('hover-placement')
        })
    }
    
    const orientationEvent = (() => {
        changeOrientation = (event) => {
            if (event.key.toUpperCase() === 'R') {
                if (orientation === 'h') {
                    orientation = 'v'
                } else {
                    orientation = 'h'
                }
                clearHighlight();
                paintDOM.paintFriendly(p1Board, p1PlayArea);
                hoverPreview();
            }
        }
        document.addEventListener('keydown', changeOrientation)
    })();
 
    const hoverPreview = () => {
        let friendlyCells = document.querySelectorAll('.friendly-cell')
        friendlyCells.forEach((cell, index) => {
            cell.addEventListener('mouseover', () => {
                // these orientations are incorrect but it works
                // TO DO: Correct orientations throughout the project
                let addNum = 0
                if (orientation === 'v') { 
                    addNum = 1;
                } else if (orientation === 'h') {
                    addNum = 10;
                }
                switch (p1Board.ships.length) {
                    case 0:
                        carrierIcon.classList.add('flashing-icon')
                        if (orientation === 'h' && index > 59) {break}
                        if (orientation === 'v' && (index % 10) > 5) {break}
                        cell.classList.add('hover-placement')
                        friendlyCells[index + addNum].classList.add('hover-placement')
                        friendlyCells[index + (addNum * 2)].classList.add('hover-placement')
                        friendlyCells[index + (addNum * 3)].classList.add('hover-placement')
                        friendlyCells[index + (addNum * 4)].classList.add('hover-placement')
                        break;
                    case 1:
                        carrierIcon.classList.remove('flashing-icon')
                        battleshipIcon.classList.add('flashing-icon')
                        if (orientation === 'h' && index > 69) {break}
                        if (orientation === 'v' && (index % 10) > 6) {break}
                        cell.classList.add('hover-placement')
                        friendlyCells[index + addNum].classList.add('hover-placement')
                        friendlyCells[index + (addNum * 2)].classList.add('hover-placement')
                        friendlyCells[index + (addNum * 3)].classList.add('hover-placement')
                        break;
                    case 2:
                        battleshipIcon.classList.remove('flashing-icon')
                        destroyerIcon.classList.add('flashing-icon')
                        if (orientation === 'h' && index > 79) {break}
                        if (orientation === 'v' && (index % 10) > 7) {break}
                        cell.classList.add('hover-placement')
                        friendlyCells[index + addNum].classList.add('hover-placement')
                        friendlyCells[index + (addNum * 2)].classList.add('hover-placement')
                        break;
                    case 3:
                        destroyerIcon.classList.remove('flashing-icon')
                        submarineIcon.classList.add('flashing-icon')
                        if (orientation === 'h' && index > 79) {break}
                        if (orientation === 'v' && (index % 10) > 7) {break}
                        cell.classList.add('hover-placement')
                        friendlyCells[index + addNum].classList.add('hover-placement')
                        friendlyCells[index + (addNum * 2)].classList.add('hover-placement')
                        break;
                    case 4:
                        submarineIcon.classList.remove('flashing-icon')
                        patrolIcon.classList.add('flashing-icon')
                        if (orientation === 'h' && index > 89) {break}
                        if (orientation === 'v' && (index % 10) > 8) {break}
                        cell.classList.add('hover-placement')
                        friendlyCells[index + addNum].classList.add('hover-placement')
                        break;
                    case 5:
                        patrolIcon.classList.remove('flashing-icon');
                        break;

                };
            });
            cell.addEventListener('mouseout', () => {
                let addNum = 0
                if (orientation === 'v') {
                    addNum = 1;
                } else if (orientation === 'h') {
                    addNum = 10;
                }
                switch (p1Board.ships.length) {
                    case 0:
                        if (orientation === 'h' && index > 59) {break}
                        if (orientation === 'v' && (index % 10) > 5) {break}
                        cell.classList.remove('hover-placement')
                        friendlyCells[index + addNum].classList.remove('hover-placement')
                        friendlyCells[index + (addNum * 2)].classList.remove('hover-placement')
                        friendlyCells[index + (addNum * 3)].classList.remove('hover-placement')
                        friendlyCells[index + (addNum * 4)].classList.remove('hover-placement')
                        break;
                    case 1:
                        if (orientation === 'h' && index > 69) {break}
                        if (orientation === 'v' && (index % 10) > 6) {break}
                        cell.classList.remove('hover-placement')
                        friendlyCells[index + addNum].classList.remove('hover-placement')
                        friendlyCells[index + (addNum * 2)].classList.remove('hover-placement')
                        friendlyCells[index + (addNum * 3)].classList.remove('hover-placement')
                        break;
                    case 2:
                    case 3:
                        if (orientation === 'h' && index > 79) {break}
                        if (orientation === 'v' && (index % 10) > 7) {break}
                        cell.classList.remove('hover-placement')
                        friendlyCells[index + addNum].classList.remove('hover-placement')
                        friendlyCells[index + (addNum * 2)].classList.remove('hover-placement')
                        break;
                    case 4:
                        if (orientation === 'h' && index > 89) {break}
                        if (orientation === 'v' && (index % 10) > 8) {break}
                        cell.classList.remove('hover-placement')
                        friendlyCells[index + addNum].classList.remove('hover-placement')
                        break;
                };
            });
        }) ;
    };

    const shipPlacementEvent = () => {
        const gridFrame = document.querySelector('.friendly-grid');

        hoverPreview();
        const placeShips = (coordinates) => {
            switch (p1Board.ships.length) {
                case 0:
                    let carrier = ship(5, 'carrier');
                    p1Board.placeShip(carrier, p1PlayArea, coordinates, orientation);
                    paintDOM.paintFriendly(p1Board, p1PlayArea);
                    hoverPreview();
                    break;
                case 1:
                    let battleship = ship(4, 'battleship');
                    p1Board.placeShip(battleship, p1PlayArea, coordinates, orientation);
                    paintDOM.paintFriendly(p1Board, p1PlayArea);
                    hoverPreview();
                    break;
                case 2:
                    let destroyer = ship(3,'destroyer');
                    p1Board.placeShip(destroyer, p1PlayArea, coordinates, orientation);
                    paintDOM.paintFriendly(p1Board, p1PlayArea);
                    hoverPreview();
                    break;
                case 3:
                    let submarine = ship(3, 'submarine');
                    p1Board.placeShip(submarine, p1PlayArea, coordinates, orientation);
                    paintDOM.paintFriendly(p1Board, p1PlayArea);
                    hoverPreview();
                    break;
                case 4:
                    let patrolBoat = ship(2, 'patrol-boat');
                    p1Board.placeShip(patrolBoat, p1PlayArea, coordinates, orientation);
                    paintDOM.paintFriendly(p1Board, p1PlayArea);
                    hoverPreview();
                    break;
            }
        }
        function getCoordinates(cell) {
            let friendlyCells = document.querySelectorAll('.friendly-cell')
            let cellNumber = Array.from(friendlyCells).indexOf(cell);
            let y = cellNumber % 10;
            let x = Math.floor(cellNumber / 10);
            return [x,y];
        }
        gridFrame.addEventListener('click', (event) => {
            if (event.target.classList.contains('friendly-cell')) {
                let coordinates = getCoordinates(event.target);
                placeShips(coordinates)
            }
        })
    };

    const centerFriendly = () => {
        enemyFrame.style.display = 'none';
        controlsDialogue.textContent = 'Press "R" to rotate your ship!';
    }

    const setRandomizeButton = () => {
        randomizeButton.addEventListener('click', () => {
            p1Board.ships.length = 0;
            p1PlayArea = p1Board.playArea();
            p1Board.placeShipsAtRandom(p1PlayArea, p1Board);
            paintDOM.paintFriendly(p1Board, p1PlayArea);
            friendlyIcons.forEach((icon) => {
                icon.classList.remove('flashing-icon')
            })
        });
    };
    
    const setResetPlacementButton = () => {
        resetPlacementButton.addEventListener('click', () => {
            p1Board.ships.length = 0;
            p1PlayArea = p1Board.playArea();
            paintDOM.paintFriendly(p1Board, p1PlayArea);
            friendlyIcons.forEach((icon) => {
                icon.classList.remove('flashing-icon')
            })
            hoverPreview();
        });
    }
    
    const setConfirmPlacementButton = () => {
        confirmButton.addEventListener('click', () => {
            if (p1Board.ships.length === 5) {
                randomizeButton.style.display = 'none'
                resetPlacementButton.style.display = 'none'
                confirmButton.style.display = 'none'
                enemyFrame.style.display = 'flex';
                controlsDialogue.textContent = '';
                controlsDialogue.style.height = '0px';
                placementOptions.style.height = '0px';
                bothFrames.forEach((frame) => {
                    frame.style.height = '38rem';
                })
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
            friendlyIcons.forEach((icon) => {
                icon.classList.remove('red-filter');
            })
            enemyIcons.forEach((icon) => {
                icon.classList.remove('red-filter');
            })
            controlsDialogue.style.height = '2rem';
            placementOptions.style.height = '10%';
            bothFrames.forEach((frame) => {
                frame.style.height = '45rem';
            })
            paintDOM.paintFriendly(p1Board, p1PlayArea);
            centerFriendly();
            paintDOM.highlightFriendly();
            hoverPreview();
            randomizeButton.style.display = 'inline'
            resetPlacementButton.style.display = 'inline'
            confirmButton.style.display = 'inline'
        });
    };

    const checkShipsDown = (board, player) => {
        board.ships.forEach((ship) => {
            if (ship.hits === 5 && ship.name === 'carrier') {
                if (player === 'enemy') {
                    enemyCarrierIcon.classList.add('red-filter');
                } else if (player === 'friendly') {
                    carrierIcon.classList.add('red-filter');
                }
            } 
            if (ship.hits === 4 && ship.name === 'battleship') {
                if (player === 'enemy') {
                    enemyBattleshipIcon.classList.add('red-filter');
                } else if (player === 'friendly') {
                    battleshipIcon.classList.add('red-filter');
                }
            }
            if (ship.hits === 3 && ship.name === 'destroyer') {
                if (player === 'enemy') {
                    enemyDestroyerIcon.classList.add('red-filter');
                } else if (player === 'friendly') {
                    destroyerIcon.classList.add('red-filter');
                }
            }
            if (ship.hits === 3 && ship.name === 'submarine') {
                if (player === 'enemy') {
                    enemySubmarineIcon.classList.add('red-filter');
                } else if (player === 'friendly') {
                    submarineIcon.classList.add('red-filter');
                }
            }
            if (ship.hits === 2 && ship.name === 'patrol-boat') {
                if (player === 'enemy') {
                    enemyPatrolIcon.classList.add('red-filter');
                } else if (player === 'friendly') {
                    patrolIcon.classList.add('red-filter');
                }
            }
        })
    }

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

                checkShipsDown(cpuBoard, 'enemy');
                paintDOM.paintEnemy(cpuBoard, cpuPlayArea);

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
                checkShipsDown(p1Board, 'friendly'); // Update the ships down graphics
                paintDOM.paintFriendly(p1Board, p1PlayArea);
                checkForCPUWin(); // Check if the CPU made a winning move
            } while (p1Board.hits.length > currentP1HitsLength)

            // Paint the player's board
            paintDOM.paintFriendly(p1Board, p1PlayArea);
            // Delay the time between turn swaps
            await new Promise(resolve => setTimeout(resolve, 30));
        };
    };

    const establishGameVsCPU = () => {
        centerFriendly();
        paintDOM.paintFriendly(p1Board, p1PlayArea);
        paintDOM.highlightFriendly();
        shipPlacementEvent();
        setRandomizeButton();
        setResetPlacementButton();
        setConfirmPlacementButton();
        setResetGameButton();
    };

    return {
        establishGameVsCPU,
    }
};

module.exports = gameloop;