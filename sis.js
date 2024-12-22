// Array ka kooban 1 ilaa 20
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Filter odd numbers
const oddNumbers = numbers.filter(num => num % 2 !== 0);

// Filter even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('numbers',numbers)

console.log("Odd numbers:", oddNumbers);
console.log("Even numbers:", evenNumbers);
