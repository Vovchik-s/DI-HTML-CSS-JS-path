// Exercise 1 : Find The Sum

const sum = (a, b) => a + b;
console.log(sum(5, 3));



// Exercise 2 : Kg And Grams


function totalWeight1(kg) {
    return kg * 1000;
}


// difference is a f-n scope vs variable scope


const totalWeight2 = function (kg) {
    return kg * 1000;
}

const totalWeight3 = kg => kg * 1000;

console.log(totalWeight2(2.45))



// Exercise 3 : Fortune Teller

// (function(number, name, location, job){
// document.write(`You will be a ${job} in ${location}, and married to ${name} with ${number} kids.`)
// }(3, 'Annet', 'New-York', 'soft-developer'))



// Exercise 4 
const profile = document.getElementById('profile');
const userName = document.getElementById('name');
const button = document.getElementById('enter');
console.log(button)


function displayUser(name) {

    name = "Johny"
    let user = document.createElement('div');
    let image = document.createElement('img');
    image.style.cssText = `
    width: 100px;
    height: 100px;
    display: block;
    `

    image.src = 'https://source.unsplash.com/random';

    console.log('clicked')
    user.appendChild(image);
    userName.innerHTML = name;
    profile.appendChild(user);
}



button.addEventListener('click', displayUser)

// Exercise 5 : Juice Bar

const juice = document.getElementById('juice');

function makeJuice(size) {
    let ingredients = [];

    function addIngredients(el1, el2, el3) {
    let text = `The client wants a ${size} juice, containing ${el1}, ${el2}, ${el3}`
    juice.textContent = text;
    ingredients.push(el1,el2,el3)
    }

    console.log(ingredients)
    addIngredients('Garlic', "Salat", 'Salsa')
}

makeJuice('big')