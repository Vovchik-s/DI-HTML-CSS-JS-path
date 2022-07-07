const fs = require("fs");
const express = require("express");
let app = express();
let port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let shoppingList = [
    { name: "Coffee", price: 1.99 },
    { name: "Tea", price: 1.99 },
    { name: "Cake", price: 2.99 },
    { name: "Chips", price: 3.99 },
    { name: "Milk", price: 2.99 },
    { name: "Eggs", price: 3.99 },
    { name: "Bread", price: 2.99 },
    { name: "Soda", price: 2.99 }
];

// GET /items - this should respond with a list of shopping items.
app.get("/items", (req, res) => {
    res.send(shoppingList);
});

// GET /items/:id - this route should display a single item’s name and price
app.get("/items/:id", (req, res) => {
    let id = req.params.id;
    let item = shoppingList[id];

    res.send(item);
});

// POST /items - this route should accept form data and add it to the shopping list. (ie. add it to the json file)
app.post("/items", (req, res) => {
    let name = req.body.name;
    let price = req.body.price;
    let item = { name: name, price: price };

    fs.writeFile("shoppingList.json", JSON.stringify(shoppingList));

        shoppingList.push(item);
        res.send(shoppingList);
});




app.listen(port,() => console.log(`Server is running on port ${port}`));


