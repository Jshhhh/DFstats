const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '/dist')));

app.post('/submit', (req, res) => {
    console.log(req.body);
});

const port = 3333;
app.listen(port, () => console.log('Listening on ' + port));