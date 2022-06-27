const express = require("express");
const fs = require("fs");
let products = [];

// express app
const app = express();
app.listen(3000);

// register view engine
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/cart");
});


app.get("/cart", (req, res) => {
  res.render("cart", { title: "List" });

  try {
    products = JSON.parse(fs.readFileSync("./cart.json"));
  }
  catch (err) {
    console.log(err);
  }

});

app.get("/total", (req, res) => {
  res.render("total", { title: "Total", products });
});


// add name to cart and save to file
app.post("/cart", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const amount = req.body.amount;
  addItem(name, amount);

  fs.writeFileSync("./cart.json", JSON.stringify(products));
  res.redirect("/total");
}
);

function addItem (name, amount) {
  let newProduct = {
    name,
    amount: amount,
  };
  products.push(newProduct);
};

