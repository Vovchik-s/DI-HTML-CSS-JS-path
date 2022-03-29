//Exercise 1: Your Favorite Food
// let f ='fish';
// let d ='dinner'
// console.log(`I eat ${f} at every ${d}`);


//Exercise 2 : Series
//PART I

// let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// let myWatchedSeriesLength = myWatchedSeries.length //1
// let myWatchedSeriesSentence = myWatchedSeries.toString()//2
// console.log(`I wathed 3 series: ${myWatchedSeries}`) //3



//PART II
// let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// myWatchedSeries.splice(2,1, 'friends') //1
// myWatchedSeries.push('office') //2
// myWatchedSeries.unshift('heroes') //3

// for(let i=0;i< myWatchedSeries.length;i++ ){ //4
//   if(myWatchedSeries[i] == "black mirror"){  //or just myWatchedSeries.splice(1, 1)
//     myWatchedSeries.splice(i, 1)
//   }
// }

// console.log(myWatchedSeries[1][2]) //5
// console.log(myWatchedSeries) //6



//Exercise 3 : The Temperature Converter

// let text;
// let temp  = prompt('Which temperature you want to conver enter celsius or fahrenheit')
//   switch(temp){
//     case "celsius" :
//       text = prompt('enter value');
//       alert(`${text} celsius is ${text * 9 / 5 + 32} fahrenheit`)
//       break;
//     case "fahrenheit":
//       text = prompt('enter value');
//       alert(`${text} fahrenheit is ${(text - 32) * 5 / 9} celsius`)
//       break;
//      default:
//       alert("I have never heard of that one!")
//   }

//Exercise 4 : Guess The Answers #1
let c;
let a = 34;
let b = 21;

//1
// Prediction: 34+21 = 55
// Actual: 55

a = 2;

//2
// Prediction:2 +21 =23
// Actual:23

//3 
//Prediction:undefined
//Actual:undefined



//Exercise 5 : Guess The Answers #2


typeof(15)
// Prediction:number
// Actual:number

typeof(5.5)
// Prediction:number
// Actual:number

typeof(NaN)
// Prediction:object
// Actual:"number"

typeof("hello")
// Prediction: String
// Actual: string

typeof(true)
// Prediction:boolean
// Actual:boolean

typeof(1 != 2)
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
// Prediction:"hamburgers" 
// Actual:"hamburgers" 

"hamburgers" - "s"
// Prediction: undefined
// Actual:Nan

"1" + "3"
// Prediction: 13
// Actual:13

"1" - "3"
// Prediction: -2
// Actual: -2

"johnny" + 5
// Prediction: "johnny5" 
// Actual:"johnny5" 

"johnny" - 5
// Prediction: Nan
// Actual: NaN

99 * "hello"
// Prediction:Nan
// Actual:NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual: false


//Exercise 6 : Guess The Answers #3

5 + "34"
// Prediction: 534
// Actual: 534

5 - "4"
// Prediction: 1
// Actual: 1

10 % 5
// Prediction: 0
// Actual: 0

5 % 10
// Prediction: 2
// Actual: 5

"Java" + "Script"
// Prediction:"JavaScript"
// Actual:"JavaScript"

" " + " "
// Prediction: ""
// Actual: ""

" " + 0
// Prediction: "0"
// Actual: "0"

true + true
// Prediction: 2
// Actual: 2 

true + false
// Prediction: 1
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: -1
// Actual: -1

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: NaN
// Actual: NaN
