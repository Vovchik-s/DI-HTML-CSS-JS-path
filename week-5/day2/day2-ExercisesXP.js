// Exercise 1 : Change The Article

const heading = document.querySelector("h1");
// console.log(heading)

let article = document.querySelector('article')
let p = document.querySelectorAll('p')
article.removeChild(article.lastElementChild)


let heading2 = document.querySelector('h2')
heading2.addEventListener('click', () => {
    heading2.style.cssText = `
    background: red
    `
})

let heading3 = document.querySelector('h3')
heading3.addEventListener('click', () => {
    heading3.style.cssText = `
    display: none;
    `
})

let button = document.getElementById('button')
// console.log(button)

button.addEventListener('click', () => {
    for (let el of p) {
        el.style.fontWeight = 'bold';;
    }
})


heading.addEventListener('mouseover', () => {
    let fontSize = `${Math.floor(Math.random() * 100)}px`

    heading.style.fontSize = fontSize;
    console.log('You mouseover')
    setTimeout(() => {
        heading.style.fontSize = "";
    }, 500);
}, false);


heading2.addEventListener('mouseover', () => {

    heading2.style.cssText = `
            visibility: hidden;
            opacity: 0;
            `;
    console.log('You mouseover2')
    setTimeout(() => {
        heading2.style.cssText = `
                transition: 0.3s ease-in-out;
                transform: translateY(-4px);

                `;
    }, 500);
}, false);



// Exercise 2 : Work With Forms


const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
let submit = document.getElementById('submit');

let ul = document.getElementsByClassName('usersAnswer');

inputs.forEach(input => {
    // console.log(input.id);
    // console.log(input.name);


})
// console.log(form)


submit.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.querySelector('#fname').value;
    const lastName = document.querySelector('#lname').value;
    for(let input of inputs){
        if(input.value === ''){
            alert(`${input.id} is empty`)
        }else{
        let li = document.createElement('li');
        li.innerHTML = `${input.value}`;
        ul[0].appendChild(li)

        }
    }
    console.log(name)


})




// Exercise 3 : Transform The Sentence
// Instructions
// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>
let strongList = document.getElementById('strong')
let strong = document.getElementsByTagName('strong')
console.log(strong)

// In the JS file:

let allBoldItems = [];

function getBold_items() {
    if (strongList.getElementsByTagName('strong').length > 0) {
        for (el of strong) {
            allBoldItems += el.innerHTML.slice(",")
            console.log(allBoldItems)

            // allBoldItems.innerHTML = 
        }
    }
}

getBold_items(strongList)

function highlight() {
    for (el of strong) {
        el.style.color = 'blue'  // change to blue
    }
    return_normal()              // return to normal
}

highlight()

function return_normal() {      // NORMAL
    for (el of strong) {
        el.style.color = ''
    }
}



