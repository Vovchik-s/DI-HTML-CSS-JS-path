let planets = [
    {
        name:'Mercury',
        color: 'yellow'
    },
    {
        name:'Venus',
        color: 'purple'
    },
    {
        name:'Earth',
        color: 'blue'
    },
    {
        name:'Mars',
        color: 'white'
    },
    {
        name:'Jupiter',
        color: 'green'
    },
    {
        name:'Saturn',
        color: 'red'
    },
    {
        name: 'Uranus',
        color: 'blue'
    },
    {
        name:'Neptune',
        color: 'yellow'
    }
];


let section = document.querySelector('.listPlanets');


let planetDiv = planets.forEach(planet => {
    let divPlanet = document.createElement('div');
    divPlanet.setAttribute('class', 'planet');

    divPlanet.style.cssText = `
    background-color: ${planet.color};
    margin-top: 5%;
    margin-left: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    `
    divPlanet.innerHTML = planet.name
    
    section.append(divPlanet)
})
