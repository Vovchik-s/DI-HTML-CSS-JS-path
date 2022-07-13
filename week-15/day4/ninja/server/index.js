const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


app.get("/api", (req, res) => {
    res.json([
    { id: 1, username: "somebody" },
    { id: 2, username: "somebody_else" },
]);
});

app.get("/api/customers/", (req, res) => {
    res.json([
        {"id":1,"firstName":"John","lastName":"Doe"},
    {"id":2,"firstName":"Jane","lastName":"Doe"},
    {"id":3,"firstName":"Ziv","lastName":"Chen"},
    {"id":4,"firstName":"Isaac","lastName":"Groisman"},
    {"id":5,"firstName":"Avner","lastName":"Maman"},
    {"id":6,"firstName":"Megan","lastName":"Dreyfuss"}
]);
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});