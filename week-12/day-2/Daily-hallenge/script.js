// const b = 5;

// const { largeNumber } = require("./main.js");

// console.log(largeNumber + b);


const http = require('http');

const server = http.createServer((req,res)=> {
console.log('Get a request from client')
res.setHeader('Content-Type', 'text/html')
res.end('<h1>Hi there at the frontend</h1>')
}) 


// server.listen(3000, ()=> {
//     console.log('Im listening')
// })


const {currentDate} = require('./main.js');



const server1 = http.createServer((req,res)=> {
    res.setHeader('Content-Type', 'text/html')
    res.end(`<h1>Hi there at the frontend</h1> <p>The current date is ${currentDate()}</p>`)
})



server1.listen(8080)

