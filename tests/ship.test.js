const ship = require('../src/ship.js');

describe('ship.length', () => {
  it('returns the correct size when a ship is created', () => {
    const myShip = ship(1);
    expect(myShip.length).toEqual(1);
  });
});

describe('ship.hits', () => {
  let myShip;
  beforeEach(() => {
      myShip = ship(3);
  });
  it ('returns the correct amount of hits when a single hit is executed', () => {
    myShip.hit();
    
    expect(myShip.hits).toEqual(1);
  });
  it('allows the user to set the number of hits', () => {
    myShip.hits = 2;
    
    expect(myShip.hits).toEqual(2);
  });
  it ('wont allow the user to set a number of hits greater than the length', () => {
    myShip.hits = 4;
    
    expect(myShip.hits).toEqual(0);
  });
  it ('wont allow the user to set the number of hits below zero', () => {
    myShip.hits = -4;
    
    expect(myShip.hits).toEqual(0);
  });
});

describe ('ship.hit', () => {
  let myShip;
  beforeEach(() => {
      myShip = ship(2);
  });
  it('returns one hit when hit is called', () => {
    myShip.hit();

    expect(myShip.hits).toEqual(1);
  });
  it('does not increment hits when hits is equal to the length of the ship', () => {
    myShip.hit();
    myShip.hit();
    myShip.hit();

    expect(myShip.hits).toEqual(2);
  });
});

describe('ship.isSunk', () => {
  it('returns true if hits are equal to length', () => {
    const myShip = ship(3);
    myShip.hit();
    myShip.hit();
    myShip.hit();
    
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