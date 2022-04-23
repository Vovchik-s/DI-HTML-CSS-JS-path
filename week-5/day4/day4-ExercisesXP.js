
function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    console.log(elem)

    let pos = 0;
    clearInterval(id); // ОСТАНОВКА
    id = setInterval(frame, 5);
    console.log(id)
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            console.log(pos)
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

// Took a f-n from W3schools ))


const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);


for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);

}


function dragStart(){
this.className += ' hold';
console.log('drag on')
setTimeout(() => (this.className = 'invisible'), 0);
}


function dragEnd(){
console.log('drag off')

    this.className = 'fill'
}

function dragOver(e){
e.preventDefault();
}

function dragEnter(e){
e.preventDefault();
this.className += ' hovered';
}

function dragLeave(){
    this.className = 'empty';
}

function dragDrop(){
    this.className = 'empty';
    this.append(fill)
}