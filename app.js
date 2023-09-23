const express = require('express');
const app = express();
const port = 5000;


app.use('/', (req, res) => {
    return res.send('Hello World !');
});

app.listen(port, () => {
    console.log(`Node Server running at ${port}`);
});