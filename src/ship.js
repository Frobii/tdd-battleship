const ship = (length, name = 'Default Ship') => {
    let hits = 0;

    const hit = () => {
        if (hits < length) {
            hits++;
        }; // else sink the ship TEST FIRST !!! :)
    };

    const isSunk = () => {
        return hits == length; // returns a boolean
    };

    return {
        name,
        length, 
        get hits() {
            return hits
        },
        set hits(value) {
            if (value <= length && value > 0) {
                hits = value
            }
        },
        hit, 
        isSunk
    };
}

module.exports = ship;