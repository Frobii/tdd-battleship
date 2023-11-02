const player = () => {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const cpuTurn = (enemyPlayArea, enemyGameBoard) => {
        let x = getRandomInt(10);
        let y = getRandomInt(10);
        let coordinates = [x,y];

        const containsCoord = (array) => array[0] === coordinates[0] && array[1] === coordinates[1]
        
        // check every coordinate in the hits & misses arrays to ensure a duplicate shot isn't made
        // while ((enemyGameBoard.hits.some(x => x[0] === coordinates[0] && x[1] === coordinates[1])) ||
        //         (enemyGameBoard.misses.some(x => x[0] === coordinates[0] && x[1] === coordinates[1]))) {
        while (enemyGameBoard.hits.some(containsCoord) || enemyGameBoard.misses.some(containsCoord)) {
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
}

module.exports = player;