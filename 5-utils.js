//THIS IS NOT A PRE_INVOKED MODULE. IT IS EXPORTED AND CALLED INSIDE THE IMPORTING MODULE

const sayHi = (name) =>{
    console.log(`Hello there ${name}`)
}

module.exports = sayHi //export the function