// Convert the below promise into async await:  (use async await)  (use try catch)  (use await)       

async function fetchData() {
    try{
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    return await response.json();
    }catch(err){
        console.log('ooooooops' , err);
    }
}

fetchData().then(data => console.log(data));




// Expected Output: calling => resolved

// output calling  resolved



// Exercise 2: Analyze
// Instructions
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
// Analyse the code provided above before executing it - what will be the outcome?