const paintBoard = (playerType, playArea, misses, hits) => {
    if (playerType === 'friendly') {
        const gridContainer = document.querySelector('.friendly-grid');
    } else if (playerType === 'enemy') {
        const gridContainer = document.getElementById('.enemy-grid')
    };
    
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < numCols; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-item');
            const possibleShip = playArea[i][j]; 
            if (possibleShip !== undefined) { // check for a ship in this cell
                cell.classList.add('ship'); // when ships are found give the div a ship class
                cell.classList.add(ship.name); // and a class for the type of ship 
            } 
            row.appendChild(cell);
        }

        gridContainer.appendChild(row);
    };
    
};

module.exports = paintBoard;
