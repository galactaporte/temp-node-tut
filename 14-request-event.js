const EventEmitter = require('events');

// now we immediately create an instance of the class (EventEmitter)
const customEmitter = new EventEmitter()


customEmitter.on('response', (name, id) => {
    console.log(`data received ${name} with id: ${id}`)
})
customEmitter.on('response', () => {
    console.log(`some other logic here `)
})


customEmitter.emit('response', 'john', 34)

// // note: you may create many events once EMIT is executed (to give the 'response') 
// // also, the order of code lines matters here



// notes. ref:
// https://medium.com/swlh/what-the-heck-is-an-event-emitter-84407fce6cd3

// // demo1: event emitter (simple)
// const events = require('events');
// const emitter = new events.EventEmitter();
// emitter.on('Fire', () => {
//   console.log('Fire!!!!!!!')
// });
// console.log('Ready!');
// console.log('Aim!');
// emitter.emit ('Fire');
// // listener must begin to listen FIRST ('ON') and then you may EMIT
// // alternatively a 'read stream' can be created instead of having a listenener
// // to standby forever for an event emission (see demo3)


// // demo2: passing arguments to the event listener
// const events = require('events');
// const emitter = new events.EventEmitter();
// emitter.on('fire', (word) => {
//   console.log(word)
// });
// emitter.emit('fire', '...Ready!');
// emitter.emit('fire', '...Aim!');
// emitter.emit('fire', 'Fire!!!!!!');

// // demo3: open a 'read stream' that triggers a listener whenever a file is opened and ready
// var fs = require('fs');
// var rs = fs.createReadStream('./content/result-mind-grenade.txt');
// rs.on('open', function () {
//  console.log('File opened');
// });

