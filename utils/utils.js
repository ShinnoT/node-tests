module.exports.add = (a, b) => {
  return a + b;
};


module.exports.square = (x) => {
  return x * x;
};


module.exports.setName = (userObject, fullName) => {
  let names = fullName.split(' ');
  userObject.firstName = names[0];
  userObject.lastName = names[1];
  return userObject;
};




//asynchronous JS

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

module.exports.asyncSquare = (a, callback) => {
  setTimeout(() => {
    callback(a * a);
  }, 1000);
};
