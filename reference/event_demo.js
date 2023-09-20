const EventEmitter = require('events')

//create class
class MyEmitter extends EventEmitter { }

//init object
const myEmitter = new MyEmitter();

// Evenet listener
myEmitter.on('event', () => console.log("Event Fired!"))

//Init event
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')