const express = require('express');
const ejs = require('ejs');
const quote = require('stock-quote');

const server = express();
server.set('view-engine', ejs);
server.use(express.static('public')); // put the public folder "online"

const PORT = 8888;

server.get('/', (req, res) => {
    res.render('home.ejs');
});

server.get('/info', async (req, res) => {
    const info = await quote.getQuote(req.query.symbol);
    res.render('info.ejs', { symbol: req.query.symbol, price: info.currentPrice} );
});

server.listen(PORT, () => console.log(`server running at http://localhost:${ PORT }`));
