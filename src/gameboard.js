const gameboard = () => {
    let misses = [];
    let hits = [];
    let ships = [];

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
            if (x + shipLength > 10) {
                return "Ship placement out of bounds!"
            };
            for (i = 0; i < shipLength; i += 1) {
                board[x + i][y] = ship  // Placing the ship horizontally
            };
        } else if (orientation === 'v')  { 
            if (y + shipLength > 10) {
                return "Ship placement out of bounds!"
            };
            for (i = 0; i < shipLength; i += 1) {
                board[x][y + i] = ship // Placing the ship vertically
            };
        };
        ships.push(ship);
    };

    const receiveAttack = (coordinates, board) => {
        [x,y] = coordinates;

        for (const miss of misses) { // check the misses for a duplicate shot
            if (miss.every((val, index) => val === coordinates[index])) {
                return false; 
            };
        };

        for (const hit of hits) { // check the hits for a duplicate shot
            if (hit.every((val, index) => val === coordinates[index])) {
                return false; 
            };
        };

        if (board[x][y] !== undefined) {
            hits.push(coordinates);
            board[x][y].hit();
            return true;
        } else {
            misses.push(coordinates);
            return 'miss';
        };
    };

    const allSunk = () => {
        const lastIndex = ships.length - 1;

        for (const ship of ships) {
            if (!ship.isSunk()) {
                return false;
            };
            if (ship === ships[lastIndex] && ship.isSunk()) {
                return true;
            };
        };
    };

    return {
        board,
        placeShip,
        receiveAttack,
        allSunk,
        misses,
        hits,
        ships,
    }
};

module.exports = gameboard;