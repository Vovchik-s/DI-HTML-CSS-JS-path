const express = require("express");
const fs = require("fs");
const cors = require("cors");
const morgan = require("morgan");
const { Pool } = require("pg"); // connect to a postgres db
const { release } = require("os"); // connect to a postgres db
const fileUpload = require("express-fileupload");

require("dotenv").config(); // load .env file


const port = process.env.PORT || 8080; // set port from .env file

const knex = require("knex")({ // not in use. Needed for uploaded images to be saved BLOB tyle in db
    client: "pg",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
    },
    useNullAsDefault: true,
});


let pool = new Pool() // create a pool of connections to the db

const corOptions = { // allow cross requests
    origin: "http://localhost:8081",
    optionsSuccessStatus: 200
};


let products = [];  // before DB , stored products in JSON file

// express app
const app = express();
app.listen(port);

// register view engine
app.set("view engine", "ejs");


// app.use(morgan("dev"));
app.use(fileUpload());
app.use(cors(corOptions));
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.redirect("/shopping");
});


app.get("/shopping", (req, res) => {
    res.render("index", { title: "List" });

});


app.get("/selling", (req, res) => {
    res.render("selling", { title: "Total", products });

    try {
        products = JSON.parse(fs.readFileSync("./public/data/products.json"));
    }
    catch (err) {
        console.log(err);
    }
});



app.post("/selling", async (req, res) => {
    try {
        let newProduct = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image
        }

        products.push(newProduct);

        let result = await pool.query("INSERT INTO products (name, description, price, img) VALUES ($1, $2, $3, $4)", [newProduct.name, newProduct.description, newProduct.price, newProduct.image]);

        fs.writeFileSync("./public/data/products.json", JSON.stringify(products));
        res.redirect("/buying");
    } catch (err) {
        console.log("ERRORRRR", err);
    }
});


app.get("/update/:id", async (req, res) => {
    console.log("LOVE .hg.ryt.tyyyy", req.params)

    let resp = await pool.query("SELECT * FROM products");

    let id = req.params.id;
    let product = resp.rows.find(product => {
        return product.id == id;
    });
    console.log("LOVE .hg.ryt.tyyyy", product)
    try {
        res.render("update", { title: "Update", product });
        products = JSON.parse(fs.readFileSync("./public/data/products.json"));
    }
    catch (err) {
        console.log(err);
    }
})


app.post("/update/:id", async (req, res) => {
    let id = +(req.params.id);
    try {
        let newProduct = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image
        }
        let result = await pool.query("UPDATE products SET name = $1, description = $2, price = $3, img = $4 WHERE id = $5", [newProduct.name, newProduct.description, newProduct.price, newProduct.image, id]);

        fs.writeFileSync("./public/data/products.json", JSON.stringify(products));
        res.redirect("/buying");
    } catch (err) {
        console.log(err);
    }
});


app.get("/delete/:id", async (req, res) => {
    let id = +(req.params.id);
    let product = products.find(product => {
        if (product && product.id === id) {
            return product;
        }
    });
    
    try {
        let result = await pool.query("DELETE FROM products WHERE id = $1", [id]);

        fs.writeFileSync("./public/data/products.json", JSON.stringify(products));
        res.redirect("/buying");
    } catch (err) {
        console.log(err);
    }
});


app.get("/buying", async (req, res) => {
    try {
        let resp = await pool.query("SELECT * FROM products");
        res.render("buying", { title: "Total", products: resp.rows });
    } catch (err) {
        console.log("ERRORRRR", err);
    }
});
