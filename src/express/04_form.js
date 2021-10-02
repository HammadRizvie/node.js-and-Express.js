const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const port = 5000;
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/',express.static(__dirname + '/04_Form'))

app.post('/user',(req,res)=>{
    res.end(JSON.stringify(req.body)) 
})



app.listen(port,()=>{
    console.log("server is running: http://localhost:5000")
})