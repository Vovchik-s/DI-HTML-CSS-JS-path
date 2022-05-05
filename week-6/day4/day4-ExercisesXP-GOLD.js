// Exercise 1 : Nested Functions
// Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion.
// Change the code below to nested arrow functions.

let landscape = () => {

    let result = "";

    let flat = x => {
        for (let count = 0; count < x; count++) {
            result = result + "_";
        }
    }

    let mountain = x => {
        result = result + "/"
        for (let counter = 0; counter < x; counter++) {
            result = result + "'"
        }
        result = result + "\\"
    }

    flat(4);
    mountain(4);
    flat(4)

    return result;
}

landscape()

// console.log(landscape())

// prediction:  ____/''''\\____ 
// output: "____/''''\____"


// Exercise 2 : Closure
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.

const addTo = x => y => x + y;
let addToTen = addTo(10);
addToTen(3);

// console.log(addToTen(3))

// prediction: 13
// output: 13

// Exercise 3 : Currying
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.

const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

// console.log(curriedSum(30)(1))

// prediction: 31
// output: 31

// Exercise 4 : Currying
// Analyse the code below, and before executing it, predict the outcome of the last line.

const curriedSum2 = (a) => (b) => a + b
const add5 = curriedSum2(5)
add5(12)

// console.log(add5(12))

// prediction:  17
// output: 17

// Exercise 5 : Composing
// Analyse the code below, and before executing it, predict the outcome of the last line.

const compose = (f, g) => (a) => f(g(a)); //10 + 6 + 1
const add1 = (num) => num + 1;
const add6 = (num) => num + 6;
compose(add1, add6)(10)

console.log(compose(add1, add6)(10))

// prediction:  17
// output: 17
