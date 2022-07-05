// Exercise 1: Shopping Project
// Instructions
// We will be building a simple application of shopping list.
// Each item is an object that contains a name and a price. This item will be saved to an array. Therefore our shopping list is an array of objects.

// Our application should have the following routes:

// GET /items - this should respond with a list of shopping items.

// GET /items/:id - this route should display a single item’s name and price

// POST /item - this route should accept form data and add it to the shopping list. (ie. add it to the array)

// Bonus : For the two first instructions, instead of sending an array of object, send an HTML file
// Some help here and here


const express = require('express');
// const {products} = require('./modules/products');
const fs = require('fs');
const app = express();
let products = [];
let newProducts = [];

app.listen(3000, () => {
    console.log('server is running on port 3000')
})

app.use('/', express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/items", (req, res) => {
    try {
        products = JSON.parse(fs.readFileSync("./modules/products.json"));
    }
    catch (err) {
        console.log(err);
    }
});


app.get('/total', (req, res) => {
    res.json(products)
})


app.post('/items', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    }
    products.push(newProduct)

    fs.writeFileSync("./modules/products.json", JSON.stringify(products));

    res.redirect('/total')
})


app.get('/api/search', (req, res) => {
    const name = req.query.q;
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(name.toLowerCase())
    })

    if (filteredProducts > 1) {
        return res.json({ msg: 'Error, not found' })
    }

    res.json(filteredProducts)
})


app.get('/items/:id', (req, res) => {
    const id = req.params.id;
    const product = products.find(item => item.id == id);
    if (!product) {
        return res.status(404).json({ msg: 'Not found' })
    }
    res.json(product)
})


app.put('/items/:id', (req, res) => {
    const id = req.params.id;
    const index = products.find(product => {
        return product.id == id
    })

    if (index == -1) {
        return res.json({ msg: 'Error, not found' })
    }

    const updated = {
        id: products[index].id,
        name: req.body.name,
        price: req.body.price
    }

    products[index] = updated;
    res.json(products)
})

