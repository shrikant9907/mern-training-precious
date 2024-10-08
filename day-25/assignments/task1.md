# JavaScript Exercises List

### 1. Function to get sum of two number

#### Example 1
```js
function getSum(n1, n2) {
  return n1 + n2;
}
const sum = getSum(5, 2);
console.log(sum);  
// Output: 7
```
#### Example 2: Using arrow function
```js
const getSum = (n1, n2) => {
  return n1 + n2;
}
const sum = getSum(5, 2);
console.log(sum);  
// Output: 7
```

### 2. Function to return the length of an array:
```js
function getArrayLength(arr) {
  return arr.length;
}
```

### 3. Function to reverse a string:
```js
function reverseString(str) {
  return str.split('').reverse().join('');
}
```

### 4. Function to return the largest number in an array:

```js
function getMaxNumber(arr) {
  return Math.max(...arr);
}
```

### 5. Function to count the number of words in a sentence:

```js
function countWords(sentence) {
  return sentence.split(' ').length;
}
```

### 6. Function to capitalize all strings in an array:

```js
function capitalizeStrings(arr) {
  return arr.map(str => str.toUpperCase());
}
```

### 7. Function to check if a number is even:

```js
function isEven(number) {
  return number % 2 === 0;
}
```

### 8. Function to filter even numbers from an array:

```js
function getEvenNumbers(arr) {
  return arr.filter(number => number % 2 === 0);
}
```

### 9. Function to check if a string is a palindrome:

```js
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
```

### 10. Function to find the longest string in an array:
```js
function getLongestString(arr) {
  return arr.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, '');
}
```

### 11. Function to calculate the factorial of a number:
```js
function calculateFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * calculateFactorial(num - 1);
}
```

### 12. Function to calculate the sum of numbers in an array:

```js
function calculateSum(arr) {
  return arr.reduce((sum, number) => sum + number, 0);
}
```

### 13. Function to check if a string contains only digits:

```js
function containsOnlyDigits(str) {
  return /^\d+$/.test(str);
}
```

### 14. Function to find common elements between two arrays:

```js
function getCommonElements(arr1, arr2) {
  return arr1.filter(element => arr2.includes(element));
}
```

### 15. Function to reverse the order of words in a sentence:
```js
function reverseWordsOrder(sentence) {
  return sentence.split(' ').reverse().join(' ');
}
```
### 16. Write a function to check if a given number is even or odd.
```js
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
```

### 17. Write a function to calculate the factorial of a number.
```js
function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * calculateFactorial(number - 1);
  }
}
```

### 18. Write a function to find the maximum number in an array.
```js
function findMaxNumber(array) {
  return Math.max(...array);
}
```

### 19. Write a function to find the maximum number in an array.
```js
function findMaxNumber(array) {
  return Math.max(...array);
}
```

### 20. Write a function to reverse a string.
```js
function reverseString(str) {
  return str.split('').reverse().join('');
}
```

### 21. Write a function to check if a given string is a palindrome.
```js
function checkPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
```

### 22. Write a function to calculate the sum of all numbers in an array.
```js
function calculateSum(array) {
  return array.reduce((sum, number) => sum + number, 0);
}
```

### 23. Write a function to check if a given year is a leap year.
```js
function checkLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}
```

### 24. Write a function to find the second largest number in an array.
```js
function findSecondLargest(array) {
  const sortedArray = array.sort((a, b) => b - a);
  return sortedArray[1];
}
```

### 25. Write a function to convert a temperature from Celsius to Fahrenheit.
```js
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
```

### 26. Write a function to remove all duplicates from an array.
```js
function removeDuplicates(array) {
  return [...new Set(array)];
}
```

### 27. Write a function to check if a given string contains only digits.
```js
function checkDigitsOnly(str) {
  return /^\d+$/.test(str);
}
```

### 28. Write a function to sort an array of numbers in ascending order.
```js
function sortNumbersAscending(array) {
  return array.sort((a, b) => a - b);
}
```

### 29. Write a function to count the number of vowels in a string.
```js
function countVowels(str) {
  const vowelRegex = /[aeiou]/gi;
  const matches = str.match(vowelRegex);
  return matches ? matches.length : 0;
}
```

### 30. Write a function to find the index of the first occurrence of a given element in an array.
```js
function findFirstIndex(array, element) {
  return array.indexOf(element);
}
```

### 31. Write a function to generate a random number between two given numbers.
```js
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

### 32. Write a function to calculate the average of an array of numbers.
```js
function calculateAverage(array) {
  const sum = array.reduce((total, number) => total + number, 0);
  return sum / array.length;
}
```

### 33. Write a function to capitalize the first letter of each word in a sentence.
```js
function capitalizeWords(sentence) {
  const words = sentence.split(' ');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
}
```

### 34. Write a function to check if two arrays are equal.
```js
function checkArraysEquality(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}
```

### 35. Write a function to remove all whitespace characters from a string.
```js
function removeWhitespace(str) {
  return str.replace(/\s/g, '');
}
```

### 36. Write a function to find the longest word in a sentence.
```js
function findLongestWord(sentence) {
  const words = sentence.split(' ');
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}
```

### 37. Write a function to check if a given number is prime.
```js
function checkPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
```

### 38. Write a function to calculate the power of a number.
```js
function calculatePower(base, exponent) {
  return Math.pow(base, exponent);
}
```

### 39. Write a function to find the sum of squares of numbers in an array.
```js
function calculateSumOfSquares(array) {
  return array.reduce((sum, number) => sum + Math.pow(number, 2), 0);
}
```

### 40. Write a function to convert a string to title case.
```js
function convertToTitleCase(str) {
  return str.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
}
```

### 41. Write a function to remove the last element from an array.
```js
function removeLastElement(array) {
  array.pop();
  return array;
}
```

### 42. Write a function to generate a random password of a given length.
```js
function generateRandomPassword(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}
```

### 43. Write a function to find the difference between two arrays.
```js
function findArrayDifference(array1, array2) {
  return array1.filter(element => !array2.includes(element));
}
```

### 44. Write a function to reverse the order of words in a sentence.
```js
function reverseWordsOrder(sentence) {
  const words = sentence.split(' ');
  return words.reverse().join(' ');
}
```

### 45. Write a function to find the median of an array of numbers.
```js
function findMedian(array) {
  const sortedArray = array.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedArray.length / 2);

  if (sortedArray.length % 2 === 0) {
    return (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
  } else {
    return sortedArray[middleIndex];
  }
}
```

### 46. Write a function to check if a given string is a valid email address.
```js
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```

### 47. Write a function to rotate the elements of an array to the right by a given number of positions.
```js
function rotateArrayRight(array, positions) {
  const rotatedArray = [...array];
  for (let i = 0; i < positions; i++) {
    rotatedArray.unshift(rotatedArray.pop());
  }
  return rotatedArray;
}
```

### 48. Write a function to find the sum of even numbers in an array.
```js
function calculateSumOfEvenNumbers(array) {
  return array.reduce((sum, number) => {
    if (number % 2 === 0) {
      return sum + number;
    } else {
      return sum;
    }
  }, 0);
}
```

### 49. Write a function to check if a given string is a valid URL.
```js
function validateURL(url) {
  const urlRegex = /^(http|https):\/\/([a-zA-Z0-9-]+\.){1,}[a-zA-Z0-9-]{2,}$/;
  return urlRegex.test(url);
}
```

### 50. Write a function to find the largest sum of any two numbers in an array.
```js
function findLargestSumOfTwoNumbers(array) {
  const sortedArray = array.sort((a, b) => b - a);
  return sortedArray[0] + sortedArray[1];
}
```

### 51. Write a function to remove all elements from an array that satisfy a specific condition.
```js
function removeElements(array, condition) {
  return array.filter(element => !condition(element));
}
```

### 52. Write a function to find the first n Fibonacci numbers.
```js
function generateFibonacciNumbers(n) {
  const fibonacciNumbers = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextNumber = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
    fibonacciNumbers.push(nextNumber);
  }

  return fibonacciNumbers;
}
```

### 53. Write a function to check if a given string is a valid credit card number.
```js
function validateCreditCardNumber(number) {
  const creditCardRegex = /^(?:\d{4}-){3}\d{4}$|^\d{16}$/;
  return creditCardRegex.test(number);
}
```

### 54. Write a function to find the sum of all multiples of 3 or 5 below a given number.
```js
function calculateSumOfMultiples(number) {
  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}
```

### 55. Write a function to convert a decimal number to binary.

```js
function convertDecimalToBinary(number) {
  return number.toString(2);
}
```

### 56. Write a function to find the common elements between two arrays.
```js
function findCommonElements(array1, array2) {
  return array1.filter(element => array2.includes(element));
}
```

### 57. Write a function to check if a given string is a valid IPv4 address.
```js
function validateIPv4Address(ipAddress) {
  const ipAddressRegex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return ipAddressRegex.test(ipAddress);
}
```

### 58. Write a function to find the largest product of any two numbers in an array.
```js
function findLargestProductOfTwoNumbers(array) {
  let largestProduct = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const product = array[i] * array[j];
      if (product > largestProduct) {
        largestProduct = product;
      }
    }
  }

  return largestProduct;
}
```

### 59. Write a function to capitalize the first letter of each word in a sentence.
```js
function capitalizeWords(sentence) {
  return sentence.replace(/\b\w/g, char => char.toUpperCase());
}
```

### 60. Write a function to find the difference between two dates in days.
```js
function calculateDateDifference(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
  const differenceInDays = Math.round(Math.abs((date1 - date2) / oneDay));
  return differenceInDays;
}
```

### 61. Write a function to remove the first element from an array.
```js
function removeFirstElement(array) {
  array.shift();
  return array;
}
```

### 62. Write a function to convert a decimal number to hexadecimal.
```js
function convertDecimalToHexadecimal(number) {
  return number.toString(16);
}
```

### 63. Write a function to find the maximum difference between any two numbers in an array.
```js
function findMaxDifference(array) {
  let maxDifference = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const difference = Math.abs(array[i] - array[j]);
      if (difference > maxDifference) {
        maxDifference = difference;
      }
    }
  }

  return maxDifference;
}
```

### 64. Write a function to count the number of occurrences of a specific element in an array.
```js
function countOccurrences(array, element) {
  return array.reduce((count, current) => count + (current === element ? 1 : 0), 0);
}
```

### 65. Write a function to find the sum of all numbers in a range of integers.
```js
function calculateSumInRange(start, end) {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}
```

### 66. Write a function to find the average word length in a sentence.
```js
function calculateAverageWordLength(sentence) {
  const words = sentence.split(' ');
  const totalLength = words.reduce((sum, word) => sum + word.length, 0);
  return totalLength / words.length;
}
```

### 67. Write a function to check if a given string is a valid IPv6 address
```js
function validateIPv6Address(ipAddress) {
  const ipAddressRegex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  return ipAddressRegex.test(ipAddress);
}
```

### 68. Write a function to find the smallest common multiple of two numbers.
```js
function findSmallestCommonMultiple(number1, number2) {
  const gcd = findGreatestCommonDivisor(number1, number2);
  return (number1 * number2) / gcd;
}

function findGreatestCommonDivisor(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
```

### 69. Write a function to remove all non-alphanumeric characters from a string.
```js
function removeNonAlphanumeric(str) {
  return str.replace(/[^0-9a-zA-Z]/g, '');
}
```

### 70. Write a function to find the most frequent element in an array.
```js
function findMostFrequentElement(array) {
  const frequencyMap = {};

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (frequencyMap[element]) {
      frequencyMap[element]++;
    } else {
      frequencyMap[element] = 1;
    }
  }

  let mostFrequentElement = null;
  let highestFrequency = 0;

  for (const element in frequencyMap) {
    if (frequencyMap[element] > highestFrequency) {
      mostFrequentElement = element;
      highestFrequency = frequencyMap[element];
    }
  }

  return mostFrequentElement;
}
```

### 71. Write a function to find the longest palindromic substring in a given string.
```js
function findLongestPalindromicSubstring(str) {
  let longestSubstring = '';

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const substring = str.slice(i, j);
      if (isPalindrome(substring) && substring.length > longestSubstring.length) {
        longestSubstring = substring;
      }
    }
  }

  return longestSubstring;
}

function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
```

### 72. Write a function to find the missing number in a given range of integers.
```js
function findMissingNumber(array) {
  const n = array.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = array.reduce((sum, number) => sum + number, 0);
  return expectedSum - actualSum;
}
```

### 73. Write a function to remove all elements with a specific value from an array.
```js
function removeElementsWithValue(array, value) {
  return array.filter(element => element !== value);
}
```

### 74. Write a function to generate a random color in hexadecimal format.
```js
function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    color += letters[randomIndex];
  }

  return color;
}
```

### 75. Write a function to find the shortest word in a sentence.
```js
function findShortestWord(sentence) {
  const words = sentence.split(' ');
  let shortestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortestWord.length) {
      shortestWord = words[i];
    }
  }

  return shortestWord;
}
```

### 76. Write a function to reverse a string.
```js
function reverseString(str) {
  return str.split('').reverse().join('');
}
```

### 77. Write a function to find the average of all numbers in an array.
```js
function calculateAverage(array) {
  const sum = array.reduce((total, number) => total + number, 0);
  return sum / array.length;
}
```

### 78. Write a function to check if a given string is a palindrome (ignoring spaces and punctuation).
```js
function isPalindrome(str) {
  const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = alphanumericStr.split('').reverse().join('');
  return alphanumericStr === reversedStr;
}
```

### 79. Write a function to remove duplicate elements from an array.
```js
function removeDuplicates(array) {
  return [...new Set(array)];
}
```

### 80. Write a function to check if a number is a prime number.
```js
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
```

### 81. Write a function to find the second smallest element in an array.
```js
function findSecondSmallest(array) {
  const sortedArray = array.sort((a, b) => a - b);
  return sortedArray[1];
}
```

### 82. Write a function to remove all whitespace characters from a string.
```js
function removeWhitespace(str) {
  return str.replace(/\s/g, '');
}
```

### 83. Write a function to check if two arrays are equal (have the same elements in the same order).
```js
function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}
```

### 84. Write a function to find the power of a number.
```js
function power(base, exponent) {
  return Math.pow(base, exponent);
}
```

### 85. Write a function to convert a string to title case (capitalize the first letter of each word).
```js
function toTitleCase(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}
```

### 86. Write a function to find the median of three numbers.
```js
function findMedian(num1, num2, num3) {
  const sortedArray = [num1, num2, num3].sort((a, b) => a - b);
  return sortedArray[1];
}
```

### 87. Write a function to remove all vowels from a string.
```js
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}
```

### 89. Write a function to generate a random number within a specified range.
```js
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

### 90. Write a function to count the number of vowels in a string.
```js
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
```

### 91. Write a function to check if an array is sorted in ascending order.
```js
function isSorted(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }

  return true;
}
```

### 92. Write a function to find the sum of the digits of a positive integer.
```js
function sumDigits(number) {
  let sum = 0;

  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }

  return sum;
}
```
 
