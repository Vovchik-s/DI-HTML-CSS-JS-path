class Image {
    constructor({images , title}){
        this.title = title
        this.images = images
    }
    render(){
        const div = document.createElement('div');
        const newImage = document.createElement('img');
        newImage.src = this.images.fixed_height.url;
        newImage.alt = this.title;
        div.appendChild(newImage)

        document.getElementById('container').append(div)
    }
    }