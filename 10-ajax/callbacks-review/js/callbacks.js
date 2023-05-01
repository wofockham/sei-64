// Callbacks Review

// A callback function is a function passed into another function.
// The callback function gets called FOR YOU, later, at some point in time.

// Javascript is asynchronous: things can happen out of order

// Timers: A C ... B

console.log('A');
setTimeout(function () {
    console.log('B: Time has passed');
}, 5000);
console.log('C');

// jQuery's document ready: I III II
console.log('I');
$(document).ready(function () {
    console.log('II The document is ready');
});
console.log('III');

// Event handlers Groucho Chico AND THEN MAYBE HARPO (and maybe HARPO repeatedly)
console.log('Groucho');
$(document).on('click', function () {
    console.log('Harpo: click detected');
});
console.log('Chico');

/////////////////////////////////////////////////////////////////////
// YOU ARE NOT EXPECTED TO UNDERSTAND THIS (yet)

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// colors.each do |color|
//   puts color
// end

// How do we console.log() these colours individually?

// Traditional JS technique:
// for (let i = 0; i < colors.length; i++) {
//     console.log( colors[i] );
// }

// .forEach
// DIY each function
const each = function (array, callback) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        callback(item);
    }
};

each(colors, function (c) {
    console.log(c);
});

each(['Groucho', 'Harpo', 'Marx'], function (brother) {
    console.log(brother + ' Marx');
});

// since ES5:
colors.forEach(function (c) {
    console.log(c.toUpperCase());
});
