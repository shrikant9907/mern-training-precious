// 1: Define a Basic Function (Old Syntax)
// This is a regular function that takes two parameters and returns their sum.
function Total(a, b) {
    return a + b;
}

console.log('Test 0:');

// 2: Rewrite the Function as an Arrow Function (ES6 Syntax)
// Using ES6 arrow functions, we redefine the `Total` function and add 50 to the sum.
const Total = (a, b) => {
    return a + b + 50;
};

// 3: Call the Arrow Function and Output the Result
// We call the arrow function `Total` with arguments 5 and 8.
// The result will be (5 + 8 + 50) = 63.
const total = Total(5, 8);

console.log('Test 1:');
console.clear(); // Clear the console for clean output
console.log('Result:', total); // Output the result which is 63

// 4: Create Objects to Represent Users
// We create three user objects with id, name, and age properties.
const user1 = {
    id: 1,
    name: "Ravi",
    age: "30"
};

const user2 = {
    id: 1,
    name: "Neha",
    age: "30"
};

const user3 = {
    id: 1,
    name: "Rohit",
    age: "30"
};

// 5: Store User Objects in an Array
// The three user objects are combined into a single array called `users`.
const users = [user1, user2, user3];

// 6: Convert Array of Objects to a JSON String
// Use JSON.stringify to serialize the array of user objects into a JSON string.
const arrayOfObjectString = JSON.stringify(users);

console.log(arrayOfObjectString); // Output the JSON string version of the users array

// 7: Parse the JSON String Back to an Array of Objects
// Use JSON.parse to deserialize the JSON string back into JavaScript objects.
console.log(JSON.parse(arrayOfObjectString)); // Output the parsed array of objects

// 8: Dynamic Access of Object Properties (Commented for Reference)
// These steps show how to access object properties dynamically.
// const objKey = 'id'; // Define a dynamic key
// console.log(user1[objKey]); // Access the 'id' property of user1 using the dynamic key
// console.log(user1.name, user1.age); // Access specific properties (name, age) of user1
// console.log(users[0].name, users[0].age); // Access the first user's name and age from the array

// 9: Additional JavaScript Concepts (Commented for Reference)
// The rest involves concepts like strings, arrays, and common browser functions such as:
// Click events, Scroll events, and working with LocalStorage/SessionStorage.
// console.log(users); // Output the array of user objects
