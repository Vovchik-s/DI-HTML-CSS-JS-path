// Exercise 1 : Faker Module

const users = [
    {},
    {},
    {}
]


// The package file explorer is only available for Teams at the moment.

// We may support exploring this package in the future. Check back soon.

// Exercise 2 : Regular Expression #1


const regExp = /(\d+)/g;

function returnNumbers(str){
return str.match(regExp).join("");
}

// console.log(returnNumbers('k5k3q2g5z6x9bn') )

// Exercise 3 : Regular Expression #2

function validateName(){
    let name = prompt("Enter your full name")
    let regExp2 = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    if(name.match(regExp2)){
        console.log("Valid name")
    }else{
        console.log('Not valid name')
    }
}

validateName()

