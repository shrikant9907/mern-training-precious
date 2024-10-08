 
// JavaScript Code Refactoring and Interview Explanation

// 2) Sum of all array values using `reduce`
// Problem: Calculate the sum of all values in an array.
let arr = [1, 2, 5];
let sum = arr.reduce((a, b) => a + b);
console.log("Sum:", sum);  // Output: 8

// Explanation: 
// - The `reduce` function iterates over the array, applying the callback function `(a, b) => a + b` at each step.
// - `a` accumulates the sum, and `b` represents the current element.

// ----------------------------------------------

// 3) Explain the behavior of `setTimeout` with `let` vs `var`
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(a[i]), 1000);  // Output: 1 to 10 with 1s delay
}

// With `let`, the variable `i` is block-scoped, so each iteration of the loop gets a new `i`. 
// With `var`, `i` would be hoisted, resulting in `undefined` after the loop completes.

// ----------------------------------------------

// 4) Post-increment vs Pre-increment
let l = 1;
let m = l++;  // m = 1, l = 2
let n = ++l;  // n = 3, l = 3
let o = l + 1;  // o = 4
console.log(`l: ${l}, m: ${m}, n: ${n}, o: ${o}`);  // l: 3, m: 1, n: 3, o: 4

// Explanation:
// - `l++`: Post-increment returns the value before incrementing.
// - `++l`: Pre-increment increments the value first and then returns it.

// ----------------------------------------------

// 5) Variable Incrementation Example
let a_5 = 3;
let b_5 = a_5++;  // b = 3, a = 4
let c_5 = ++a_5;  // c = 5, a = 5
console.log(`a: ${a_5}, b: ${b_5}, c: ${c_5}`);  // a: 5, b: 3, c: 5

// ----------------------------------------------

// 6) Function Return Behavior
function func1() {
  return { name: "Full Stack Tutorials" };
}
console.log(func1());  // Output: { name: 'Full Stack Tutorials' }

function func2() {
  return;
  { name: "Full Stack Tutorials" };  // Unreachable block
}
console.log(func2());  // Output: undefined

// Explanation: 
// - In `func2()`, the `return` statement is terminated before the object, leading to `undefined`.

// ----------------------------------------------

// 7) Type Checking
console.log(typeof undefined);  // undefined
console.log(typeof null);  // object
console.log(typeof 1);  // number
console.log(typeof 'undefined');  // string
console.log(typeof typeof 1);  // string

// Explanation:
// - `typeof null` is an edge case; it returns `'object'` due to legacy reasons.

// ----------------------------------------------

// 8) Convert Object to Array
let obj = { id: "1", name: "Test User", age: "25", profession: "Developer" };
console.log(Object.keys(obj));  // Output: ['id', 'name', 'age', 'profession']
console.log(Object.values(obj));  // Output: ['1', 'Test User', '25', 'Developer']
console.log(Object.entries(obj));  // Output: [['id', '1'], ['name', 'Test User'], ...]

// ----------------------------------------------

// 9) Convert Array to Object
let arr9 = ["1", "Test User", "25", "Developer"];
let arrObj = { ...arr9 };  // Using the spread operator
console.log(arrObj);  // Output: {0: '1', 1: 'Test User', 2: '25', 3: 'Developer'}

// ----------------------------------------------

// 10) Shallow Copy vs Deep Copy
const x = { x: 1, y: 2 };
const y = x;  // Shallow copy
const z = { ...x };  // Deep copy
y.x = 3;  // Changes x too
z.x = 3;  // Does not change x
console.log(x, y, z);

// ----------------------------------------------

// 12) Reverse Each Word in a String
function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
let reversedString = reverseBySeparator("Welcome to this JavaScript Guide!", "");
let reversedWords = reverseBySeparator(reversedString, " ");
console.log(reversedWords);  // Output: Guide! JavaScript this to Welcome

// ----------------------------------------------

// 13) Check if an Object is an Array
var arrayList = [1, 2, 3];
console.log(Array.isArray(arrayList));  // true
console.log(Object.prototype.toString.call(arrayList) === '[object Array]');  // true

// ----------------------------------------------

// 14) Check if a Number is an Integer
function isInt(num) {
  return num % 1 === 0;
}
console.log(Number.isInteger(10));  // true
console.log(isInt(12.2));  // false

// ----------------------------------------------

// 15) Concatenate an Array with Itself
function duplicate(arr) {
  return [...arr, ...arr];
}
const tarr = duplicate([1, 2, 3, 4, 5]);  // Output: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
console.log(tarr);

// ----------------------------------------------

// 16) Closure Example
function adder(a) {
  return function(b) {
    return a + b;
  }
}
var addSix = adder(5);
console.log(addSix(10));  // Output: 15
 