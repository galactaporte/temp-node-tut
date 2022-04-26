//asynchronous method

const { readFile, writeFile } = require('fs');
 console.log ('start');
                                 // delete this line >>>const { isBuffer } = require('util');

//async needs a 'callback'...which is basically a thing that we run when we're done
readFile('./content/first.txt','utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    //console.log(result)
    const first = result;

    //here's the nested callback which READS the second file after the first and then WRITES
    readFile('./content/second.txt','utf8', (err, result) =>{
        if(err) {
            console.log (err)
            return
        }
        //console.log(result)
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the result via async/callback function: ${first}, ${second}`
            ,(err, result)=>{
                if (err){
                    console.log(err);
                    return;
                }
            //console.log (result)
            console.log ('done with this task');
            }
        )
    })
})
console.log ('starting with the next text)')