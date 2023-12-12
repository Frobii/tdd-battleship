const player = () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    };

    const cpuTurn = (enemyPlayArea, enemyGameBoard) => {
        let x = getRandomInt(10);
        let y = getRandomInt(10);
        let coordinates = [x,y];

        // check every coordinate in the hits & misses arrays to ensure a duplicate shot isn't made
        const containsCoords = (array) => array[0] === coordinates[0] && array[1] === coordinates[1];
        while (enemyGameBoard.hits.some(containsCoords) || enemyGameBoard.misses.some(containsCoords)) {
            x = getRandomInt(10);
            y = getRandomInt(10);
            coordinates = [x,y];
        };

        enemyGameBoard.receiveAttack(coordinates, enemyPlayArea);
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