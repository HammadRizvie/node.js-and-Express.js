const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('massageLogged', function(arg){
    console.log('messageLogged==>',arg);
})
emitter.emit('massageLogged',"hammad")
setTimeout(()=>{
    emitter.emit('massageLogged',"hammad")
},2000)