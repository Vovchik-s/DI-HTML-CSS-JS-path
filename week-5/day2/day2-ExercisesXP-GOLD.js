// Exercise 1 : Select A Kind Of Music
// Instructions
// <select id="genres">
//   <option value="rock">Rock</option>
//   <option value="blues" selected>Blues</option>
// </select>


const select = document.getElementById('genres')
const selectedOption = select.value

function showValue(el) {  // with 'onchange' f-n in HTML el
    const value = el.value;
    console.log(value);
}

select.insertAdjacentHTML(  //  innerHTML doesn work 
    'afterbegin',
    `<option selected="selected" value="classic">Classic</option>`
    );




// Exercise 2: Delete Colors
// Instructions

let button = document.querySelectorAll("input[type='button']")[0];
const select2 = document.getElementById('colorSelect')
const selectedOption2 = select2.value




button.addEventListener('click', removecolor);

function removecolor() {
    for(let i = 0; i< select2.options.length; i++){
        if(select2.options[i].selected){           
        select2.removeChild(select2.options[i])
        }
    }
    // const value = el.value;
}

//https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/options


// Exercise 3 : Create A Shopping List
// Instructions
// For this exercise, you need to work on your js file.
// The one and only element on your HTML file should be:

{/* <div id="root"></div> */}
// In your js file:

let shoppingList= [];
const form = document.createElement('form');
form.insertAdjacentHTML("afterbegin", '<br><br><input type="text" id="input"></input><br><br><button id="AddItem">Add Item</button><button style="margin-left:45px" id="ClearAll">ClearAll</button>');
document.getElementById('root').appendChild(form)

const addBtn = document.getElementById('AddItem');
const clearBtn = document.getElementById('ClearAll');
const addInput = document.getElementById('input');

addBtn.addEventListener('click', addItem)
clearBtn.addEventListener('click', clearAll)


function addItem(e) {
    e.preventDefault()
    console.log(shoppingList.push(addInput.value.split(' ')))
    console.log(shoppingList)
}


function clearAll(e){
    e.preventDefault()
    shoppingList = [];
    console.log(shoppingList)
}


