

// function Total(a, b) {
//     return a + b;
// }

console.log('Test 0:')
// Arrow Function (ES6)
const Total = (a, b) => {
    return a + b + 50;
};

const total = Total(5, 8);
console.log('Test 1:')
console.clear()
console.log('Result:', total)

// const users = ["Ravi", "Neha", 'Rohit'];

// const array, object  and constant
const user1 = {
    id: 1,
    name: "Ravi",
    age: "30"
}

const user2 = {
    id: 1,
    name: "Neha",
    age: "30"
}

const user3 = {
    id: 1,
    name: "Rohit",
    age: "30"
}

const users = [user1, user2, user3];
//  0

const arrayOfObjectString = JSON.stringify(users);
 
// const objKey = 'id';
// console.log(user1[objKey]) // Dynamic
// console.log(user1.name, user1.age) // Object
// console.log(users[0].name, users[0].age) // Array and Object
// console.log(users) // Array of Objects
console.log(arrayOfObjectString) // String
console.log(JSON.parse(arrayOfObjectString)) // String to Array / Object
// console.log(user1)


// String 
// Array 
// (Common Function)
// Click / Scroll / Local Storage / Session Storage