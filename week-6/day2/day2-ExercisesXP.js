
// // #1

// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }

// // output 3
// // real output : alert- 3 (undefined in console)

// console.log(q1())

//#2
// var a = 0;
// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a);
// }

 // output 0 , 5
 // real output : 0 ,5 

// console.log(q22())
// console.log(q2())
// console.log(q22())

// //#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a);
// }
// // output hello
// // real hello (its not nesseary to define variable. JS can do it him self)
// // run in the console:
// q3()
// q32()

// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }


// // run in the console:
// q4()

// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);
// // output 5
// // real 5


////////////////////////////////////////////////////////////////////////////////

// Exercise 2 : Ternary Operator

// const winBattle = () =>{
//     return true;
// }

// let experiencePoints = winBattle ? 10 :  1 ;
// console.log(experiencePoints)

// 10


// Exercise 3 : Is It A String ?


// const isString = (str) => {
//     if(str.toString().match(/^[(,)(0-9)]*[0-9]+$/)) return false;
//     else return true
// }
// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false


// Exercise 4 : Colors

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// console.log(colors.includes('Violet')? 'Yeah': 'No...')
// colors.forEach((color,index) => console.log(`My#${index+1} choice is ${color}`))


// Exercise 6 : Bank Details

// var bankAmount = 1000;
// var vat = bankAmount - (bankAmount * 0.17);

// let details = ["+200", "-100", "+146", "+167", "-2900"];

// function endOfTheMonth(arr) {
//     arr.forEach(sum => {console.log(vat += +(sum))})
// }

// console.log(endOfTheMonth(details))


