const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.post('/', (req, res) => {
    res.send({valami: 'ertek'})
});

app.listen(port, () => {
    console.log(`Példa App publikálva a ${port}-on`);
});