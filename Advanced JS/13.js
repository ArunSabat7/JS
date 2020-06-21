// in js everything is an object

let a = 1
let b = 'modi'
let c = true
let d = null
let e = ''
console.log(typeof (d))

const yu = {
    name: 'modi',
    age: 63
}
yu.desg = 'pm'
console.log(yu)
console.log(typeof (() => {}))

const co = () => {
    console.log('check')
}
co.al = 'hello world'
console.log(co.al)
co()