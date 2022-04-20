                            ///BUTTONS\\\
let buttonPlay = document.getElementById('buttonPlay'); //play
let buttonPause = document.getElementById('buttonPause'); //pause
let buttonRest = document.getElementById('buttonRest'); //rest
let buttonReset = document.getElementById('buttonReset'); // reset

                         ///TIME\\\
let timeLeftDOM = document.getElementById('timeLeft'); //24:59 ...
let sessionLength = document.getElementById('sessionLength');  //25
                        /// INC | DEC \\\
let decrement = document.getElementById('sessionDecrement');// -
let increment = document.getElementById('sessionIncrement'); // +



// let timeEnd = new Audio('');
// let timestart = new Audio('');

let currentMinutes = sessionLength.innerHTML;
let minutes = currentMinutes;  //  total time = to time i set
let time = minutes * 60;
let isClicked = false; // Check if i clicked play



buttonPlay.addEventListener('click', startTimer);
buttonPause.addEventListener('click', stopTimer);
buttonReset.addEventListener('click', resetTimer);
buttonRest.addEventListener('click', startRest);


decrement.addEventListener('click', () => {
    handleLengthButton(parseInt(sessionLength.innerText), sessionLength, false, false);
});

increment.addEventListener('click', () => {
    handleLengthButton(parseInt(sessionLength.innerText), sessionLength, true, false);
});




function startTimer() {
    if (!isClicked) {
        isClicked = setInterval(timer, 1000);
        buttonPlay.style.display = 'none';
        buttonPause.style.display = 'block';
    }
    // console.log(isClicked)
}



function stopTimer() {
    if (isClicked) {
        clearInterval(isClicked);
        isClicked = false;
        buttonPlay.style.display = 'block';
        buttonPause.style.display = 'none';
    }
}

function resetTimer() {

    sessionLength.innerText = 25;
    displayMinutes = 25;
    displaySeconds = '00';
    time = minutes * 60;

    timeLeftDOM.innerHTML = `${displayMinutes}:${displaySeconds}`

    stopTimer()
}

function startRest() {
    if (!isClicked) {
        isClicked = setInterval(timer, 1000);
        buttonRest.style.display = 'none';
        buttonPause.style.display = 'block';
    }else{
        buttonRest.style.display = 'block';
        buttonPause.style.display = 'none';
        stopTimer()
    }
    // console.log(isClicked)
}




function timer() {

    // if (time <= 0) {   // TIMER END
    // stopTimer()  
    // displayMinutes = 5;
    // displaySeconds = '00';
    // time = minutes * 60;

    // timeLeftDOM.innerHTML = `${displayMinutes}:${displaySeconds}`

    // buttonPlay.style.display = 'none';
    // buttonRest.style.display = 'block';
    // }

    let displayMinutes = Math.floor(time / 60);
    let displaySeconds = time % 60;

    displaySeconds = displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds;


    timeLeftDOM.innerHTML = `${displayMinutes}:${displaySeconds}`

    time--;


}





function handleLengthButton(lengthValue, htmlElement, increment) {
    let result = 0;
    if (increment) {
        result = ++lengthValue; // 25 + 1
        htmlElement.innerText = result;
    } else {
        if (lengthValue != 1) {  // not less that 1 
            result = --lengthValue; // 25 - 1
            htmlElement.innerText = result;
        }
    }
    let resultSeconds = result * 60;
    time = resultSeconds;   // Total time = result *60
}


