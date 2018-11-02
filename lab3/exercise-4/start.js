var handleCounter = function(result){
    console.log('The callback count is ' + result);    
}

var callbackLoop = function(count, callback){
    for(let i = 0; i < count; i++){
        callback(i);
    }
}

callbackLoop(5, handleCounter);
callbackLoop(2, handleCounter);
callbackLoop(7, handleCounter);