const form = document.forms[0];

const submit = form.querySelector('button[type="submit"]')
const firstName = form.querySelector('input[name="firstname"]');
const lastName = form.querySelector('input[name="lastname"]');


const paragraph = document.createElement('p');

submit.addEventListener('click', ()=> { paragraph.textContent = firstName.value + " " + lastName.value})
form.append(paragraph)

