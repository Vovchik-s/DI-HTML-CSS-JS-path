// Exercise 1

const divId = document.querySelector('#navBar');
const list = document.querySelector('ul');
const text = document.createTextNode("Logout");
const newLi = document.createElement('li')

const firsLi = list.firstElementChild
const lastLi = list.lastElementChild


newLi.append(text);
list.appendChild(newLi)

divId.setAttribute('id', 'socialNetworkNavigation');

// Exercise 2

const listsUl = document.querySelectorAll('.list');
const firstUl = document.querySelectorAll('li');
const lastUl = listsUl.lastElementChild;

listsUl[0].lastElementChild.textContent = "Richard"
listsUl[1].lastElementChild.textContent = "Richard"
firstUl[8].remove()
console.log(firstUl)
// console.log()

listsUl.forEach(ul => {
    ul.firstElementChild.textContent = "Vladimir";
    ul.append(newLi) ;
    ul.classList.add('student_list'); 
    
})

console.log(listsUl);


// Exercise 3
// Do not display the first name (John) in the list.
// Add a border to the second name (Pete).
// Change the font size of the whole body.
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

let div = document.querySelectorAll('div')[2];
let newStyle = div.style.cssText = `
background-color: blue;
padding: 10px;
`

if(newStyle) alert('Hello x and y')


firstUl[11].textContent = ""
firstUl[12].style.border = "1px solid black"

document.querySelector('body').style.fontSize = '20px'

console.log(div);
