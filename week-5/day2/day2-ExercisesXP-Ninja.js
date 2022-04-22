// Exercise 1 : Calculate The Tip
// Instructions
// Clone or Download this repository.
// Follow the instructions below :
// In this exercise you will calculate how much your tip would be after eating in a restaurant.

// First Part :
// Create a js file name main.js.

let billAmount = document.getElementById('billamt');
let serviceQuality = document.getElementById('serviceQual');
let numberOfPeople = document.getElementById('peopleamt');
let calculate = document.getElementById('calculate');
let totalTip = document.getElementById('totalTip');


calculate.addEventListener('click', calculateTip)
// console.log(calculate)

function billPrice(x) {
    return Number.parseFloat(x).toFixed(2);  // toFixed
}

function calculateTip(e) {
    let total = (billAmount.value * serviceQuality.value) / numberOfPeople.value;
    e.preventDefault()
    console.log(billPrice(total))

    if (isNaN(total) || total === 0) {
        alert('Must be some value !')
    }
    if (numberOfPeople === null) {
        numberOfPeople = 1;
    }

    totalTip.insertAdjacentHTML('afterbegin', `<sup>$</sup><span id="tip"></span>${billPrice(total)}
    <small id="each">each</small>`);
    totalTip.style.display = 'block';
}



// Exercise 2 : Validate The Email
// Instructions
// We will create a form that ask the user for their email. Then, using a function we will check the validity of the user’s input.

const email = document.getElementById('email');
const check = document.getElementById('check');
const pattern =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

check.addEventListener('click', validateForm)

function validateForm(e) {
e.preventDefault()
if(!email.value.match(pattern)){
    alert('Not valide email')
}else alert('it`s okay')
}
console.log(email)



// Exercise 3 : Get The User’s Geolocation Coordinates
// Instructions
// Hint/tip

let getLocation = document.getElementById('getLocation');
const currentLocation = document.getElementById('currentLocation');
const coordinate = document.getElementById('coordinate');


getLocation.addEventListener('click', whereAmI);

function whereAmI(){

    const succes = (position) =>{   // in arg all geoposition methods are stores, so in coords i find latitude and longitude !!!
        coordinate.innerHTML = `<br>Latitude: ${position.coords.latitude} <br>
    Longitude: ${position.coords.longitude}`
    }

    const error = () =>{
        coordinate.innerHTML = 'error'
    }
    navigator.geolocation.getCurrentPosition(succes, error) 
    //in case Allow geoposition 1-st arg. will be ex. 
    // If BLOCK geopos. - 2-nd 
}

//https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPosition/coords
