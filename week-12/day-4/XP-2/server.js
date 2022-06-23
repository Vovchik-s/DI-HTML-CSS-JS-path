// Exercise 1

// const app = require('./script.js');




// Exercise 2 : Express & Parameters

const express = require('express');
const app = express();


// app.get('/:id', (req, res) => {
//     res.json({
//         id: req.params.id
//     });
// });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


app.use('/', express.static(__dirname + '/public')); 
app.use(express.json());
app.use(express.urlencoded({extended: true}));



