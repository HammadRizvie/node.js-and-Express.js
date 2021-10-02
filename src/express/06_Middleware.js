const express = require('express');
const app = express();
const port = 5000;

let firstMiddleware = (req,res,next) =>{
    console.log("firstMiddleware");
    next();
}

let secondMiddleware = (req,res,next) =>{
    console.log("secondMiddleware");
    next();
    }
app.get('/',firstMiddleware,secondMiddleware,(req,res)=>{
    res.send("Middleware send")
})

app.listen(port,()=>{
    console.log("server is running: http://localhost:5000")
})