//   Your string is : 'This dinner is not that bad ! You cook well', 
//   --> the result is : 'This dinner is good ! You cook well'

//   Your string is : 'This movie is not so bad !' 
//   --> the result is : 'This movie is good !'

//   Your string is : 'This dinner is bad !' 
//   --> the result is : 'This dinner is bad !'

// let wordNot = newStr.filter((el)=> el === "not");
// let wordBad = newStr.filter((el)=> el === "bad");


let sentence = "The movie is not that bad , I like it";
let newStr = sentence.split(" ")

let nIndex = newStr.indexOf('not');
let bIndex = newStr.indexOf('bad');


let sentence = "The movie is not that bad , I like it";
let newStr = sentence.split(" ")

let nIndex = newStr.indexOf('not');
let bIndex = newStr.indexOf('bad');

if (newStr.includes('not' && 'bad') && nIndex < bIndex) {
    newStr.splice(nIndex, 3, 'good')
    console.log(newStr.toString().replaceAll(",", " "))
} else {
    console.log(sentense)
}


// console.log(newStr.indexOf(''))


// for (let i = 0; i < newStr.length; i++) {
//     if (newStr[i] == "not" && nIndex < bIndex) {
//         newStr.splice(i, 3, 'good')
//         console.log(newStr.toString().replaceAll(",", " "))
//     }else{
//         console.log(sentence)
// }







