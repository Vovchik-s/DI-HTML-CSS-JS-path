const body = document.querySelector('body');
const container = document.getElementById("container");
const form = document.getElementById('star-wars-form');
const loading = document.getElementById('loading');
const findSomeone = document.getElementById('findSomeone');

// body.addEventListener('onload', getPerson());

class starWars {
    constructor({ name, height, gender, birth_year, homeworld }) {
        this.name = name,
            this.height = height,
            this.gender = gender,
            this.birth_year = birth_year,
            this.homeworld = homeworld
    }
    render() {
            this.personName = document.createElement("h3"),
            this.personHeight = document.createElement("h5"),
            this.personGender = document.createElement("h5"),
            this.personBirth = document.createElement("h5"),
            this.personHomeworld = document.createElement("h5"),
            ////////////////////////////////////////////////
            this.personName.textContent = this.name,
            this.personHeight.textContent = this.height,
            this.personGender.textContent = this.gender,
            this.personBirth.textContent = this.birth_year,
            this.personHomeworld.textContent = this.homeworld,
            ///////////////////////////////////////////////
            form.appendChild(this.personName),
            form.appendChild(this.personHeight),
            form.appendChild(this.personGender),
            form.appendChild(this.personBirth),
            form.appendChild(this.personHomeworld),
            // container.innerHTML = form,
            container.append(form),
            body.append(container)
    }
}

// Loading 

setTimeout(() => {
    loading.remove();
    container.style.display = 'flex';
}, 1000)




findSomeone.addEventListener('click', getPerson)


async function getPerson() {
    return await fetch(`https://swapi.tech/api/people/${Math.floor(Math.random() * 50)}`)
        .then(response => response.json())
        .then(data => data.result.properties)
        .then(properties => {
            console.log(properties)
            if(properties.name === undefined) {
                const person = new starWars(properties);
                person.render();
            }else{
                form.innerHTML = '';
                person = new starWars(properties);
                person.render();
            }

        })
}

