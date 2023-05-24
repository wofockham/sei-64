// `this` lets you access the current object (or the containing object)
// from a method without needing to know the name of the variable
// containing the object

const groucho = {
    fullname: 'Groucho Julius Marx',
    greeting: function () {
        return `Good evening my name is ${ this.fullname }`;
    }
};

console.log( 'Calling the method', groucho.greeting() );

// What if we copy the method from inside the object?
// What if we convert the method into a regular function?

const unboundGreeting = groucho.greeting;
console.log( 'Calling the function', unboundGreeting() ); // this.fullname is undefined

// YOU CAN FIX THIS (if you need to) ////////////////////////////////

// bind() ///////////////////////////////////////////////////////////
// bind lets you attach an object to a function (so the function can act like a method)
const boundGreeting = groucho.greeting.bind(groucho);
console.log( 'Calling the bound function', boundGreeting() );

const otherGreeting = groucho.greeting.bind({fullname: 'Harpo Marx', diabetic: true, salary: false});
console.log( 'Hi Harpo', otherGreeting() );

// call() ///////////////////////////////////////////////////////////
console.log( 'call()', unboundGreeting.call(groucho) );
console.log( 'call()', unboundGreeting.call({fullname: 'Chico Marx'}) );


// apply() //////////////////////////////////////////////////////////
console.log( 'apply()', unboundGreeting.apply(groucho) );

const numbers = [56, 11, 23, 10];
console.log( Math.max(numbers) ); // NaN because .max is not expecting an array
console.log( Math.max.apply("this is ignored", numbers) ); // old school JS: .apply flattens out the array into just the values

// Modern fix: ES6 spread operator
console.log( Math.max(...numbers) );