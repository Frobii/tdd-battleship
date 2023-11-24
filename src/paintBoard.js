const paintBoard = () => {
    const paintFriendly = (playArea, misses, hits) => {
        const gridContainer = document.querySelector('.friendly-grid');
        
        for (let i = 0; i < 10; i++) {
            const row = document.createElement('div');
            row.classList.add('grid-row');
            
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('div');
                cell.classList.add('grid-item');
                const possibleShip = playArea[i][j];
                
                if (misses.includes([i][j])) {
                    cell.classList.add('miss')
                } else if (hits.includes([i][j])) {
                    cell.classList.add('friendly-hit')
                };
                
                // only friendly ships should ever recieve the ship class
                // enemy ships are never given graphics
                if (possibleShip !== undefined) {
                    cell.classList.add('ship');
                    cell.classList.add(ship.name); 
                } ;
                row.appendChild(cell);
            };
            gridContainer.appendChild(row);
        };
    };

    const paintEnemy = () => {
        const gridContainer = document.getElementById('.enemy-grid')
        
        for (let i = 0; i < 10; i++) {
            const row = document.createElement('div');
            row.classList.add('grid-row');
            
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('div');
                cell.classList.add('grid-item');
                
                if (misses.includes([i][j])) {
                    cell.classList.add('miss')
                } else if (hits.includes([i][j])) {
                    cell.classList.add('enemy-hit')
                };
                
                row.appendChild(cell);
            };
            gridContainer.appendChild(row);
        };
    };

    return {
        paintFriendly,
        paintEnemy,
    };
};

module.exports = paintBoard;
