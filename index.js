const express = require('express');

const app = express();

app.use(express.static('public'))

app.get('/set-cookie', (req, res) => {
    res.cookie('test', 'foo', {domain: '127.0.0.1', maxAge: 90000, httpOnly: true});
    res.sendStatus(204);
})

app.listen(3000, () => {
    console.log('server listens on 3000');
})