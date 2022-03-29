// //Exercise 1:At the end you should see this outcome:["Kiwi", "Oranges", "Blueberries"]


let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.sort().splice(0,2)
let reversed = fruits.reverse().unshift('Kiwi')

console.log(fruits)

//Exercise 2: console.log “Oranges”.


let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

let fruitArr = moreFruits[1][1];

console.log(fruitArr)


