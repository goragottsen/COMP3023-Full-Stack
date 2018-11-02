var events = require('events');
var eventEmitter = new events.EventEmitter();

var fn = function(){
    console.log('call me.');
}

var fn1 = function(){
    if(fn){
        console.log('Call 911!');
    }
}

eventEmitter
    .on('call', fn)
    .on('call1', fn1)

eventEmitter.emit('call');