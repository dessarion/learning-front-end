const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {

    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'publick', 'index.html'),(err,data)=>{
    //         if(err){
    //             throw err
    //         }
    //         res.writeHead(200, {
    //             'Content-type': 'text/html'
    //         });
    //         res.end(data)
    //     })
    // } else if(req.url === '/content'){
    //     fs.readFile(path.join(__dirname, 'publick', 'content.html'),(err,data)=>{
    //         if(err){
    //             throw err
    //         }
    //         res.writeHead(200, {
    //             'Content-type': 'text/html'
    //         });
    //         res.end(data)
    //     }) 
    // }

    //То же самое но более универсально ниже

    let filePath = path.join(__dirname, 'publick', (req.url === '/' ? 'index.html' : req.url));

    const ext = path.extname(filePath);

    let contentType = 'text/html';

    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break;
        case '.js':
            contentType = 'text/javascript'
            break;
        default:
            contentType = 'text/html'
            break;
    }

    if (!ext) {
        filePath += '.html'
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'publick', 'err.html'), (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end('error')
                } else {
                    res.writeHead(200, {
                        'Content-type': contentType
                    });
                    res.end(data)
                }
            })
        } else {
            res.writeHead(200, {
                'Content-type': contentType
            });
            res.end(content);
        }
    })
});

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
})