const next = document.getElementById('pokemon-button--next');
const previous = document.getElementById('pokemon-button--previous');
const choose = document.getElementById('choose');
const container = document.getElementById("container");
const body = document.querySelector('body');
const display = document.getElementById('pokemon-display');
const pokemonImage = document.getElementById('pokemon-image');
let currentNum = 0;


class Pokedex {
    constructor({ sprites, name, id, height, weight, types }) {
        this.sprites = sprites,
        this.name = name,
            this.id = id,
            this.height = height,
            this.weight = weight,
            this.types = types
    }
    render() {
        this.personImage = document.createElement("img"),
        this.personName = document.createElement("h3"),
            this.personId = document.createElement("h5"),
            this.personHeight = document.createElement("h5"),
            this.personWeight = document.createElement("h5"),
            this.personType = document.createElement("h5"),
            ////////////////////////////////////////////////
            this.personImage.src = this.sprites.other.dream_world.front_default,
            this.personName.textContent = "NAME : " + this.name,
            this.personId.textContent = "ID : " + this.id,
            this.personHeight.textContent = "HEIGHT : " + this.height,
            this.personWeight.textContent = "WEIGHT : " + this.weight,
            this.personType.textContent = "TYPE : " + this.types[0].type.name,
            ///////////////////////////////////////////////
            pokemonImage.appendChild(this.personImage),
            display.appendChild(this.personName),
            display.appendChild(this.personId),
            display.appendChild(this.personHeight),
            display.appendChild(this.personWeight),
            display.appendChild(this.personType)

    }
}

setTimeout(() => {
    loading.remove();
    container.style.display = 'flex';
}, 1000)



async function getPokemon() {
    const randomNum = Math.ceil(Math.random() * 89);
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
        .then(response => response.json())
        .then(properties => {
            currentNum = randomNum;
            console.log(currentNum)
            console.log(properties)
            if (properties.name === undefined) {
                const person = new Pokedex(properties);
                person.render();

            } else {
                pokemonImage.innerHTML = '';
                display.innerHTML = '';
                person = new Pokedex(properties);
                person.render();
            }
        })
        .catch(() => {
            pokemonImage.innerHTML = '404';
            display.innerHTML = '';
            const error = document.createElement('h1');
            error.style.color = 'red';
            error.innerHTML = 'NOT FOUND';
            display.appendChild(error)
        })
}

choose.addEventListener('click', getPokemon)
next.addEventListener('click', nextPokemon)
previous.addEventListener('click', previousPokemon)


// choose.addEventListener('click', getPokemon1)


async function previousPokemon() {
    currentNum--;
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${currentNum - 1}`)
        .then(response => response.json())
        .then(properties => {
            if (properties.name === undefined) {
                const person = new Pokedex(properties);
                person.render();
            } else {
                pokemonImage.innerHTML = '';
                display.innerHTML = '';
                person = new Pokedex(properties);
                person.render();
            }
        })
        .catch(() => {
            display.innerHTML = '';
            const error = document.createElement('h1');
            error.style.color = 'red';
            error.innerHTML = 'NOT FOUND';
            display.appendChild(error)
        })
}

async function nextPokemon() {
    currentNum++;
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${currentNum + 1}`)
        .then(response => response.json())
        .then(properties => {
            if (properties.name === undefined) {
                const person = new Pokedex(properties);
                person.render();
            } else {
                pokemonImage.innerHTML = '';
                display.innerHTML = '';
                person = new Pokedex(properties);
                person.render();
            }
        })
        .catch(() => {
            display.innerHTML = '';
            const error = document.createElement('h1');
            error.style.color = 'red';
            error.innerHTML = 'NOT FOUND';
            display.appendChild(error)
        })
}