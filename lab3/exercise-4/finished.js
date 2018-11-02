var max = 50;

var handleCounter = function(err, counter, waitTime, timestamp){
    if(err != null){
        console.log(err.toString());
    }
    else{
        console.log("Callback counter: " + counter + " " + waitTime + " " + timestamp);
    }
}

var callbackWait = function(counter, callback){
    var randomWaitTime = Math.random() + 89;

    var currentDate = new Date();

    var current = currentDate.getTime();

    if(randomWaitTime > max){
        callback('Time is greater than max',  counter, randomWaitTime, current )
    }else{
        setTimeout(callback, randomWaitTime, null, counter, randomWaitTime, current)
    }

    
}

for(var i = 0; i < 10; i++){
    callbackWait(i, handleCounter);
}