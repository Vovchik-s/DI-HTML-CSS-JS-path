// // Exercise 1 : List Of People
// // Instructions
// // Part I - Review About Arrays


let people = ["Greg", "Mary", "Devon", "James"];

people.splice(people.indexOf("Greg"), 1); //1

people.splice(people.indexOf("James"), 1, 'Jason') //2

people.push('Vladimir') //3

let mary = people.indexOf('Mary');//4

let newPeople = people.slice(1, 4)//5

let last = people.pop()//6

console.log(last)


// // Part II - Loops
// // Using a loop, iterate through the people array and console.log each person.


for (let i = 0; i < newPeople.length; i++) {
    console.log(newPeople[i]);

    if (newPeople[i] === "Jason")
        break;
}


// // Exercise 2 : Your Favorite Colors


function printColor(str, ...keys) {
    return (function (...values) {
        let result = [str[0]];
        keys.forEach(function (key, i) {
            let color = values[key];
            return result.push(color, str[i + 1])
        })
        return result.join(" ");
    })
}

let favColor = printColor`My #1 choice is ${0}”, “My #2 choice is ${1},“My #3 choice is ${2} ,“My #4 choice is ${3} ,“My #5 choice is ${4}`;

console.log(favColor('green', 'yellow', 'blue', 'grey', 'white'))





// // Exercise 3 : Repeat The Question


function Bigger() {
    let num = prompt('Say number :');
    if (num < 10) {
        return Bigger();
    } else {
        return console.log(num)
    }
}

Bigger()

// //OR let 
// // num = prompt("Say number")
// // if (num < 10) {
// //     prompt("Say number")
// // } else {
// //     console.log(num);
// // }



// // Exercise 4 : Building Management


let building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}

const floorsNum = () => console.log(building.numberOfFloors);

const appNum = () => console.log(building.numberOfAptByFloor.firstFloor + ", " + building.numberOfAptByFloor.thirdFloor);

const nameNum = () => {
    console.log(building.nameOfTenants[1] + " : " + building.numberOfRoomsAndRent.dan[0]);
}
nameNum()

let rentSum = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
let danRent = building.numberOfRoomsAndRent.dan[1];

if (rentSum > danRent) {
    danRent += 200;
}
console.log(danRent)



// // Exercise 5 : Family


const family = {
    dad: "David",
    mom: "Guetta",
}

Object.entries(family).forEach(([key, value]) => console.log(`${key} ${value}`));




// // Exercise 6


let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

Object.entries(details).forEach(([key, value]) => console.log((key + " " + value)));


// // Exercise 7 : Secret Group


let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let secretName = "";

names.sort().forEach((el) => secretName += el[0]);

console.log(secretName)


// Exercise 1 : Divisible By Three

let numbers = [123, 8409, 100053, 333333333, 7]

numbers.forEach((el) => {
    if (el % 3 == 0) {
        console.log('true')
    } else {
        console.log('false')
    }
});

// Exercise 2 : Attendance
// Instructions
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}


const about = Object.entries(guestList).forEach(([name, country])=> console.log(`${name} frome ${country}`))
console.log(about)


// Exercise 3 : Playing With Numbers

let age = [20,5,12,43,98,55];
let sum;
age.reduce((prevNum, currNum)=> sum = prevNum + currNum);
let maxNum = Math.max(...age)
console.log(maxNum)

// 1. Console.log the sum of all the numbers in the age array.
// 2. Console.log the highest age in the array.