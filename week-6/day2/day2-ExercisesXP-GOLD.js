// Exercise 1: Sum Elements

// let arr = [1,2,3,4,5];

// console.log(arr.reduce((acc,next)=>{
//     return acc += next
// },0))

// Exercise 2 : Remove Duplicates


// let arr = [1,2,2,3,3,4,5];

// function removeDuplicate(arr) {
//     return arr.sort().filter((number, index, array) => {
//         return  number != array[index + 1];   // Checkin and returning el of array that not equal to next el
//     });
// }

// console.log(removeDuplicate(arr))



// Exercise 3 : Remove Certain Values
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.
// Sample array : 
// Expected result : [15, -22, 47]

// let array = [NaN, 0, 15, false, -22, '',undefined, 47, null];
// let newArr = array.filter(Boolean);  
// // Boolean return false on '', 0, null , undefined

// //https://www.tutorialsteacher.com/javascript/javascript-boolean

// console.log(newArr)


// Exercise 4 : Repeat Please !

// let str = 'Ha!'

// console.log(str.repeat(3))

// // Exercise 5 : Turtle & Rabbit

// const startLine = '     ||<- Start line';
// let turtle = '     🐢';
// let rabbit = '     🐇';

// console.log(startLine);
// console.log(turtle);
// console.log(rabbit);


// What happens when you run turtle = turtle.trim().padEnd(9, '=') ; ? 🐢=======

