// The differences between var, let and const.

// 0. const
// 1. let
// 3. (var)

// Scopes -- what information is visible/accessible at different points in your code.

// Global scope /////////////////////////////////////////////////////

const globalMessage = 'Hello Cruel World';

const showGlobalMessage = function () {
    console.log('I can see the global message', globalMessage); // globalMessage is in the global scope.
};

showGlobalMessage();
console.log('Still global', globalMessage);

// Function scope ///////////////////////////////////////////////////
const showLocalMessage = function () {
    const localMessage = "Goodbye Cruel World";
    console.log('I can see the local message', localMessage);
};

showLocalMessage();
// console.log(localMessage); // crash! localMessage has gone out of scope.

// ES2015 added block scope -- why? /////////////////////////////////

// var inside a block
if (1000 > 3) {
    var hotdogs = Infinity; // creates a global variable.
    console.log(hotdogs);
}

console.log('How many hotdogs?', hotdogs); // hotdogs is still in scope

// let inside a block
if (1000 > 5) {
    let goldfish = 7; // block scope -- NOT global
    console.log(goldfish); // still in scope
}

// console.log('How many goldfish?', goldfish); // crash! goldfish has gone out of scope

// const inside a block
if (1000 > 7) {
    const pies = 3; // block scope -- NOT global
    console.log(pies); // still in scope
}

// console.log('How many pies?', pies); // crash! pies has gone out of scope

// Practical example of why block scope was added to JS /////////////

const bros = ['Groucho', 'Harpo', 'Chico'];

for (let i = 0; i < bros.length; i++) {
    console.log(bros[i], 'Marx');
}

console.log('the last brother was', lastBrother);

// console.log('WTF does this still exist?', i);

