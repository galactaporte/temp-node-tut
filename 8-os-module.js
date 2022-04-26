const os = require('os')// this is a built-in module within node
//not an external dependency which otherwise u need to npm install and configure ur JSON package file
//and no need to specify path ./ etc


//first app, get useful info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);