const music = document.querySelector('audio');
const buttons = document.getElementsByClassName('pomodoro__bcgr')




function onClickImage(btns) {               // CHANGE BACKGROUND
    let btnStyle = getComputedStyle(btns); // got styles of clicked component 
    let b = btnStyle.background; // b - is background of specific comp.

    console.log(btns.dataset.name)

    music.src = `./src/assets/Sounds/${btns.dataset.name}.wav` 
    //change music with dataSEt !

    choseSound(); // play music  onclick

    document.getElementsByClassName('pomodoro')[0].style.background = b;
    //give to whole container the background of cliked component

}


let isPlaing = false;  // check for playing


function playSound(){  
    isPlaing = true;
    music.play();
}

function pauseSound(){
    isPlaing = false;
    music.pause();
}

function choseSound() {
    isPlaing ? pauseSound(): playSound();
}






//https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
//https://www.w3schools.com/tags/ref_av_dom.asp
//https://www.w3schools.com/tags/tag_audio.asp
//https://www.w3schools.com/jsref/prop_audio_loop.asp







// const sounds = [
//     {
//         name: 'beach'
//     },
//     {
//         name: 'fireplace'
//     },
//     {
//         name: 'birds'
//     },
//     {
//         name: 'rain'
//     }
// ]


// function loadSound(sound) {
//     music.src = `./src/assets/Sounds/${sound.name}.wav`;
    
// }


// for(let button of buttons){
//     button.addEventListener('click', choseSound)
//     console.log(button)

            // switch(button){
            //     case 
            // }
            // if(button[0]){
            // // music.src = `./src/assets/Sounds/beach.wav`
            // console.log(button[0])
            // }else if(button[1]){
            // console.log(button[1])
                
            // }
        // }


// //Previous Sound
// function prevSound() {
//     soundIndex--;
//     if(soundIndex < 0) {
//         soundIndex = 0;
//     }
//     loadSound(sounds[soundIndex]);
//     playSound()
// }