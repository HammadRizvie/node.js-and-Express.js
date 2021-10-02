const express = require('express');
const app = express();
const port = 5000;
var cookieParser = require('cookie-parser')
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.cookie('myFirstCookie','Looks good');
    res.send("cookie..!")
})
app.get('/clear',(req,res)=>{
    res.clearCookie('myFirstCookie');
    res.send("cookie cleared..!")
})

app.listen(port,()=>{
    console.log("server is running: http://localhost:5000")
})