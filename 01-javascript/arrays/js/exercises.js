// ## Exercises: Arrays

// # Your top choices

// - Create an array to hold your top choices (colors, presidents, whatever).
// - For each choice, log to the screen a string like: "My #1 choice is blue."

const sandwiches = ['Reuben', 'Philly Cheesesteak', 'ham and cheese toastie', 'Monte Cristo'];

for (let i = 0; i < sandwiches.length; i++) {
    console.log(`My #${ i + 1 } is ${ sandwiches[i] }`);
}

