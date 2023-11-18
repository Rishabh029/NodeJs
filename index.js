const logEvents = require('./logEvent');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// intinalize the obj

const myEmitter = new MyEmitter()   ;

// add listener for the log event 

myEmitter.on('log',(msg)=> logEvents (msg));

setTimeout (()=> {
    // Emit the event

    myEmitter.emit('log','Log is emitted');
},2000)