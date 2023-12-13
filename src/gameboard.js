const ship = require('../src/ship.js');

const gameboard = () => {
    let misses = [];
    let hits = [];
    let ships = [];

    const playArea = () => {
        let playArea = new Array(10);
        for (let i = 0; i < 10; i += 1) {
            playArea[i] = new Array(10)
        };
        return playArea;
    };

    const placeShip = (ship, playArea, startPos, orientation) => {
        [x,y] = startPos;
        shipLength = ship.length;

        let errorMessage = null; 

        if (orientation === 'h') {
            if (x + shipLength > 10) {
                return "Ship placement out of bounds!"
            };
            for (i = 0; i < shipLength; i += 1) {
                if (playArea[x + i][y] != undefined) { // check chosen positions for other ships
                    errorMessage =  'Cannot place ships over others!'
                };
            };
            if (errorMessage) {
                return errorMessage;
            };
            for (i = 0; i < shipLength; i += 1) {
                playArea[x + i][y] = ship  // Placing the ship horizontally
            };
        } else if (orientation === 'v')  { 
            if (y + shipLength > 10) {
                return  "Ship placement out of bounds!"
            };
            for (i = 0; i < shipLength; i += 1) {
                if (playArea[x][y + i] != undefined) {
                    errorMessage =  'Cannot place ships over others!'
                };
            };
            if (errorMessage) {
                return errorMessage;
            };
            for (i = 0; i < shipLength; i += 1) {
                playArea[x][y + i] = ship // Placing the ship vertically
            };
        };
        ships.push(ship);
    };
    
    const placeShipsAtRandom = (playArea, gameboard) => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        };
        
        const getRandomOrientation = () => {
            let randomDecimal = Math.random();
            let randomNumber = Math.round(randomDecimal);
            if (randomNumber === 1) {
                return 'h'
            } else {
                return 'v'
            };
        };
    
        const getRandomCoords = (placedCoords, ship, orientation) => {
            let x = getRandomInt(10);
            let y = getRandomInt(10);
            let coordinates = [x,y];
            let shipLength = ship.length;

            // Get the coordinates the ship will take up if placed
            // i.e. a battleship has a length of 4 so it has 4 placement coordinates
            const getPlacementCoordinates = (coordinates, shipLength, orientation) => {
                let shipPlacementCoords = [];
                for (let i = 0; i < shipLength; i += 1) {
                    let newCoordinates = coordinates.slice();
                    if (orientation === 'h') {
                        newCoordinates[0] += i
                    } else if (orientation === 'v') {
                        newCoordinates[1] += i
                    };
                    shipPlacementCoords.push(newCoordinates);
                };
                return shipPlacementCoords;
            };
            
            // Check the potential placement coordinates against the ones which are already placed
            const arraysContainCommonCoordinates = (array1, array2) => {
                for (let i = 0; i < array1.length; i++) {
                    for (let j = 0; j < array2.length; j++) {
                        if (array1[i][0] === array2[j][0] && array1[i][1] === array2[j][1]) {
                            return true;
                        };
                    };
                };
                return false;
            };
        
            const placementOutOfBounds = (coordinates, orientation, shipLength) => {
                let xReach = coordinates[0] + shipLength - 1;
                let yReach = coordinates[1] + shipLength - 1;
                if (orientation === 'h' && xReach > 9 ) {
                    return true;
                } else if (orientation === 'v' && yReach > 9) {
                    return true;
                };
                return false;
            };

            // Get the first set of placement coordinates for validation
            let shipPlacementCoords = getPlacementCoordinates(coordinates, shipLength, orientation);

            // Randomize coordinates to find a placement which hasn't been made and is within bounds
            while (
                arraysContainCommonCoordinates(shipPlacementCoords, placedCoords) ||
                placementOutOfBounds(coordinates, orientation, shipLength)
            ) {
                let x = getRandomInt(10);
                let y = getRandomInt(10);
                coordinates = [x,y];
                shipPlacementCoords = getPlacementCoordinates(coordinates, shipLength, orientation);
            };

            // Store the coordinates this ship is taking up so future ships can't be placed there
            shipPlacementCoords.forEach((coordinates) => {
                placedCoords.push(coordinates);
            });

            return coordinates
        };

        let carrier = ship(5, 'carrier');
        let battleship = ship(4, 'battleship');
        let destroyer = ship(3,'destroyer');
        let submarine = ship(3, 'submarine');
        let patrolBoat = ship(2, 'patrol-boat');
        let ships = [carrier, battleship, destroyer, submarine, patrolBoat];
        let placedCoords = [];

        ships.forEach((ship) => {
            let orientation =  getRandomOrientation();
            let startPos = getRandomCoords(placedCoords, ship, orientation);
            gameboard.placeShip(ship, playArea, startPos, orientation);
        });
    };

    const receiveAttack = (coordinates, playArea) => {
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

        if (playArea[x][y] != undefined) {
            hits.push(coordinates);
            playArea[x][y].hit();
            return 'hit';
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
        playArea,
        placeShip,
        placeShipsAtRandom,
        receiveAttack,
        allSunk,
        misses,
        hits,
        ships,
    }
};

module.exports = gameboard;