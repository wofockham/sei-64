// recreate `cat` in JS

const fs = require('fs');

// Synchronous: wrong! Not enough callbacks
// const fileData = fs.readFileSync('simpsons.txt', 'utf-8');
// console.log(fileData);

// Asynchronous: right! Callbacks!
// Many asynchronous NodeJS functions implement the Error First Pattern
fs.readFile('simpsons.txt', 'utf-8', function (error, data) {
    if (error) {
        return console.error(error);
    }

    console.log(data);
    console.log('Thank you for using this program');
});
