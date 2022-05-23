const form = document.forms[0];
const url = window.location.href
const submit = form.querySelector('button[type="submit"]')

const paragraph = document.createElement('p');


submit.addEventListener('click', (e)=> {
    e.preventDefault();

    const toJson = JSON.stringify(Object.fromEntries(url.split('?')[1].split('&').map(arr=> arr.split('='))))

    // console.log(JSON.stringify(toJson))

    paragraph.textContent = toJson
    form.append(paragraph)

})
