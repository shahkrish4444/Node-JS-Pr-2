var http = require('http')
var fs = require('fs')
http.createServer((req, res) => {
    if (req.url == '/about') {
        fs.readFile('about.txt', 'utf-8', function (err, data) {
            res.end(data)
        })
    }
    else{
        res.end('Your File is not being Found ...')
    }
}).listen(5000)