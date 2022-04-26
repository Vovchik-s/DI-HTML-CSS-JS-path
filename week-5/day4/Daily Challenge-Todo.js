const inputTodo = document.getElementById('input-todo'); // INPUT
const button = document.getElementById('button');    // ADD BUTTON
const clearButton = document.getElementById('clear');
const list = document.getElementById('list');  //
let newTask = document.querySelectorAll('task input');




button.addEventListener('click', addTask);




function addTask(e) {
    e.preventDefault();


    if (!inputTodo.value) {
        alert('please enter task');
    } else {
        let newTask = document.createElement('p');
        newTask.classList.add('task')
        //     newTask.innerHTML = `
        // <input class="newTask" onchange="Check(this)" type="checkbox"><label name ="${inputTodo.value}" for="newTask">${inputTodo.value}</label>`
        newTask.innerText = inputTodo.value;
        list.insertAdjacentElement("afterbegin", newTask)
        inputTodo.value = '';
        newTask.addEventListener('click', lineThrough)
        newTask.addEventListener('dblclick', deleteTask)
        clearButton.addEventListener('click', deleteTask)

        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        newTask.style.color = "#" + randomColor;

        function lineThrough() {
            newTask.style.textDecoration = "line-through";
        }
        function deleteTask() {
            newTask.remove();
        }

    }
}



// function Check(value) {
//     let labels = document.querySelectorAll('label')
//     for (const label of labels) {
//         console.log(label)
//         if (value.checked) {
//             labels[0].style.textDecoration = 'line-through'
//         } else {
//             labels[0].style.textDecoration = ''
//         }
//     }

// };

//https://www.delftstack.com/howto/javascript/javascript-checkbox-onchange/