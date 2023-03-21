// ## The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// - takes 4 arguments: number of children, partner's name, geographic location, job title.
// - outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// - Call that function 4 times with 4 different values for the arguments.

const tellFortune = function (numKids, partnerName, geolocation, jobTitle) {
    const fortune = `You will be a ${ jobTitle } in ${ geolocation }, and married to ${ partnerName } with ${ numKids } kids.`;
    console.log(fortune);
};

tellFortune(11, 'George', 'Fiji', 'undertaker');
tellFortune(0, 'Wendy', 'Samoa', 'ebalmer');

// ## The Puppy Age Calculator

// You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:
// - takes 1 argument: your puppy's age.
// - calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// - outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// - Call the function three times with different sets of values.
// - Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

// Variadic: arity is 1 or 2.
const calculateDogAge = function (puppyAge, conversionRate=7) {
    const doggyAge = puppyAge * conversionRate;
    console.log(`Your doggie is ${ doggyAge } years old in dog years!`);
};

calculateDogAge(1);
calculateDogAge(10);
calculateDogAge(15, 6);

// ## The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// - takes 2 arguments: age, amount per day.
// - calculates the amount consumed for rest of the life (based on a constant max age).
// - outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// - Call that function three times, passing in different values each time.
// - Bonus: Accept floating point values for amount per day, and round the result to a round number.

const calculateSupply = function (age, amountPerDay) {
    const deathAge = 90;
    
    const amountPerYear = amountPerDay * 365.25; // including leap years
    const yearsRemaining = deathAge - age;
    
    // TODO: round the amoundRequired up to a whole number.
    const amountRequired = yearsRemaining * amountPerYear;
    console.log(`You will need ${ amountRequired } to last you until the ripe old age of ${ deathAge }`);
};

calculateSupply(36, 11); // hotdogs
calculateSupply(36, 3); // cheesecakes


// ## The Geometrizer

// Create 2 functions that calculate properties of a circle.

// Create a function called calcCircumfrence:

// - Pass the radius to the function.
// - Calculate the circumference based on the radius, and output "The circumference is NN".

// Create a function called calcArea:

// - Pass the radius to the function.
// - Calculate the area based on the radius, and output "The area is NN".

const calcCircumference = function (radius) {
    const circumference = 2 * radius * Math.PI;
    console.log(`The circumference is ${ circumference }`);
};

calcCircumference(1);
calcCircumference(3);

const calcArea = function (radius) {
    const area = Math.PI * radius * radius; // pi * r ^ 2
    console.log(`The area is ${ area }`);
};

calcArea(1);
calcArea(15);

// ## The Temperature Converter

// It's hot out! Let's make a converter.

// Create a function called celsiusToFahrenheit:
// - Store a celsius temperature into a variable.
// - Convert it to fahrenheit and output "NN°C is NN°F".

// - Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// - Convert it to celsius and output "NN°F is NN°C."

const celsiusToFahrenheit = function (celsius) {
    const fahrenheit = celsius * 1.8 + 32;
    console.log(`${ celsius }°C is ${ fahrenheit }°F`);
};

celsiusToFahrenheit(20);
celsiusToFahrenheit(21);
celsiusToFahrenheit(40);

const fahrenheitToCelsius = function (fahrenheit) {
    const celsius = (fahrenheit - 32) / 1.8; // precedence
    console.log(`${ fahrenheit }°F is ${ celsius }°C`);
};
fahrenheitToCelsius(68); // 20
fahrenheitToCelsius(69.8); // approx. 21
fahrenheitToCelsius(104); // 40ish
