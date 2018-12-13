const path = require('path');
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '/dist')));

app.post('/submit', (req, res) => {
  console.log(req.body);
  res.end();
});

const port = 3333;
app.listen(port, () => console.log(`Listening on ${port}`));
