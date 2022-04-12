let userNumber = prompt('Enter some number');
let checkNum = /^[(,)(0-9)]*[0-9]+$/;

while(userNumber.length > 2 || !userNumber.match(checkNum)){
    userNumber = prompt('Enter only one number witout letters')
}
// let arrayNumber = userNumber.split(' ')
while(userNumber > 1){
    console.log(`${userNumber} bottles of beer on the wall`);
    console.log(`${userNumber} bottles of beer`);
    console.log( 'Take 1 down, pass them around');
    userNumber--

    if(userNumber == 1){
        console.log(`${userNumber} bottle of beer on the wall`);
        console.log(`${userNumber} bottle of beer`);
        console.log('Take 1 down, pass it around');

}
}console.log('no bottle of beer on the wall');


