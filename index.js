const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 6000;
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT);
