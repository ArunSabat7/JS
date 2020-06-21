console.log('welcome')
// js maps
const map = new Map()
console.log(map)
const key1 = 'hello'
const key2 = {}
const key3 = () => {}
// setting value of keys
map.set(key1, 'string')
map.set(key2, 'blank obj')
map.set(key3, 'blank func')
console.log(map)
// getting value from map
let value1 = map.get(key1)
console.log(value1)
// get size of map
console.log(map.size)
// loop using for of to get keys and values
for (let [k, v] of map) {
    console.log(k, v)
}
// get only keys
for (let k1 of map.keys()) {
    console.log(k1)
}
for (let v1 of map.values()) {
    console.log(v1)
}

// converting map into an array
let arr = Array.from(map)
console.log(arr)
let keyarr = Array.from(map.keys())
console.log(keyarr)
let valarr = Array.from(map.values())
console.log(valarr)