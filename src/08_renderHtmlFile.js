const fs = require('fs')
const http = require('http')
function  sendFile(path,res,mime){
fs.readFile(path,function(error,data){
    if(error){
        return;
    }
    res.writeHead(200,{
        'Content-Type':mime
    });
    res.end(data.toString());
})
}
http.createServer(function(req,res){
    if(req.url == '/demoscript.js')
{
    sendFile('./demoscript.js',res,'text/javascript');
    return;
}
console.log("req==>",req)
fs.readFile('./Text.html',function(err,data){
    res.write(data);
    res.end();
})

}).listen(3000)