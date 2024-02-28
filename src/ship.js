const ship = (length, name = 'default-ship') => {
    let hits = 0;

    const hit = () => {
        if (hits < length) {
            hits++;
        };
    };

    const isSunk = () => {
        return hits == length;
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