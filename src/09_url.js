const http = require('http');
const url = require('url');

// Localhost:8080?year=2020&month=9

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    console.log("before req.url===>",req.url)   
    var q = url.parse(req.url,true).query;
    console.log("after req.url===>",req.url)
    console.log("q===>",q)
    var txt = "year" + q.year + " " + "month" + q.month;
    res.end(txt);
}).listen(8080)