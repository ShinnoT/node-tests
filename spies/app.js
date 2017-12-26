const db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  // check if email already exists
  // db.saveUser({
  //   email: email,
  //   password: password
  // });
    // however we can simplify with es6 syntax
  db.saveUser({email, password});
  // save the user to db
  // send welcome email
};
