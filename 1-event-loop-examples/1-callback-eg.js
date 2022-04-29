const { readFile } = require('fs')

console.log('started a first task_EXECUTE THE FIRST CONSOLE LOG')
//CHECK FILE PATH!!!
readFile('./content/first.txt','utf8', (err,result) =>{
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task_AND THIS FIRST TEXT FILE RESIDES IN A CALLBACK FUNCTION_')
    console.log(`"EVENT LOOP" OFFLOADS THIS because this 'readFile' is an asynchronous function`)
})
console.log ('starting next task_EXECUTING THE LAST CONSOLE LOG LINE IN THE APP')