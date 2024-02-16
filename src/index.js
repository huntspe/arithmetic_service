const express = require('express');
const cors = require('cors');
const app = express();
const{add} = require('./test/arithmetica');
app.use(cors());

const port = 3000;

app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!');
});

app.get('/add/:n/:m', (req, res) => {
    // to make this use the add function from arithmetica.js
    res.json(add(Number(req.params.n), Number(req.params.m)));
});

app.get('/sub/:n/:m', (req, res) => {
    res.json(Number(req.params.n) - Number(req.params.m));
});

app.get('/mul/:n/:m', (req, res) => {
    res.json(Number(req.params.n) * Number(req.params.m));
});

app.get('/div/:n/:m', (req, res) => {
    res.json(Number(req.params.n) / Number(req.params.m));
});

app.get('/eval/:expression', (req, res) => {
    const expression = req.params.expression;
    try {
        const result = eval(expression); // Using eval to evaluate the expression
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: "Invalid expression" });
    }
});

app.listen(port, () => {
    console.log(`Arithmetic service running at http://localhost:${port}`);
});

module.exports = app;
