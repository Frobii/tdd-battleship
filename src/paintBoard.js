const paintBoard = () => {
    let enemyClickable = true;

    const toggleEnemyClickable = () => {
        const enemyGrid = document.querySelector('.enemy-grid');
        if (enemyClickable) {
            enemyGrid.style.pointerEvents = 'auto';
            enemyClickable = false;
        } else {
            enemyGrid.style.pointerEvents = 'none';
            enemyClickable = true;
        };
    };
    
    const highlightFriendly = () => {
        const enemyFrame = document.querySelector('.enemy-frame');
        enemyFrame.classList.remove('highlight-frame');
        
        const friendlyFrame = document.querySelector('.friendly-frame');
        friendlyFrame.classList.add('highlight-frame');
    };
    
    const highlightEnemy = () => {
        const friendlyFrame = document.querySelector('.friendly-frame')
        friendlyFrame.classList.remove('highlight-frame');
        
        const enemyFrame = document.querySelector('.enemy-frame');
        enemyFrame.classList.add('highlight-frame');
    };
    
    const containsCoords = (array, coordinates) =>  {
        return array.some(coord => coord.every((value, index) => value === coordinates[index])) 
    };

    const paintFriendly = (gameboard, playArea) => {
        const gridContainer = document.querySelector('.friendly-grid');
        gridContainer.innerHTML = ''; // Clear all of the child nodes from the previous run
        
        let misses = gameboard.misses;
        let hits = gameboard.hits;

        for (let i = 0; i < 10; i++) { // i = y axis
            const row = document.createElement('div');
            row.classList.add('grid-row');
            
            for (let j = 0; j < 10; j++) { // j = x axis
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.classList.add('friendly-cell');
                const possibleShip = playArea[i][j];
                
                if (containsCoords(misses, [i,j])) {
                    cell.classList.add('miss')
                } else if (containsCoords(hits, [i,j])) {
                    cell.classList.add('friendly-hit')
                };

                // only friendly ships should ever recieve the ship class
                // enemy ships are never given graphics
                if (possibleShip !== undefined) {
                    let shipName = possibleShip.name
                    cell.classList.add('ship');
                    cell.classList.add(shipName); 
                };
                row.appendChild(cell);
            };
            gridContainer.appendChild(row);
        };
    };

    const paintEnemy = (gameboard, playArea) => {
        highlightEnemy(); // The enemy is always the first to be targeted
        const gridContainer = document.querySelector('.enemy-grid')
        gridContainer.innerHTML = ''; // Clear all of the child nodes from the previous run

        let misses = gameboard.misses;
        let hits = gameboard.hits;
        
        for (let i = 0; i < 10; i++) {
            const row = document.createElement('div');
            row.classList.add('grid-row');
            
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.classList.add('enemy-cell');
                cell.addEventListener('click', () => {
                    gameboard.receiveAttack([i,j], playArea)
                    paintEnemy(gameboard, playArea)
                });
                
                if (containsCoords(misses, [i,j])) {
                    cell.classList.add('miss')
                } else if (containsCoords(hits, [i,j])) {
                    cell.classList.add('enemy-hit')
                };
                
                row.appendChild(cell);
            };
            gridContainer.appendChild(row);
        };
    };

    return {
        toggleEnemyClickable,
        highlightFriendly,
        paintFriendly,
        paintEnemy,
    };
};

module.exports = paintBoard;
