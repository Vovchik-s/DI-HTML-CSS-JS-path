const xhr = new XMLHttpRequest();

const request = 'hilarious'; // 'sun'
const rating = 'g';
const api = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

// My request equel to ...
xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${request}&rating=${rating}&api_key=${api}`) 

// Ask from the server
xhr.send();  
    
    
// When page is loaded
xhr.onload = () =>{
    const success =()=>{
        const answer = JSON.parse(xhr.response);
        const arr = answer.data;
        console.log(arr)
        arr.forEach(element => {
            let image = new Image(element)
            image.render();
        });
    } 
    const error =()=> alert('Error');
    xhr.status = 200 ? success() : error();
}
