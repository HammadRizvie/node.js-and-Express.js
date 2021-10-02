const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

// app.get('/',(req,res)=>{
//     res.sendFile(__dirname + '/public/index.html');
// }).listen(port)

app.get('/',(req,res)=>{
    // res.end(JSON.stringify(req.query));
    res.json(req.query);
}).listen(port)

app.post('/',(req,res)=>{
    res.end(JSON.stringify(req.body));
}).listen(port)