const axios = require('axios');
const express = require('express');
let app = express();
let port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        let users = response.data;
        // console.log(users);
        res.render("index", { users: users });
    })
});

// search robot
// app.get("/find", (req, res) => {
//     let id = req.query.id;
//     console.log(id)
//     axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
//     .then(response => {
//         let users = response.data;
//         res.render("index", { users: users });
//     })
// });


app.listen(port, () => console.log(`Server is running on port ${port}`));

