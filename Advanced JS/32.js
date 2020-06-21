console.log('welcome')
// symbols
const sym = Symbol()
const sym1 = Symbol()

console.log(sym)
console.log(typeof (sym))
console.log(sym === sym1)

const k1 = Symbol()
const k2 = Symbol()

let ob = {}
ob[k1] = 'modi'
ob[k2] = 'shah'
ob['name'] = 'raj'
console.log(ob)

// symbols are in=gnired in for in loops
for (let i in ob) {
    console.log(i)
}