const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello world!' });
});

app.listen('8080', () => {
  console.log('Now listening on port 8080');
});
