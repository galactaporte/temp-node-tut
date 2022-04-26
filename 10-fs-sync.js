//synchronous the modules required by destructuring them as such:
const { readFileSync, writeFileSync } = require('fs');
console.log ('start');

//alternatively you can access the modules using these syntax:
//const fs = require ('fs');
//or fs.read....filename

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

//node can read text files...
console.log (first, second)



//and node can CREATE for you a new text file...
//just specify the directory and encoder 
//we now merge a new string with the text from file 'first' and 'second'

writeFileSync('./content/result-sync.txt', 
`Here is the result: ${first}, ${second}`
)
// any existing text in the file (if already created) will be overwritten with the text input above. 
//try replacing the text with a string and run the app again, you will see the text get updated

//however, if you need to append the new text instead, before closing the bracket on the above command,
//you should insert>>>    ,{ flag: 'a' }     >>>and you will see that the new text is only appended instead of replaced

console.log ('done with this task');
console.log ('starting the next one');
