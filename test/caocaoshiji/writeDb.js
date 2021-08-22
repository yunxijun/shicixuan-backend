const {CaocaoShiJi} = require('../../model')
// const { getDb, saveDb } = require('./utils/db')


// const db = getDb()

let j = require('./caocao.json')


for (let index = 0; index < j.length; index++) {
    const element = j[index];
    const article = new CaocaoShiJi(element)
    article.save()

}

console.log(j.length);
console.log(typeof(j[0]));
console.log(j[0]);