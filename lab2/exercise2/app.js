var compare = require('./numbers/comparer');
var calc = require('./numbers/calculator');
var x = 9, y = 9;

if(compare.AreNumberEqual(x, y)){
    console.log(calc.Add(x, y));
}
else{
    console.log(calc.Subtract(x, y));
}
