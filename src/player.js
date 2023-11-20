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

    const userTurn = (coordinates, enemyPlayArea, enemyGameBoard) => {
        enemyGameBoard.receiveAttack(coordinates, enemyPlayArea)
    };

    return {
        cpuTurn,
        userTurn,
    };
};

module.exports = player;