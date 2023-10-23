const ship = require('./ship');

const gameboard = () => {
    const board = () => {
        let board = new Array(10);

        for (let i = 0; i < 10; i += 1) {
            board[i] = new Array(10)
        }
        return board
    };

    const placeShip = (ship, board, startPos, orientation) => {
        [x,y] = startPos;
        length = ship.length;
        
        if (orientation === 'h') { // Placing the ship horizontally
            for (i = 0; i < length; i += 1) {
                board[x][y + i] = ship
            }
        } else if (orientation === 'v')  { // Placing the ship vertically
            for (i = 0; i < length; i += 1) {
                board[x + i][y] = ship
            }
        }
    }

    return {
        board,
        placeShip,
    }
};

module.exports = gameboard;