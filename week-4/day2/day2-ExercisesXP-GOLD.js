// Exercise 1 : Is_Blank
// Instructions
// Write a program to check whether a string is blank or not.

// console.log(isBlank('')); --> true
// console.log(isBlank('abc')); --> false

function isBlank(str) {
    str.toString();
    let check = str;

    if (check < 1) return true;
    else return false;

}

console.log(isBlank('d'))

// Exercise 2 : Abbrev_name
// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.

// console.log(abbrevName("Robin Singh")); --> "Robin S."

function abbrevName(name) {
    let firstName = name.split(" ").slice(0, 1)
    let lastName = name.split(" ").slice(1)
    lastName = lastName[0][0] + '.'
    console.log(firstName.concat(lastName).join(' '))
}

abbrevName("Robin Singh")

// Exercise 3 : SwapCase
// Instructions
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

function changeCase(str) {
    // let lowLetter = str.replace(/[a-z]*/g, str => str.toUpperCase());
    // let uppCase = str.replace(/[A-Z]*/g, str => str.toLowerCase());
    let newStr = '';

    for (let i = 0; i < str.length; i++) {

        if (str[i] == str[i].toUpperCase()) {
            newStr += str[i].toLowerCase()

        } else if (str[i] == str[i].toLowerCase()) {
            newStr += str[i].toUpperCase()
        }
    }
    return newStr;
}

console.log(changeCase('Hello'))


// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.


// Exercise 4 : Omnipresent Value
// Instructions
// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.
// To illustrate:

[[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// 3 exists in every element inside this array, so is omnipresent.
// Examples

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false
