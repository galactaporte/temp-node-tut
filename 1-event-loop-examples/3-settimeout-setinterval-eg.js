//try running this app with 'node...' command (ie: without nodemon) first and then a second time on nodemon



// --------------SET TIMEOUT EXAMPLE (process will exit)
//started operating system process
console.log('first')

setTimeout(() => { //'setTimeout' gets offloaded because it is asynchronous
    console.log ('second')
}, 0)

console.log ('third')
//completed and exited operating system process




// --------------SET INTERVAL EXAMPLE (proces stays alive/looping until killed)
setInterval(() => {
    console.log('hello world')
}, 2000)

console.log(`I will run first`)
// process stays alive unless
// Kill process CONTROL + C
// unexpected error

