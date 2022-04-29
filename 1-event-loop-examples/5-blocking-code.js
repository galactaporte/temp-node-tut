// this demo runs code that will BLOCK that 'EVENT LOOP'
// by simulating a user making the server busy with a request in the about page)

const http = require ('http')

const server = http.createServer((req,res) =>{ //note: 'req' module has a property: 'req.URL', which handles the directory '/' navigation

    if(req.url === '/'){
        res.end('Home page')
    }
    if(req.url === '/about'){ //now, let's set up a blocking code in the 'about' page
        //BLOCKING CODE!!!
        for(let i = 0; i < 1000; i++){
            for(let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('About page')
    }
    res.end('Error page')
})

server.listen (5000, () => {
    console.log ('Server listening on port 5000...')

})
