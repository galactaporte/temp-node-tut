const path = require('path') //path is another built-in module in node
//it is a separator property accrding to the user's platform
console.log(path.sep)

const filePath = path.join('/content','subfolder','test.txt')
//now see how the above strings are merged into a path to access the dummy text file
console.log(filePath)

//want to inquire the basename of the dummy file?
const base = path.basename(filePath)
console.log (base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)