const ship = (length) => {
    let hits = 0;

    const hit = () => {
        if (hits < length) {
            hits++;
        }
    };

    const isSunk = () => {
        return hits == length; // returns a boolean
    };

    return {
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