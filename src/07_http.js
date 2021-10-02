var http = require('http')
var courses = 'hammad rizvi'
var server = http.createServer(function(request,response){
console.log("got a request!!",request);
if(request.url === '/api/courses'){
    response.write(JSON.stringify(courses));
    response.end();
}
else if(request.url === '/api/users'){
    response.write(JSON.stringify(users));
    response.end(); 
}
else{
    response.write(
        '<h1>Hello World</h1><h2>'+request.url+'</h2><Input placeholder="enter" />'
    );
    response.end(); 
}
}).listen(3001)