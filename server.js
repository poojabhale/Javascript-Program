var express = require('express');
var app = express();
var hello = require('./module.js')



app.get('/square/:input', (req,res,next)=>{
let input = req.params.input;
    let squ=hello.squarenumber(input);
    var err = new Error("Something went wrong");
    next(err);
    res.status(200).send(squ);
})

app.get('/mult/:number/to/:num',(req,res,next)=>{
    let number =req.params.number;    
    let num = req.params.num;
    var err = new Error("Something went wrong");
    next(err);
     var mult=hello.multnumber(number,num);
    res.status(200).send(mult);
})

app.get('/cube/:number',(req,res,next)=>{
    let number =req.params.number;     
    var err = new Error("Something went wrong");
    next(err);
     var cube=hello.cubenumber(number);
    res.send(cube);
        
})   


app.get('/pow/:number/to/:num',(req,res,next)=>{
    let number =req.params.number;    
    let num = req.params.num;
    var pow=hello.powernumber(number,num);
    var err = new Error("Something went wrong");
        next(err);
        
    res.status(200).send(pow);
        
})

app.listen("3000");
