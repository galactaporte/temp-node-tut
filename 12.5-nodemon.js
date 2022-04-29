// manual approach to create package json in the root, create properties, etc)
//npm init (step by step, press enter to skip)
// npm init -y (flags 'yes' to all questions

const _= require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems =_.flattenDeep(items)
console.log(newItems)
console.log ("Hello People");//change this, save and see your output change immediately on the terminal without running the app command

//npm i nodemon -D
//JSON: "dev" = ""nodemon app.js"
//CLI: path npm run dev

//otherwise, npm start
