const letter = document.getElementById('letter');
const display = document.getElementById('display');
const button = document.getElementById('button');


const reg = /[a-zA-Z]+/g;

button.addEventListener('click', checkForLetter);

function checkForLetter(){
    let newStr = letter.value.match(reg).toString();
    display.innerHTML = newStr.replace(/,/g, '');
}


