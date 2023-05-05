console.log('Hello world from Node.js');

// ES6 Advanced Features

// Arrow Functions //////////////////////////////////////////////////

// You have probably typed "function () {}" enough times in your life.
// Arrow functions behave differently with the `this` keyword.

// const add = function (a, b) {
//     return a + b;
// };

const add = (a, b) => {
    return a + b;
};

console.log( add(11, 3) );
console.log( add('hot', 'dogs') );

const lemons = 12;
console.log( add(lemons, 99) );

// Arrow functions have implicit return ONLY IF you don't use curlies.
const quickAdd = (a, b) => a + b; // Implicit return
console.log( quickAdd(4, 5) );

// Destructuring ////////////////////////////////////////////////////
// A quick way of creating shortcuts to things inside objects.

const gummo = {
    fullname: 'Gummo Marx',
    instrument: 'voice',
    vice: 'being obscure',
    bloodType: 'O+'
};

// const name = gummo.name;
// const instrument = gummo.instrument;
// const vice = gummo.vice;

const { fullname, instrument, vice } = gummo; // Object destructuring

const bros = ['Groucho', 'Harpo', 'Chico'];
const [funny, adorable, surly] = bros;

console.log(`My name is ${ fullname } and I play the ${ instrument }. My vice is ${ vice }.`);
