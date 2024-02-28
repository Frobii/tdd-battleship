const player = () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    };

    const cpuTurn = (playArea, gameBoard) => {
        let hitsLength = gameBoard.hits.length;
        let coordinates = [];
        let previousHit = [];
        let previousX = 0;
        let previousY = 0;
        let plusX = 0;
        let plusY = 0;
        let minusX = 0;
        let minusY = 0;
        let i = 0;
        let j = 1;
        // Randomize the first shot until a hit is found
        if (hitsLength === 0 ) {
            let x = getRandomInt(10);
            let y = getRandomInt(10);
            coordinates = [x, y];
        }
        // check every coordinate in a given array against the current to ensure a duplicate shot isn't made
        const containsCoords = (array) => array[0] === coordinates[0] && array[1] === coordinates[1];
        // Prepare the variables used for follow up shots
        if (hitsLength > 0) {
            previousHit = gameBoard.hits[hitsLength - j];
            previousX = previousHit[0]
            previousY = previousHit[1]
            plusX = previousX + 1;
            plusY = previousY + 1;
            minusX = previousX - 1;
            minusY = previousY - 1;
        }
        while ((gameBoard.hits.some(containsCoords) || gameBoard.misses.some(containsCoords)) || coordinates.length === 0) {
            // Target positions next to a previous hit
            if (hitsLength > 0) {
                hitsLength = gameBoard.hits.length;
                i++; // Keep track of how many times the while loop has performed an iteration for the current hit
                if (plusX <= 9 && i === 1) { 
                    coordinates = [plusX, previousY]
                } else if (minusX >= 0 && i === 2) {
                    coordinates = [minusX, previousY]
                } else if (plusY <= 9 && i === 3) {
                    coordinates = [previousX, plusY]
                } else if (minusY >= 0 && i === 4) {
                    coordinates = [previousX, minusY]
                } else if (j < hitsLength) { // Go backwards through the array of hits when the latest hit has no other options
                    j++;
                    i = 0;
                    previousHit = gameBoard.hits[hitsLength - j];
                    previousX = previousHit[0];
                    previousY = previousHit[1];
                    plusX = previousX + 1;
                    plusY = previousY + 1;
                    minusX = previousX - 1;
                    minusY = previousY - 1;
                } else {
                    // Randomize the coordinates when no calculated shots can be made
                    x = getRandomInt(10);
                    y = getRandomInt(10);
                    coordinates = [x,y];        
                }
            } else {
                // Re-randomize duplicates when a hit hasn't been found
                x = getRandomInt(10);
                y = getRandomInt(10);
                coordinates = [x,y];
            }
        }
        gameBoard.receiveAttack(coordinates, playArea);
        return coordinates;
    };

    const waitForPlayerTurn = () => {
        const enemyCells = document.getElementsByClassName('enemy-cell');
        const cellsArray = Array.from(enemyCells);

        return new Promise((resolve) => {
            cellsArray.forEach((cell) => {
                if (cell.classList.contains('miss') || cell.classList.contains('enemy-hit')) {
                    // Prevent click event if the position has been targeted before
                    cell.style.pointerEvents = 'none';
                }
                cell.addEventListener('click', function playerClickListener() {
                    // Remove the event listener to prevent multiple clicks
                    cell.removeEventListener('click', playerClickListener);
                    // Resolve the promise to continue the game loop
                    resolve();
                });
            });
        });
    };

    return {
        cpuTurn,
        waitForPlayerTurn,
    };
};

module.exports = player;