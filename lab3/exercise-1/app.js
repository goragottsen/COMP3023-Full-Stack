//require built-in file system module
var fs = require('fs');

//create eradable stream
var stream = fs.createReadStream('data.txt');

//subscribe to 'data' emitter in readable stream
stream.on("data", function(data){
    var buf = Buffer(data);    
    console.log(buf.toString());
})