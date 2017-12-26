const utils = require('./utils');
const expect = require('expect');



// describe() will create sub titles for test so you can easily identify them
// you can nest describe as well
describe('utils', () => {
  it('should add to numbers', () => {
    let result = utils.add(33, 11);

    expect(result).toBe(44).toBeA('number');
    // if (result !== 44) {
    //   throw new Error(`expected 44 but got ${result}`);
    // }
  });

  it('should square a number', () => {
    let result = utils.square(5);

    expect(result).toBe(25).toBeA('number');
    // if (result !== 25) {
    //   throw new Error(`expected 25 but got ${result}`);
    // }
  });

  //async testing

  it('should async add two numbers', (done) => {
    utils.asyncAdd(5, 2, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(5, (product) => {
      expect(product).toBe(25).toBeA('number');
      done();
    });
  });


  // (done) in the callback is for async functions

});


describe('playground tests', () => {

  it('should expect some values', () => {
    expect(12).toNotBe(14);
  });

  it('should expect some object', () => {
    expect({name: 'shinno'}).toEqual({name: 'shinno'});
    // toNotEqual is also a function
  });
  //two same object are not the same object but they can equal eachother


  it('should expect an array and an object', () => {
    expect([1,2,3,4,5]).toInclude(3);
    //toExclude is also usable
    expect({
      name: 'shinno',
      age: 25
    }).toInclude({age: 25});
  });

  it('should expect to have a first and last name from a full name', () => {
    let fullName = 'shinno guccci';
    let user = utils.setName({age: 25}, fullName);
    expect(user).toInclude({
      firstName: 'shinno',
      lastName: 'guccci'
    });
    // below also works but above is faster
    // expect(user.firstName).toExist().toBe('shinno');
    // expect(user.lastName).toExist().toBe('guccci');
  });

});




