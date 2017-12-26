const expect = require('expect');
const rewire = require('rewire');



let app = rewire('./app');


describe('app', () => {

  let db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    let spy = expect.createSpy();
    spy('shinno', 25);
    expect(spy).toHaveBeenCalledWith('shinno', 25);
    // spy();
    // expect(spy).toHaveBeenCalled();

  });


  it('should call saveUser with user object', () => {
    let email = 'blah@blahblah.com';
    let password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

});
