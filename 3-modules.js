//this file is originally named app.js and later into the course transferred into modules.js
// Modules are ENCAPSULATED CODE (only share minimum)


const names = require('./4-names') //require is a global function
const sayHi = require('./5-utils') //omit .js extension
const data = require('./6-alternative-flavor')
 //this import is not assigned to a variable
require('./7-mind-grenade') //it is a pre-invoked function and does not need anything further 




//checking out imported variable of object type
console.log (names)

//parsing strings into imported function
sayHi('Susan')
sayHi("john")
sayHi("peter")

//parsing imported object as props into another imported module which is a function
sayHi(names.john)
sayHi(names.peter)

//checking out imported data of multiple data types/ values
console.log(data)