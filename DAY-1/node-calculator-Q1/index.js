// Import the crypto module
const crypto = require('crypto');

// Get command line arguments
const args = process.argv.slice(2); // Skip the first two elements
const operation = args[0]; // The first argument is the operation
const numbers = args.slice(1).map(Number); // Convert remaining arguments to numbers

// Function to perform calculations
function calculate(operation, numbers) {
    switch (operation) {
        case 'add':
            return numbers.reduce((acc, curr) => acc + curr, 0);
        case 'sub':
            return numbers.reduce((acc, curr) => acc - curr);
        case 'mult':
            return numbers.reduce((acc, curr) => acc * curr, 1);
        case 'divide':
            return numbers.reduce((acc, curr) => acc / curr);
        case 'sin':
            return numbers.map(num => Math.sin(num));
        case 'cos':
            return numbers.map(num => Math.cos(num));
        case 'tan':
            return numbers.map(num => Math.tan(num));
        case 'random':
            if (numbers.length === 0) {
                console.log("Provide length for random number generation.");
                return;
            }
            const length = numbers[0];
            return crypto.randomBytes(length).toString('binary');
        default:
            console.log("Invalid operation");
    }
}

// Execute the calculation and log the result
const result = calculate(operation, numbers);
if (result !== undefined) {
    console.log(result);
}
