var express = require('express');
var app = express();

app.listen(3000);

// app.get('/greet', function(req, res){
//     res.send('hello world!');
// });

var requestTime = function(req, res, next){
    req.requestTime =Date.now();
    next()
}

app.use(requestTime)

app.get('/greet', function(req, res){
    console.log('GET received: ' + req.requestTime);
    res.send('Hello world!');
})


app.post('/greetPost', function(req, res){
    console.log('POST received: ' + req.requestTime);
    res.send('Hello POST!');
})