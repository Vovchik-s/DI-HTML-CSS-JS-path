
// Exercise 1 : Information
// Instructions
// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

function infoAboutMe() {
    console.log('Hi my name is Vladimir, i`m 26 years old and i love to skate')
}

infoAboutMe()

// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`Hi my name is ${personName} im ${personAge} and my fav color is ${personFavoriteColor}`)
}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")


// Exercise 2 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.

function calculateTip() {
    let bill = Number(prompt(' amount of the bill : '))
    if (bill < 50) {
        bill += (bill * 0.2);
    } else if (bill > 49 || bill < 201) {
        console.log(bill * 0.15)
        bill += (bill * 0.15);
    } else {
        bill += (bill * 0.1);
    }
    console.log(`your total bill is ${bill}$`)
}

calculateTip()

// Inside the function, ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.


// Exercise 3 : Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.

let sum = 0;
function isDivisible() {
    for (let i = 0; i <= 500; i++) {
        if (i % 23 == 0) console.log(i), sum += i
    }
    console.log(sum)
}
isDivisible()


// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313


// Bonus: Add a parameter divisor to the function.

// isDivisible(divisor)

let sum = 0;
function isDivisible(divisor) {
    for (let i = 0; i <= 500; i++) {
        if (i % divisor == 0) console.log(i), sum += i
    }
    console.log(sum)
}
isDivisible(5)

// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum


// Exercise 4 : Shopping List
// Instructions
let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

let stock1 = Object.entries(stock);

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}
let prices1 = Object.entries(prices);

const shoppingList = ['banana', 'orange', 'apple'];



const stockKeys = Object.keys(stock);
const stockValue = Object.values(stock);

const priceKey = Object.keys(prices);
const priceValue = Object.values(prices);


let total = 0;

function myBill(list) {
    for (key in list) {
        if (list[key] == priceKey[key]) {
            total += priceValue[key];
        }
    }
    return total;
}


console.log(myBill(shoppingList))




// Exercise 5 : What’s In My Wallet ?
// Instructions

function changeEnough(itemPrice, [quarters, dimes, nickel, penny]) {
    let total;
    total = (0.25 * quarters) + (0.10 * dimes) + (0.05 * nickel) + (0.01 * penny);

    if (itemPrice > total) return false;
    else return true;

}

console.log(changeEnough(4, [25, 20, 5, 0]))

// Exercise 6 : Vacations Costs

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

function hotelCost() {
    let ask = prompt("number of nights you would like to stay :")
    let total;
    const night = 140;


    if (isNaN(ask)) {
        return ask = prompt("Try again :")
    } else {
        total = ask * night;
    }
    return total;
}

// hotelCost()



// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

function planeRideCost() {
    let destination = prompt("where are you going :");
    let total;
    let matches = destination.match(/\d+/g);

    if (matches != null) {
        alert('Please type only letters');
        destination = prompt("try again :")
    }

    switch (destination) {
        case 'London':
            total = 183;
            break;
        case 'Paris':
            total = 220;
            break;
        default:
            total = 300;
    }

    return total;

}

// planeRideCost()




// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

function rentalCarCost() {
    let ask = +(prompt("You want to rent a car for : (number of days)"))
    let total;

    if (isNaN(ask)) {
        ask = +(prompt("type only numbers"))
    } else if (ask > 10) {
        total = ask * 38;
    } else {
        total = ask * 40;
    }
    return total;
}

// rentalCarCost()
let rentCar = rentalCarCost();
let ticket = planeRideCost()
let hotel = hotelCost();




// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

function totalVacationCost() {
    console.log(ticket + rentCar + hotel);
}

totalVacationCost();


  // Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.


