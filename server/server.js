const express = require('express');

let app = express();

app.get('/', (request, response) => {
  response.status(200).send('hello world');
});

app.get('/about', (request, response) => {
  response.status(404).send({error: 'page not found'});
});


app.listen(3000);
module.exports.app = app;
