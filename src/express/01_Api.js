const express = require('express');
const app = express();
const port = 5000;
var fs = require('fs');
app.get('/data',(req,res)=>{
    fs.readFile('../Text.html','utf8',(error,data)=>{
        error?console.log("error==>",error):res.send(data)  
    })
})


app.use('/public',express.static(__dirname + '/public'))
//static is used for the whole folder in which html js and css files easily run


// app.get('/',(req,res)=>{
//         res.send("hammad")  
// })
// app.get('/user',(req,res)=>{
//     res.json('<h5>hello</h5>')
// })
app.listen(port,()=>{
    console.log("Server is running")
})


