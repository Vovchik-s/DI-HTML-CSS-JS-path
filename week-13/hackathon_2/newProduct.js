const grid = global.querySelector(".article__grid");

class addNewProduct {
    constructor({name, description, price, file}) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.file = file;
    }

    render() {
        let newProduct = document.createElement("a");
        newProduct.classList.add("article__item");
        newProduct.innerHTML = `
            <div class="article__image" style="background-image: url('${this.file}')">
            </div>
            <div class="article__text">
                <div class="article__price">${this.price}</div>
                <div class="article__name">
                    ${this.name}
                </div>
                <div class="article__description">
                    ${this.description}
                </div>
            </div>
        `;
        grid.appendChild(newProduct);
    }

  

module.exports = {addNewProduct};

