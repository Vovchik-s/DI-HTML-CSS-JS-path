


function testLoop(userNumber, computerNumber) {
    let attempt = 1;
    
while(attempt <= 2){
    attempt++;
    console.log(attempt)

    if (userNumber > computerNumber) {
        userNumber = +(prompt("Your number is bigger then the computer’s, guess again"));

        console.log(userNumber, computerNumber)

    } else if (userNumber < computerNumber) {
        userNumber = +(prompt("Your number is smaller then the computer’s, guess again"));

        console.log(userNumber, computerNumber)

    }else{
        console.log(userNumber, computerNumber)
    }
}
    alert("out of chance !")
}



function checkNumber() {
    let warning;
    let computerNumber;
    let userNumber = +(prompt("enter number from 0 to 10"))

    if (isNaN(userNumber)) return warning = alert("Sorry Not a number, Goodbye")

    else if (userNumber < 0 || userNumber > 10) { return warning = alert("Sorry, it’s not a good number, Goodbye ") }

    else computerNumber = Math.round(Math.random() * 10);

    test(userNumber, computerNumber);

}


function test(userNumber, computerNumber) {

    let result;

    if (userNumber == computerNumber) {

        return result = alert("WINNER")

    } else {
        testLoop(userNumber, computerNumber)
    }


}




function playTheGame() {

    let ifWatToPlay = confirm("Do you really want to play the game");

    if (!ifWatToPlay) {
        return alert("No problem, Goodbye");
    } else {
        return checkNumber();
    }


}