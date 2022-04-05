// Exercise 1: Random Number
// Instructions
// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.

const random = Math.floor(Math.random() * 100);
console.log(random)


// Exercise 2: Capitalized Letters
// Instructions
// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note:

// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
// For example,

// capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']
function capitalize(str) {
    let res = [];
    let res2 = [];
    const newStr = Array.from(str);
    let final = [];

    for (let i = 0; i < newStr.length; i++) {
        if (i % 2 === 0) {
            res += newStr[i].toUpperCase();
        } else res += newStr[i]
    }
    for (let i = 0; i < newStr.length; i++) {
        if (i % 2 !== 0) {
            res2 += newStr[i].toUpperCase();
        } else res2 += newStr[i]
    }
    final.push(res, res2)
    console.log(final)
}

capitalize("abcdef")


// Exercise 3 : Is Palindrome?
// Instructions
// Write a JavaScript function that checks whether a string is a palindrome or not.
// Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.
// palindrome



// Exercise 4 : Biggest Number
// Instructions
// Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
// Note : This function should work with any array;
// Example:

const array = [-1, 0, 3, 100, 99, 2, 99];// should return 100
const array2 = ['a', 3, 4, 2]; // should return 4
const array3 = []; // should return 0


const biggestNumberInArray = arrayNumber => {
    return Math.max(...arrayNumber)
}

console.log(biggestNumberInArray(array))




// Exercise 5: Unique Elements
// Instructions
// Write a JS function that takes an array and returns a new array with only unique elements.
let numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

function isCopy(arr) {
    
    for (let i = 0; i < arr.length; i++) {

        for (let j = 9; j > i; j--) {

            if (arr[i] < arr[j]) {
                let numCopy = arr[i];  
                arr[i] = arr[j];
                arr[j] = numCopy;

            }
        }
    }

    return arr;
}

console.log(isCopy(numbers));

