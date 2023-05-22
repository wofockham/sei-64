const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require('axios');

// Basic setup
const server = express();
server.set('view-engine', ejs);
const PORT = 1337;

server.get('/hello', (req, res) => {
    res.send('Hello Cruel World from Express');
});

server.get('/goodbye', (req, res) => {
    res.send('Goodbye Cruel World');    
});

// Dynamic URLs
server.get('/fanclub/:name', (req, res) => {
    res.send(req.params.name + ' is a proud member of the Marx Brothers fan club');
});

// Views and passing data down to views: ERB, instance variables
server.get('/', (req, res) => {
    // set up some data (or get it from an API or DB)
    // pass that data to the view
    const bros = 'Groucho Harpo Chico Zeppo Gummo'.split(' ');
    const randomBrother = _(bros).sample();
    res.render('home.ejs', {brother: randomBrother, lucky: _.random(100)}); // Like instance variables
});

// Crappy calculator
server.get('/calc/:x/:y/:operator', (req, res) => {
    let answer;
    if (req.params.operator === '+') {
        answer = Number(req.params.x) + Number(req.params.y);
    } else if (req.params.operator === '-') {
        answer = Number(req.params.x) - Number(req.params.y);
    } // todo: handle multiplication, division etc
    res.render('calc.ejs', { answer: answer });
});

// Render JSON
server.get('/info.json', (req, res) => {
    // IRL: go and get your data from a database
    res.json({
        name: 'Groucho',
        instrument: 'guitar',
        vice: 'cigars',
        lucky: _.random(40)
    });
});

// Talk to an API
server.get('/trivia', (req, res) => {
    axios.get('http://numbersapi.com/random/trivia').then((response) => {
        res.send(response.data); // this could also be a complete EJS view
    });
});

// Form input
server.get('/ask', (req, res) => {
    res.render('ask.ejs');
});

server.get('/answer', (req, res) => {
    console.log(req.query); // req.query has form data inside it.
    res.render('answer.ejs', { question: req.query.question, answer: 'No comment' });
});

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));
