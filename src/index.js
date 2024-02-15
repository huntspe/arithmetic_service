app.get('/eval/:expression', (req, res) => {
    const expression = req.params.expression;
    try {
        const result = eval(expression); // Using eval to evaluate the expression
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: "Invalid expression" });
    }
});
