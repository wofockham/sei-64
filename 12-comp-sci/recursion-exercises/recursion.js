// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax (array, largest=-Infinity) {
    // This function returns the largest number in a given array.
    // base case
    if (array.length === 0) {
        return largest;
    }

    const candidate = array.shift();    

    // do the actual work
    if (candidate > largest) {
        largest = candidate;
    }

    // recurse one step closer to the base case
    return findMax(array, largest);
}

function factorial (n) {
    return n === 1 ? 1 : n * factorial(n-1);
}

function fibonacci (n) {
    if (n === 1 || n === 2) {
        return 1; // base case
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

function coinFlips (tosses) {
    const combinations = [];

    // helper:
    const flip = function (soFar='') {
        // console.log('soFar', soFar, soFar.length === tosses);
        if (soFar.length === tosses) {
            combinations.push(soFar); // base case
        } else {
            flip(soFar + 'H');
            flip(soFar + 'T');
        }
    };

    flip();

    return combinations;
}

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}