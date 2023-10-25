const ship = require('./ship');

const gameboard = () => {
    const board = () => {
        let board = new Array(10);

        for (let i = 0; i < 10; i += 1) {
            board[i] = new Array(10)
        };
        return board;
    };

    const placeShip = (ship, board, startPos, orientation) => {
        [x,y] = startPos;
        shipLength = ship.length;

        if (orientation === 'h') {
            if (y + shipLength > 10) {
                return "Ship placement out of bounds!"
            };
            for (i = 0; i < shipLength; i += 1) {
                board[x][y + i] = ship  // Placing the ship horizontally
            };
        } else if (orientation === 'v')  { 
            if (x + shipLength > 10) {
                return "Ship placement out of bounds!"
            };
            for (i = 0; i < shipLength; i += 1) {
                board[x + i][y] = ship // Placing the ship vertically
            };
        };
    };

    const receiveAttack = (coordinates, board) => {
        [x,y] = coordinates;

        if (board[x][y] !== undefined) {
            board[x][y].hit();
        } else {
            return 'miss';
        };
    }

    return {
        board,
        placeShip,
        receiveAttack,
    }
};

module.exports = gameboard;