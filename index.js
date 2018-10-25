const fs = require('fs');
const http = require('http');
const express = require('express')
const app = express()


const fetchFileAndWrite = _ => {
    const options = new URL('http://ramkulkarni.com/temp/2012-10-03/js/blog_js_script.js');
    let data = '';
    const httpReq = http.request(options, (res) => {
        res.on('data', (chunk) => {
            data = data + chunk;
        });
        res.on('end', () => {
            console.log(data);
            fs.writeFile('blog_js_script.js', `${data}`, (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
                data = null;
            });
        });
    });

    httpReq.on('error', (err) => {
        console.log(err);
    })
    httpReq.end();
}

app.get('/:name', function(req, res) {  

    var options = {
        root: __dirname + '/',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    var fileName = req.params.name;
    res.sendFile(fileName, options, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.listen(3000, _ => {
    console.log('server at 3000');
})