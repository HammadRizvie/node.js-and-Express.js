const { json } = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

const router1 = express.Router();
const router2 = express.Router();

router1.get('/',(req,res)=>{
    res.send("here is a");
}) 

router1.get('/b',(req,res)=>{
    res.send(req.url);
}) 
router1.get('/:username',(req,res)=>{ //it means it works if user anter any other thing 
    res.send(JSON.stringify(req.params));
}) 
router1.get('/d',(req,res)=>{
    res.send("here is d");
}) 

router2.get('/',(req,res)=>{
    res.send("this is a");
}) 

router2.get('/b',(req,res)=>{
    res.send("this is b");
}) 
router2.get('/c',(req,res)=>{
    res.send("this is c");
}) 
router2.get('/d',(req,res)=>{
    res.send("this is d");
}) 
app.use('/apiV1',router1);
app.use('/apiV2',router2);

app.get('/',(re1,res)=>{
    res.send("Express work")
})

app.listen(port)