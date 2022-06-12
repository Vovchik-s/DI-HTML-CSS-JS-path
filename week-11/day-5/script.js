const form = document.getElementById('form-todo');
const name1 = document.getElementById('name');
const description = document.getElementById('description');
const startDate = document.getElementById('form--startDate');
const endDate = document.getElementById('form--endDate');
const button = document.getElementById('submit');


const displayForm = document.getElementById('display-form');
const displayName = document.getElementById('name-display');
const displayDescription = document.getElementById('description-display');
const timeLeftDisplay = document.getElementById('timeLeft-display');

let isCompleted = false;
let id = 0;
let storedTask = [];



button.addEventListener('click', addTask);




function addTask(e) {
    e.preventDefault();

    const now = new Date(startDate.value);
    const then = new Date(endDate.value);
    const diff = then - now;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;


    const todo = {
        name1: `Task name : ${name1.value.toUpperCase()}`,
        description: `Description : ${description.value.toLowerCase()}`,
        timeLeftDisplay: `${d} days, ${h} hours, ${m} minutes, ${s} seconds left`,
        isCompleted: isCompleted
    }


    createTask(todo);

}

function createTask(task) {
    const form = document.createElement('form');
    form.setAttribute('id', 'form-todo');
    form.setAttribute('class', 'form-todo');

    const name = document.createElement('h4');
    name.setAttribute('class', 'name');
    name.textContent = task.name1;

    const description = document.createElement('h4');
    description.setAttribute('class', 'description');
    description.textContent = task.description;

    const button = document.createElement('button');
    button.setAttribute('class', 'button');
    button.textContent = 'Edit';

    const timeLeftDisplay = document.createElement('h4');
    timeLeftDisplay.setAttribute('class', 'timeLeftDisplay');
    timeLeftDisplay.textContent = task.timeLeftDisplay;

    let isCompleted = document.createElement('input');
    isCompleted.setAttribute('type', 'radio');
    isCompleted.textContent = task.isCompleted; 

    form.appendChild(name);
    form.appendChild(description);
    form.appendChild(timeLeftDisplay);
    form.appendChild(isCompleted);

    displayForm.appendChild(form);

    storedTask.push(task);
    console.log(storedTask);

    isCompleted.addEventListener('click', () => {
        if (isCompleted.checked) {
            isCompleted = true;
            removeTask(form);
        } else {
            isCompleted = false;
        }
    }
    )


    // SAVE in local storage
    localStorage.setItem('storedTask', JSON.stringify(storedTask));

    const currentTask = localStorage.getItem('storedTask'); 

    if(currentTask) {

        storedTask = JSON.parse(currentTask);
    }

    // window.open(
    //     "to-do-display.html", "_blank");
}


// REMOVE task

function removeTask(task) {
    displayForm.removeChild(task);
    storedTask.pop();
    console.log(storedTask)
}

// function editDescription(task) {
//     const description = document.createElement('input');
//     description.setAttribute('type', 'text');
//     description.setAttribute('class', 'description');
//     description.setAttribute('placeholder', 'Add description ');



//     description.textContent = task.description;
//     displayForm.appendChild(description);
// }


// LOADING 

function createOnload() {
    const currentTask = localStorage.getItem('storedTask');

    window.localStorage.clear();

    if(currentTask) {
        storedTask = JSON.parse(currentTask);

        storedTask.forEach(task => {
            createTask(task);
        })
    }
}

createOnload();

