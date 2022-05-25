
const weatherDisplay = document.getElementById("weather-display"); // Empty div
const weatherSearch = document.getElementById("weather-search");  // input
const weatherForm = document.getElementById('weather-form');  //form
const addCityBtn = document.getElementById('addTown'); //button

let weatherResult = [];


class Weather {
    constructor({ name, weather, main }) {
        this.name = name,
            this.weather = weather,
            this.main = main
    }
    render() {
        this.container = document.createElement("div"),
            this.innerContainer = document.createElement("div"),
            this.weatherImage = document.createElement("img"),
            this.weatherName = document.createElement("h3"),
            this.weatherTemp = document.createElement("h5"),
            this.weatherDescription = document.createElement("h6"),

            ////////////////////////////////////////////////
            this.container.classList.add("weather"),
            this.innerContainer.classList.add("weather-box"),
            this.weatherImage.src = `http://openweathermap.org/img/wn/${this.weather[0].icon}@2x.png`,
            this.weatherName.textContent = this.name,
            this.weatherTemp.textContent = parseInt(this.main.temp - 273.15),
            this.weatherDescription.textContent = this.weather[0].description,
            ///////////////////////////////////////////////
            this.innerContainer.appendChild(this.weatherImage),
            this.innerContainer.appendChild(this.weatherName),
            this.innerContainer.appendChild(this.weatherTemp),
            this.innerContainer.appendChild(this.weatherDescription),
            this.container.appendChild(this.innerContainer),
            weatherDisplay.append(this.container)

    }

}


addCityBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const xhr = new XMLHttpRequest();
    const request = weatherSearch.value;
    xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${request}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`)


    xhr.onload = () => {
        const success = () => {
            const answer = JSON.parse(xhr.response);
            weatherResult.push(answer)
            const container = new Weather(answer);
            container.render()
        }
        const error = () => console.log('Error');
        xhr.status = 200 ? success() : error();
    }

    xhr.send();
})


// Toggle

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');


function convertToF(celsius) {
    return parseInt(celsius * 9 / 5 + 32);
}


function convertToC(fahrenheit) {
    return parseInt((fahrenheit - 32) * 5 / 9);
}



function switchTemp(event) {
    let temperature = document.querySelectorAll('h5');

    if (event.target.checked) {

        [...temperature].forEach(temp => {
            temp.textContent = convertToF(temp.textContent)
        })



        toggleIcon.children[0].textContent = 'fahrenheit';
        toggleIcon.children[1].classList.replace('fa-temperature-empty', 'fa-temperature-high');

    } else {

        [...temperature].forEach(temp => {
            temp.textContent = convertToC(temp.textContent)
        })
        toggleIcon.children[0].textContent = 'celcius';
        toggleIcon.children[1].classList.replace('fa-temperature-high', 'fa-temperature-empty');
    }
}

toggleSwitch.addEventListener('change', switchTemp);