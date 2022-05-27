// 1rst Daily Challenge

function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        let newArr = [];

        words.forEach(word => {
            if (typeof (word) === 'string') {
                newArr.push(word.toUpperCase())
            } else {
                reject('Ooops')
            }
        })
        resolve(newArr)
    })
}


// //in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana", "banana", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))


// makeAllCaps([1, "pear", "banana"])

function sortWords(arr) {
    return new Promise((resolve, reject) => {
        console.log(arr.length)
        if (arr.length > 4) {
            resolve(arr.sort())
        } else {
            reject('Array is less that 4')
        }

    })
}


// 2nd Daily Challenge

let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}`




// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)

// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object


// The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

const stringToMorse = 'hello';
const p = document.createElement('p');
p.style.marginTop = '10%'

document.querySelector('body').append(p);

toJs(morse)
    .then((result) => toMorse(result, stringToMorse))
    .then((result) => joinWords(result))
    .catch(error => console.log(error))



function toJs(string) {
    return new Promise((resolve, reject) => {
        if (typeof (string) === 'string') {
            resolve(JSON.parse(string))
        } else {
            reject('Is already an object')
        }
    })

}



function toMorse(morseJS, string) {
    return new Promise((resolve, reject) => {
        const newMorse = [];
        string.split("").map(word => {
            if (morseJS.hasOwnProperty(word)) {
                newMorse.push(morseJS[word])
            } else {
                reject('Some character is not defined!')
            }
        })
        resolve(newMorse)
    })
}

function joinWords(morseTranslation) {
    console.log(morseTranslation)
    morseTranslation.forEach(morse => {
        const newEl = document.createElement('h3')
        newEl.textContent = `${morse}`
        p.appendChild(newEl)
    })
}




// Chain the three functions.

// Example:

// "Hello" gives you
// ....
// .
// .-..
// .-..
// ---
