console.log( _.VERSION );

const nums = _.range(1, 13);

// .each ////////////////////////////////////////////////////////////
_(nums).each(function (n) {
    console.log(n);
});

// The docs prefer this style:
// _.each(nums, function (n) {
//     console.log(n);
// });

// .each with objects ///////////////////////////////////////////////
const sales = {
    January: 15,
    February: 11,
    March: 3
};

_(sales).each(function (amount, month) {
    console.log(`In ${ month } the sales were ${ amount }`);
});

// .map /////////////////////////////////////////////////////////////

const double = function (n) {
    return n * 2;
};

const doubleNumbers = _(nums).map(double);
console.log(doubleNumbers);

// .map with objects ////////////////////////////////////////////////
const salesInfo = _(sales).map(function (total, month) {
    return `For ${ month } sales were ${ total }`;
});
console.log(salesInfo);

// .reduce //////////////////////////////////////////////////////////
// const add = function (a, b) {
//     return a + b;
// };

// const total = _(nums).reduce(add);
// console.log(total);

const total = _(nums).reduce(function (runningTotal, n) {
    console.log(`runningTotal: ${ runningTotal }, n: ${ n }, returning: ${ runningTotal + n }`);
    return runningTotal + n;
});

// .reduce works with objects ///////////////////////////////////////

// .find() //////////////////////////////////////////////////////////
const divisibleByFive = function (n) {
    console.log('considering', n, n % 5 === 0);
    return n % 5 === 0;
};

const fivey = _(nums).find(divisibleByFive); // JUST THE FIRST
console.log(fivey);

// .filter() ////////////////////////////////////////////////////////
const allFives = _(nums).filter(divisibleByFive); // ALL OF THEM
console.log(allFives);

// .reject() ////////////////////////////////////////////////////////
const notFives = _(nums).reject(divisibleByFive);
console.log(notFives);

// .pluck() ////////////////////////////////////////////////////////
const bros = [
    {name: 'Groucho', instrument: 'guitar', disposition: 'surly'},
    {name: 'Harpo', instrument: 'harp', disposition: 'angelic'},
    {name: 'Chico', instrument: 'piano', disposition: 'lecherous'}
]
console.table( bros );
console.log( _(bros).pluck('disposition') );
