const gameboard = require('../src/gameboard.js');
const player = require('../src/player.js');
const ship = require('../src/ship.js');

const gameloop = () => {
    const p1 = player();
    const p1Board = gameboard();
    const p1PlayArea = p1Board.playArea();
    const p1Objects = {p1, p1Board, p1PlayArea}

    const cpu = player();
    const cpuBoard = gameboard();
    const cpuPlayArea = cpuBoard.playArea();
    const cpuObjects = {cpu, cpuBoard, cpuPlayArea};

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

    const getRandomCoords = (placedCoords, ship, orientation) => {
        let x = getRandomInt(10);
        let y = getRandomInt(10);
        let coordinates = [x,y];
        let shipLength = ship.length;

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
            console.log(shipPlacementCoords)
        };

        // Store the coordinates this ship is taking up so future ships can't be placed there
        shipPlacementCoords.forEach((coordinates) => {
            placedCoords.push(coordinates);
        });

        return coordinates
    };

    const placeShipsAtRandom = (playArea, gameboard) => {
        let carrier = ship(5);
        let battleship = ship(4);
        let destroyer = ship(3);
        let submarine = ship(3);
        let patrolBoat = ship(2);
        let ships = [carrier, battleship, destroyer, submarine, patrolBoat];
        let placedCoords = [];

        ships.forEach((ship) => {
            let orientation =  getRandomOrientation();
            let startPos = getRandomCoords(placedCoords, ship, orientation);
            gameboard.placeShip(ship, playArea, startPos, orientation);
        });

    };

    return {
        p1Objects,
        cpuObjects,
        placeShipsAtRandom,
    };
};

module.exports = gameloop;