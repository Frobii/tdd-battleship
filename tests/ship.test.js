const ship = require('../src/ship.js');

describe('ship.length', () => {
  it('returns the correct size when a ship is created', () => {
    const myShip = ship(1);
    expect(myShip.length).toEqual(1);
  });
});

describe('ship.hits', () => {
  it ('returns the correct amount of hits when a single hit is executed', () => {
    const myShip = ship(3);
    myShip.hit();
    console.log(myShip.hits)
    
    expect(myShip.hits).toEqual(1);
  });
  it('allows the user to set the number of hits', () => {
    const myShip = ship(3);
    myShip.hits = 2;
    
    expect(myShip.hits).toEqual(2);
  });
  it ('wont allow the user to set a number of hits greater than the length', () => {
    const myShip = ship(3);
    myShip.hits = 4;
    
    expect(myShip.hits).toEqual(0);
  });
  it ('wont allow the user to set the number of hits below zero', () => {
    const myShip = ship(3);
    myShip.hits = -4;
    
    expect(myShip.hits).toEqual(0);
  });
});

describe ('ship.hit', () => {
  it('returns one hit when hit is called', () => {
    const myShip = ship(2)
    myShip.hit();

    expect(myShip.hits).toEqual(1);
  });
  it('does not increment hits when hits is equal to the length of the ship', () => {
    const myShip = ship(2)
    myShip.hit();
    myShip.hit();
    myShip.hit();

    expect(myShip.hits).toEqual(2);
  });
});

describe('ship.isSunk', () => {
  it('returns true if hits are greater than or equal to length', () => {
    const myShip = ship(3);
    myShip.hit();
    myShip.hit();
    myShip.hit();
    console.log(myShip.hits)
    
    const result = myShip.isSunk();
    
    expect(result).toBe(true);
  });
  it('returns false if hits are less than length', () => {
    const myShip = ship(5); 
    myShip.hit();
    myShip.hit();
    
    const result = myShip.isSunk();
    
    expect(result).toBe(false);
  });
});