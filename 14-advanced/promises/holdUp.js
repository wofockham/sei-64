// setTimeout expects a callback -- it does not use Promises
// task: wrap setTimeout in a Promise (so it works with .then)

// YOUR CODE GOES HERE
const holdUp = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    });
};

// Alternatives:
// No curlies: implicit return
// const holdUp = (duration) => new Promise((resolve) => {
//     setTimeout(resolve, duration);
// });

// No curlies, no return: implicit return all the way down
// const holdUp = (duration) => new Promise((resolve) => setTimeout(resolve, duration));

// Make this code work:
holdUp(3000).then(() => {
    console.log('3 second has passed');
}).then(() => {
    console.log('this also runs');
});