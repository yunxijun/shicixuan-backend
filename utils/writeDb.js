const {Lunyu} = require('../../model')

let j = require('./lunyu.json')


for (let index = 0; index < j.length; index++) {
    const element = j[index];
    const article = new Lunyu(element)
    article.save()

}

console.log(j.length);
console.log(typeof(j[0]));
console.log(j[0]);
