// instead of using a nested callback, 
// this demo shows a cleaner way by setting up 
// a queue system using an async approach
// (note timestamp 3hr, 11min. conversion into .promises)



const {readFile, writeFile} = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async() =>{
    try {
        const first = await readFile('./content/first.txt','utf8');
        const second = await readFile('./content/second.txt','utf8');
        await writeFile(
            './content/result-mind-grenade.txt', 
            `THIS IS AWESOME : ${first} ${second}`,{flag:'a'}
        )
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()




