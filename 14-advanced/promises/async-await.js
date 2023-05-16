// 1. callbacks
// 2. promises
// 3. await promises -- write code that looks synchronous

const fs = require('fs');

// A Promise wrapper around the fs
const readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (err, content) => {
            if (err) {
                return reject(err); // invoke all the .catch callbacks
            }

            resolve(content); // invole all the .then callbacks
        });
    });
};

readFile('flintstones.txt').then((content) => {
    console.log(content);
});

// You can await the result of a Promise IF the await is inside an async function
const logFlintstones = async () => {
    const content = await readFile('flintstones.txt');
    console.log(content);
};

logFlintstones();

// Using axios //////////////////////////////////////////////////////
const axios = require('axios');

// Promise with .then
axios.get('http://www.numbersapi.com/random/trivia').then((response) => {
    console.log(response.data);
});

// Promise with await
const numberFact = async () => {
    const response = await axios.get('http://www.numbersapi.com/random/trivia');
    console.log(response.data);
};

numberFact();
