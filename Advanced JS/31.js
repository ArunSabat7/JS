console.log('welcome')
// js sets: stores unique value s
const set = new Set() // initialize an empyt set
console.log(set)

set.add('this')
set.add('modi')
set.add('modi')
console.log(set)

let set1 = new Set(['js', 'go', 'js', 23, () => {}, {
    a: 20,
    b: 40
}])
console.log(set1)
console.log(set1.size) // get size of set
console.log(set1.has('js')) // returns true if present in set otherwise false
set1.delete('js') // delete element
console.log(set1)

// iterating set
for (let i of set1) {
    console.log(i)
}