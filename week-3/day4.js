//Exercise 1: Simple If/Else Statement


// let x = 5;
// let y = 2;
// if(x > y){
//   alert('x is the biggest number')
// }else{
//   alert('y is the biggest number')
// }




//Exercise 2: Chihuahua

// let newDog = "Chihuahua";
// newDog.length;

// console.log(newDog.toUpperCase())
// console.log(newDog.toLowerCase())

// if(newDog == "Chihuahua"){
//   console.log('I love Chihuahuas, it’s my favorite dog breed')
// }else{
//   console.log('I dont care, i prefer cats')
// }




//Exercise 3: Even Or Odd

// let num = prompt('Check number, even or odd');
// if(num % 2 === 0){
//   alert(`${num} is an even number`)
// }else{
//   alert(`${num} is an odd number`)
// }




//Exercise 4: Group Chat

// let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

// switch (users.length) {
//     case 1:
//         console.log(`${users[0]} is online`)
//         break;
//     case 2:
//         console.log(`${users[0]} and ${users[1]} is online`)
//         break;
//     default:
//         console.log(`${users[0]} , ${users[1]}  and ${users.length - 2} more is online`)

// }




//Exercise 1 : The World Translator

// let user = 'French';


// switch (user.toLowerCase()) {
//     case 'french':
//         console.log('Bonjour')
//         break;
//     case 'english':
//         console.log('Hello')
//         break;
//     case 'Hebrew':
//         console.log('Shalom')
//         break;
//   default:
//     console.log('01110011 01101111 01110010 01110010 01111001')
// }




//Exercise 2 : The Grade Assigner

// let user = {grade: 81};
// let grade = Object.values(user);

// if(grade >= 90){
//   console.log("A")
// }else if(grade <90 && grade > 79){
//     console.log("B")
// }else if(grade < 80 && grade > 69){
//     console.log("C")
// }




//Exercise 3 : Verbing

// let str = 'swimming'
// let check =  !str.includes('ing') ? str.concat('ing'): str.concat('ly');

// console.log(check)

//Exercises XP Ninja
//Exercise 1 : Age Difference
//incomprehensible explanation

//Exercise 2 : Zip Codes
//PART 1

// let zipCode = '12345';

// if(zipCode.toString().length <=5 && typeof zipCode === 'number'){
//   console.log('succes')
// }else{
//   console.log('error')
// }




//PART 2

// let zipCodeFalse = 'etsef';
// let zipCode = 12345;
// let check = (/^[0-9]*$/gm);

// if(/^[0-9]*$/gm.test(zipCodeFalse)){
//   console.log('succes')
// }else{
//    console.log('error')
// }

//Exercise 3 : Secret Word

// const reg = /[aeiou]/g
// const word = prompt('say somthing')
// const newWord = word.replace(reg, "-");
// console.log(newWord);

