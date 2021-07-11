const hastTable = require('./hashTable')

const ht = new hastTable()

console.log(ht.set('Fahri'))
console.log(ht.set('Fauzi'))
console.log(ht.set('Gandhi'))
console.log(ht.set('Budi'))

console.log(ht.get('70-490'))
console.log(ht.get('70-511'))
console.log(ht.get('71-587'))
console.log(ht.get('66-388'))

