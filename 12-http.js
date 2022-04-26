const http = require ('http')

//the http module has a createServer function which requires 
//a callback function with request and response object
const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }

    //here is the 'else' situation if the user is trying to access a page that deos not exist
    res.end(`
    <h1>Oops!<h1>
    <p>We can't seem to find the page that you are looking for</p>
    <a href='/'>back home</a>
    `)
})//req has a property that handles the 'req.URL', which handles the directory '/' navigation

server.listen (5000)






// //basic single page setup
// const server = http.createServer((req,res) =>{
//     res.write('Welcome to our homepage')
//     res.end()
// })
// server.listen (5000)
