const http = require('http')

const server = http.createServer((req,res) => {
    console.log('request event')
    res.end('Hello World')
})

server.listen(5000, () => {
    console.log('Server listening on port: 5000.....')
})


// http SERVER process must stay alive, that is why this is in the callback
// use 'node app**.js' command, not to be confused with nodemon's auto update
// open localhost:5000 on the browser, terminal will print "server listening on port 5000"
// after which, keep hitting refresh on the browser while looking at the terminal,
//you will see that every refresh, a 'request event' is sent, so your server is alive!