const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.Vocab = require('./api/models/vocabModel');
const routes = require('./api/routes/vocabRoutes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://theBlade:@cluster0.i0cbj.mongodb.net/?retryWrites=true&w=majority'); // TODO: get our DB connection

const PORT = process.env.PORT || 3000; // ready for deployment
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.listen(PORT);

// 404 "page not found"
app.use((req, res) => {
    res.status(404).send({ url: `${ req.originalUrl } not found` });
});

console.log(`Server running on http://localhost:${ PORT }`);
