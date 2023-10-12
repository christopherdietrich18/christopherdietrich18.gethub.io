// Step 1: Declare variables x and y and assign values
let x = 1;
let y = '1';

// Step 2: Print the result of 1 + x + y in the console
console.log(1 + x + y); // This will result in '21' because x and y are concatenated as strings.

// Step 5: Swap the values of x and y using if statements
if (typeof x === 'number' && typeof y === 'string') {
    [x, y] = [y, x];
}

// Step 6: Show the result in a popup alert
alert('Result of 1 + x + y: ' + (1 + x + y));
