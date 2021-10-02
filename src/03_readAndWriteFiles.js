var fs = require('fs');

function readFile(path){
    fs.readFile(path,'utf8',function (error,data){
        (error)?console.log("error==============>",error):console.log("data===>",data)
    }); 
}
readFile('./abc.txt')

// function writeFile(path,data){
//     fs.writeFile(path,data,function (error){
//         (error)?console.log(error):console.log("succesfully")
//     }); 
// }
// writeFile('./def.txt','...'); // if file doesnt exist it create its own

// function appendFile(path,data){
//     fs.appendFile(path,data,function (error){
//         (error)?console.log(error):console.log("succesfully")
//     }); 
// }

// appendFile('./abc.txt',"abc yohuii");