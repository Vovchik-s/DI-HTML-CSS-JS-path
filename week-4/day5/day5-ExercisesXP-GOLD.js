// Exercise 1 : My Book List
// Instructions
// The point of this challenge is to display a list of two books on your browser.
// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
const allBooks = [
    {
        title: '1984',
        author:'George Orwell',
        image:'./blank.png',
        alreadyRead: true,
    },
    {
        title: 'Anna K',
        author: 'Lev Tolstoy',
        image: './blank.png',
        alreadyRead: true,
    },
    {
        title: '1984',
        author:'George Orwell',
        image:'./blank.png',
        alreadyRead: true,
    },
    {
        title: '1984',
        author:'George Orwell',
        image:'./blank.png',
        alreadyRead: true,
    }
]



let newDiv = document.createElement('div')

document.querySelector('body').appendChild(newDiv)
newDiv.classList.add('listBook')

let newTable = document.createElement('table')
let thead = document.createElement('thead')
let tbody = document.createElement('tbody')
let heading1 = document.createElement('th')
let heading2 = document.createElement('th')
let row1 = document.createElement('tr')




heading1.innerHTML = "Title"
heading2.innerHTML = "author"

row1.appendChild(heading1)
row1.appendChild(heading2)

thead.appendChild(row1)


newTable.appendChild(thead)
newTable.appendChild(tbody)
newDiv.append(newTable);

newDiv.style.marginTop = '50px'

for(let obj of allBooks){
    
    const tr = document.createElement('tr')


    const data = `

    <td>${obj.title}</td>
    <td>${obj.author}</td>
    `;

    const th = `
    <th>${obj.title}</th>
    <th>${obj.title}</th>
    `

tr.innerHTML = data;

// thead.appendChild(th)
tbody.appendChild(tr)
}




