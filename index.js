const http = require('http');
const path = require('path');
const fs = require('fs');
const { url } = require('inspector');

const server = http.createServer((req, res) => {
    /* if(req.url === '/'){
        fs.readFile(path.join(__dirname,'public','index.html'), (err,
            content) => {
                if(err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
        })        
    }
    if(req.url === '/api/users'){
       const users = [
        {name: 'Harshi Chawla', age: 21},
        {name: 'Dhairya', age: 23}
       ];

       res.writeHead(200, {'Content-Type':'application/json' });
       res.end(JSON.stringify(users));
    } */

    //built file path
    let filePath = path.join(
        __dirname,
        'public', 
        req.url==='/' ? 'index.html': req.url);

    //extension of file
    let extname = path.extname(filePath);
    
    //initial content type
    let contentType = 'text/html';
    
    //check extname and content
    switch(extname){
        case '.js':
            contentType = 'text/javascript'
            break;
        case '.css':
            contentType = 'text/css'
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType= 'image/png';
            break;
        case 'jpg':
            contentType= 'image/jpg';
            break;
    }

    //read file
    fs.readFile(filePath, (err, content) =>{
        if(err) {
            if(err.code == 'ENOENT'){
                //page not found
                fs.readFile(path.join(
                    __dirname,
                    'public',
                    'error.html'), 
                (err, content) =>{
                    res.writeHead(200, {'Content-Type':'text/html'});
                    res.end(content, 'utf8');
                })
            }
            else {
                //some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            //success
            res.writeHead(200, {'Content-Type':contentType});
            res.end(content, 'utf8');
        }
    });
});

//on deployment => server runs on the environment variable of the host => process.env.PORT
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//nodemon=> we dont need to run it again and again