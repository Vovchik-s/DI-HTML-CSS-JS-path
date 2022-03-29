
//Exercise 1 : Favorite Color
// let sentence = ["my","favorite","color","is","blue"];
// console.log(sentence.toString().replace(/,/g, " "));

//Exercise 2 : Mixup


// let str1 = "Hello";
// let str2 = "World";

// // let thirdWord should be equal to 'Wollo Herld'

// str1.slice(2)
// let str3 = str2.replace(/rld/g,'llo') + " " + str1.replace(/llo/g,'rld')
// console.log(str3)


//Exercise 3 : Calculator

// let num1;
// let num2;
// let res;
// let sum = prompt('You want to subtract, multiply or divide')
// switch (sum) {
//     case "subtract":
//         num1 = prompt('enter first number');
//         num2 = prompt('enter second number');
//         alert(`${num1} - ${num2} = ${res = num1 - num2}`)
//         break;
//     case "multiply":
//         num1 = prompt('enter first number');
//         num2 = prompt('enter second number');
//         alert(`${num1} * ${num2} = ${res = num1 * num2}`)
//         break;
//     case "divide":
//         num1 = prompt('enter first number');
//         num2 = prompt('enter second number');
//         alert(`${num1} / ${num2} = ${res = num1 / num2}`)
//         break;
//     default:
//         alert("I have never heard of that one!")
// }


//DAILY CHALLENGE

// //Exercise 1:At the end you should see this outcome:["Kiwi", "Oranges", "Blueberries"]


let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.sort().splice(0,2)
let reversed = fruits.reverse().unshift('Kiwi')

console.log(fruits)

//Exercise 2: console.log “Oranges”.


let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

let fruitArr = moreFruits[1][1];

console.log(fruitArr)


