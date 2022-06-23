const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    let obj = {
        name : 'Vova',
        email: 'vova@gmail.com'
    }
    res.end(JSON.stringify(obj))

})

server.listen(8080)