const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send({ message: 'Hello world!' });
});

app.get('/test', (req, res) => {
  res.send({ message: 'Hello from API!' });
});

app.listen('8080', () => {
  console.log('Now listening on port 8080');
});
