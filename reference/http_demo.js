//creating a server => bare minimum
const http = require('http');

//create a server object
http.createServer((req, res) => {
    //Write a response for a request
    res.write('Hello, just created a server');
    res.end();
}).listen(5000, () => console.log('server running...'));