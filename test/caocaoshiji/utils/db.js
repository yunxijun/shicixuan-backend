const fs = require('fs')
const path = require('path')

const {promisify} = require('util')
// const readFile = promisify(fs.readFile)
// const writeFile = promisify(fs.writeFile)


const dbPath = path.join(__dirname, './caocao.json')

exports.getDb =  () => {
    const data = fs.readFile(dbPath, () => {

    })
    return JSON.parse(data)
}