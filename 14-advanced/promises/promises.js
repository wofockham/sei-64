// Javascript is asynchronous
// Promises are an evolution of callbacks
// a way to handle or process data from an asynchronous process, whenever that finishes

// Callbacks
// (jQuery popularised Deferreds)
// Promises

// Short answer: when people talk about Promises, you need to use .then()
// Long answer: implment Promises

// recreate cat program in JS

const fs = require('fs');

// Error first pattern:
// fs.readFile('flintstones.txt', 'utf-8', (err, content) => {
//     if (err) {
//         throw err; // dramatic return
//     }
//     console.log(content);
// });

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

// Promises let us handle success and error separately (in .then and .catch, respectively)
readFile('flintstones.txt').then((content) => {
    console.log(content);
}).catch((err) => {
    console.log('there was error', err);
});

// You can attach multiple callbacks: .then().then().then().catch().catch()

// You can attach .then callbacks later (much later) and they'll still run!

const flintstonesPromise = readFile('flintstones.txt');
flintstonesPromise.then((people) => {
    console.log('Flintstones people', people);
});

setTimeout(() => {
    flintstonesPromise.then((fileContent) => {
        console.log('time has passed but I still attach more callbacks');
        console.log(fileContent);
    });
}, 7000);