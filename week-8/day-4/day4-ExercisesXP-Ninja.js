class Image {
    constructor({ images, title }) {
        this.title = title
        this.images = images
    }
    render() {
        const div = document.createElement('div');
        const newImage = document.createElement('img');
        newImage.src = this.images.fixed_height.url;
        newImage.alt = this.title;
        div.appendChild(newImage)

        document.getElementById('container').append(div)
    }
}


const input = document.getElementById('search')
const find = document.getElementById('find')
const remove = document.getElementById('delete')



find.addEventListener('click', searchGif)
remove.addEventListener('click', removeValue)

function searchGif(e) {
    e.preventDefault()

    const xhr = new XMLHttpRequest();

    const rating = 'g';
    const api = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
    let request = input.value;

    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${request}&rating=${rating}&api_key=${api}`)

    xhr.send();

    xhr.onload = () => {
        const success = () => {
            const answer = JSON.parse(xhr.response);
            const arr = answer.data;
            console.log(arr)
            arr.forEach(element => {
                let image = new Image(element)
                image.render();
            });
        }
        const error = () => alert('Error');
        xhr.status = 200 ? success() : error();
    }
}

function removeValue(){
    return input.value = "";
}
