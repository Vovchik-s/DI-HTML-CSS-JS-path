const music = document.querySelector('audio');
const drums = document.getElementsByClassName('drum')


const onClick = drum => {              
    music.src = `./sounds/${drum.dataset.name}.wav` 
    music.play(); 
}
