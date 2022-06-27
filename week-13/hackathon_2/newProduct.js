const grid = global.querySelector(".article__grid");

// select div in node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
const _objectWithoutProperties = (source, excluded) => {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }

    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }

    return target;
}



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

    // addProduct() {
    //         this.item = document.createElement("a"),
    //         this.image = document.createElement("div"),
    //         this.text = document.createElement("div"),
    //         this.price = document.createElement("div"),
    //         this.name = document.createElement("div"),
    //         this.description = document.createElement("div"),
    //         ////////////////////////////////////////////////
    //         this.item.classList.add("article__item"),
    //         this.image.classList.add("article__image"),
    //         this.text.classList.add("article__text"),
    //         this.price.classList.add("article__price"),
    //         this.name.classList.add("article__name"),
    //         this.description.classList.add("article__description"),


    //         this.robotImage.src = this.image,
    //         this.robotName.textContent = this.name,
    //         this.robotAddress.textContent = this.email,
    //         ///////////////////////////////////////////////
    //         this.innerContainer.appendChild(this.robotImage),
    //         this.innerContainer.appendChild(this.robotName),
    //         this.innerContainer.appendChild(this.robotAddress)
    //     this.grid.appendChild(this.innerContainer),
    //         roboLibrary.append(this.container)
    // }
}

module.exports = {addNewProduct};

