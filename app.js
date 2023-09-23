const express = require('express');
const inspirationQuote = require('inspirational-quotes');
const app = express();
const port = 5000;

// Serve static files from the "views" directory
app.use(express.static('views'));

const person = {
    name: 'Alice',
    address: {
      city: 'Wonderland',
    },
};

app.get('/', (req, res) => {
    return res.send('Hello World !');
});

app.get('/quote', (req, res) => {
    const quote = inspirationQuote.getRandomQuote();
    return res.json({ quote });
});

app.get('/city', (req, res) => {
    return res.json({city: person?.address?.city});
});

app.listen(port, () => {
    console.log(`Node Server running at ${port}`);
});