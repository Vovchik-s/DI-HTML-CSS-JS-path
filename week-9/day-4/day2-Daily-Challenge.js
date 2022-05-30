                                              // 1st Challenge

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3])
.then(values => console.log(values))
.catch(error => console.log(error));
// output: Array [3, 42, "foo"]


                                               // 2nd Challenge

// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

let latitude1 = document.getElementById('latitude-1');
let longitude1 = document.getElementById('longitude-1');
let latitude2 = document.getElementById('latitude-2');
let longitude2 = document.getElementById('longitude-2');
let form = document.getElementById('form');

async function calculateSunrise(latitude, longitude) {
    return await fetch(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`)
        .then(response => response.json())
        .then(data => data.results.sunrise)
        .catch(error => console.log(error));
}

function showSunrise(sunrise) {
    let showSunrise = document.getElementById('showSunrise');
    let sunriseTime = document.createElement('p');
    sunriseTime.textContent = sunrise;
    showSunrise.appendChild(sunriseTime);
}


form.addEventListener('submit', async function(e) {
    e.preventDefault();
    let city1 = calculateSunrise(latitude1.value, longitude1.value);
    let city2 =  calculateSunrise(latitude2.value, longitude2.value);

    Promise.all([city1, city2]).then(sunrise => {
        showSunrise(sunrise[0]);
        showSunrise(sunrise[1]);
    })
});


// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved

// Try with Paris and New York

// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242