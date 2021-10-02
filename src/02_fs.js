var fs = require('fs');


console.log("sync")
var files = fs.readdirSync('./')
console.log("files==>",files)

console.log("end")


// console.log("Async")
// fs.readdir('./',function(error,files){
//     if(error){
//         console.log(error)
//     }else{
//         console.log(files)
//     }
// })
// console.log("end")
